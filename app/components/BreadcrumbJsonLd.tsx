export default function BreadcrumbJsonLd({ items }: { items: {name: string; url?: string}[] }) {
  const siteUrl = 'https://clearchoicepay.com'
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      ...(it.url ? { item: it.url.startsWith('http') ? it.url : `${siteUrl}${it.url}` } : {})
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
