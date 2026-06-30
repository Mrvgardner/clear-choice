import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
const TOKEN_URL = 'https://oauth2.googleapis.com/token'
const GA_DATA_URL = 'https://analyticsdata.googleapis.com/v1beta'
const BLOG_PATH_PREFIX = '/resources/blog'

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

function parseArgs(argv) {
  const args = {}
  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i]
    if (!item.startsWith('--')) continue
    const key = item.slice(2)
    const next = argv[i + 1]
    if (!next || next.startsWith('--')) {
      args[key] = true
    } else {
      args[key] = next
      i += 1
    }
  }
  return args
}

function formatDate(date) {
  return date.toISOString().slice(0, 10)
}

function previousFullWeek(today = new Date()) {
  const date = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()))
  const day = date.getUTCDay()
  const daysSinceMonday = (day + 6) % 7
  const thisMonday = new Date(date)
  thisMonday.setUTCDate(date.getUTCDate() - daysSinceMonday)
  const end = new Date(thisMonday)
  end.setUTCDate(thisMonday.getUTCDate() - 1)
  const start = new Date(end)
  start.setUTCDate(end.getUTCDate() - 6)
  return { startDate: formatDate(start), endDate: formatDate(end) }
}

async function loadServiceAccount() {
  if (process.env.GA4_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GA4_SERVICE_ACCOUNT_JSON)
  }

  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    const raw = await fs.readFile(process.env.GOOGLE_APPLICATION_CREDENTIALS, 'utf8')
    return JSON.parse(raw)
  }

  throw new Error(
    'Missing GA credentials. Set GA4_SERVICE_ACCOUNT_JSON or GOOGLE_APPLICATION_CREDENTIALS.'
  )
}

async function getAccessToken(serviceAccount) {
  const now = Math.floor(Date.now() / 1000)
  const header = { alg: 'RS256', typ: 'JWT' }
  const payload = {
    iss: serviceAccount.client_email,
    scope: SCOPES.join(' '),
    aud: TOKEN_URL,
    exp: now + 3600,
    iat: now,
  }

  const unsignedToken = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`
  const signature = crypto
    .createSign('RSA-SHA256')
    .update(unsignedToken)
    .sign(serviceAccount.private_key, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsignedToken}.${signature}`,
    }),
  })

  if (!response.ok) {
    throw new Error(`Google token request failed: ${response.status} ${await response.text()}`)
  }

  const data = await response.json()
  return data.access_token
}

async function runReport({ accessToken, propertyId, body }) {
  const response = await fetch(`${GA_DATA_URL}/properties/${propertyId}:runReport`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${accessToken}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(`GA4 report failed: ${response.status} ${await response.text()}`)
  }

  return response.json()
}

function metric(row, index) {
  return Number(row?.metricValues?.[index]?.value || 0)
}

function dimension(row, index) {
  return row?.dimensionValues?.[index]?.value || ''
}

function totals(report) {
  const row = report.rows?.[0]
  return {
    activeUsers: metric(row, 0),
    views: metric(row, 1),
    sessions: metric(row, 2),
    averageEngagementSeconds: metric(row, 3),
  }
}

function table(headers, rows) {
  if (!rows.length) return '_No data returned._'
  const divider = headers.map(() => ':---').join(' | ')
  const body = rows.map((row) => row.join(' | ')).join('\n')
  return `| ${headers.join(' | ')} |\n| ${divider} |\n${body}`
}

