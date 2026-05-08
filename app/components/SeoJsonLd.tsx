export default function SeoJsonLd() {
  const siteUrl = 'https://clearchoicepay.com'
  const normalizedSiteUrl = siteUrl.replace(/\/$/, '')

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${normalizedSiteUrl}/#organization`,
    name: 'Clear Choice Payment Solutions',
    url: normalizedSiteUrl,
    logo: `${normalizedSiteUrl}/brand/clearchoice-logo.svg`,
    parentOrganization: { '@type': 'Organization', name: 'Switch Commerce' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: 'en',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${normalizedSiteUrl}/#website`,
    name: 'Clear Choice Payment Solutions',
    url: normalizedSiteUrl,
    publisher: { '@id': `${normalizedSiteUrl}/#organization` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  )
}
