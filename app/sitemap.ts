import type { MetadataRoute } from 'next'
import { listDocs } from '@/lib/mdx'
import { getAllPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://clearchoicepay.com'
  const now = new Date()
  const dateOrNow = (value?: string) => {
    if (!value) return now
    const parsed = new Date(value)
    return Number.isNaN(parsed.getTime()) ? now : parsed
  }
  const staticRoutes = [
    '/',
    '/services',
    '/services/merchant-services',
    '/services/watchdog',
    '/services/foreign-exchange',
    '/services/affiliate-program',
    '/services/atm-placement',
    '/services/kiosks',
    '/industries',
    '/solutions',
    '/solutions/watchdog-atm-monitoring',
    '/solutions/merchant-payment-stability',
    '/solutions/affiliate-payment-partner-program',
    '/about',
    '/about/company',
    '/about/press',
    '/highriskmerchants',
    '/highriskpartners',
    '/lowriskmerchants',
    '/watchdog',
    '/resources',
    '/resources/blog',
    '/resources/library',
    '/resources/faqs',
    '/resources/case-studies',
    '/resources/guides/atm-safety',
    '/resources/guides/maintenance',
    '/resources/guides/merchant-compliance',
    '/contact',
    '/book-demo',
    '/terms',
    '/llms.txt',
    '/llms-full.txt',
  ]
  const libraryRoutes = [
    '/resources/library/atm-launch-checklist',
    '/resources/library/merchant-statement-guide',
    '/resources/library/watchdog-playbook',
    '/resources/library/atm-safety-checklist',
    '/resources/library/atm-maintenance-checklist',
  ]
  const datedRoutes = [
    ...getAllPosts().map((post) => ({
      path: `/resources/blog/${post.slug}`,
      lastModified: dateOrNow(post.date),
      priority: 0.65,
    })),
    ...listDocs('case-studies').map((doc) => ({
      path: `/resources/case-studies/${doc.slug}`,
      lastModified: dateOrNow(doc.date),
      priority: 0.65,
    })),
  ]

  const staticEntries = [...staticRoutes, ...libraryRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.7,
  }))

  const datedEntries = datedRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }))

  return [...staticEntries, ...datedEntries]
}