function safeCell(value) {
  return String(value).replace(/\|/g, '\\|').replace(/\n/g, ' ')
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const propertyId = args.property || process.env.GA4_PROPERTY_ID
  if (!propertyId) {
    throw new Error('Missing GA4 property ID. Set GA4_PROPERTY_ID or pass --property.')
  }

  const week = args.start && args.end
    ? { startDate: args.start, endDate: args.end }
    : previousFullWeek()

  const serviceAccount = await loadServiceAccount()
  const accessToken = await getAccessToken(serviceAccount)
  const dateRanges = [{ startDate: week.startDate, endDate: week.endDate }]

  const commonMetrics = [
    { name: 'activeUsers' },
    { name: 'screenPageViews' },
    { name: 'sessions' },
    { name: 'averageSessionDuration' },
  ]

  const siteSummary = await runReport({
    accessToken,
    propertyId,
    body: { dateRanges, metrics: commonMetrics },
  })

  const blogSummary = await runReport({
    accessToken,
    propertyId,
    body: {
      dateRanges,
      metrics: commonMetrics,
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          stringFilter: { matchType: 'BEGINS_WITH', value: BLOG_PATH_PREFIX },
        },
      },
    },
  })

  const topBlogPages = await runReport({
    accessToken,
    propertyId,
    body: {
      dateRanges,
      dimensions: [{ name: 'pagePath' }, { name: 'pageTitle' }],
      metrics: commonMetrics,
      limit: 10,
      orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
      dimensionFilter: {
        filter: {
          fieldName: 'pagePath',
          stringFilter: { matchType: 'BEGINS_WITH', value: BLOG_PATH_PREFIX },
        },
      },
    },
  })

  const trafficSources = await runReport({
    accessToken,
    propertyId,
    body: {
      dateRanges,
      dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [{ name: 'activeUsers' }, { name: 'sessions' }, { name: 'screenPageViews' }],
      limit: 10,
      orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
    },
  })

  const conversionEvents = await runReport({
    accessToken,
    propertyId,
    body: {
      dateRanges,
      dimensions: [{ name: 'eventName' }],
      metrics: [{ name: 'eventCount' }, { name: 'activeUsers' }],
      limit: 20,
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      dimensionFilter: {
        orGroup: {
          expressions: [
            { filter: { fieldName: 'eventName', stringFilter: { matchType: 'CONTAINS', value: 'form' } } },
            { filter: { fieldName: 'eventName', stringFilter: { matchType: 'CONTAINS', value: 'demo' } } },
            { filter: { fieldName: 'eventName', stringFilter: { matchType: 'CONTAINS', value: 'download' } } },
            { filter: { fieldName: 'eventName', stringFilter: { matchType: 'CONTAINS', value: 'cta' } } },
          ],
        },
      },
    },
  })

  const site = totals(siteSummary)
  const blog = totals(blogSummary)
  const blogShare = site.activeUsers ? ((blog.activeUsers / site.activeUsers) * 100).toFixed(1) : '0.0'

  const topRows = (topBlogPages.rows || []).map((row) => [
    safeCell(dimension(row, 1) || dimension(row, 0)),
    safeCell(dimension(row, 0)),
    metric(row, 0).toLocaleString(),
    metric(row, 1).toLocaleString(),
    metric(row, 2).toLocaleString(),
  ])

  const sourceRows = (trafficSources.rows || []).map((row) => [
    safeCell(dimension(row, 0)),
    metric(row, 0).toLocaleString(),
    metric(row, 1).toLocaleString(),
    metric(row, 2).toLocaleString(),
  ])

  const eventRows = (conversionEvents.rows || []).map((row) => [
    safeCell(dimension(row, 0)),
    metric(row, 0).toLocaleString(),
    metric(row, 1).toLocaleString(),
  ])

  const report = `# Weekly Website Performance Report

**Period:** ${week.startDate} to ${week.endDate}

## Snapshot

- Site readers: ${site.activeUsers.toLocaleString()}
- Site page views: ${site.views.toLocaleString()}
- Site sessions: ${site.sessions.toLocaleString()}
- Blog readers: ${blog.activeUsers.toLocaleString()}
- Blog page views: ${blog.views.toLocaleString()}
- Blog share of site readers: ${blogShare}%

## Top Blog Pages

${table(['Post', 'Path', 'Readers', 'Views', 'Sessions'], topRows)}

## Traffic Sources

${table(['Channel', 'Readers', 'Sessions', 'Views'], sourceRows)}

## Conversion Signals

${table(['Event', 'Count', 'Readers'], eventRows)}

## Notes

- Readers are GA4 active users.
- Blog readership includes paths beginning with \`${BLOG_PATH_PREFIX}\`.
- This report depends on GA4 property access for measurement ID \`G-H7Z8FNTNRS\`.
`

  const outDir = path.resolve('reports/website')
  await fs.mkdir(outDir, { recursive: true })
  const outPath = path.join(outDir, `${week.endDate}-weekly-website-report.md`)
  await fs.writeFile(outPath, report)
  console.log(outPath)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
