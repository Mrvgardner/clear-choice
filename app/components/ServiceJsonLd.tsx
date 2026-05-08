export default function ServiceJsonLd({
  name, 
  description, 
  url, 
  areaServed = 'US',
  serviceType,
  category,
  audience,
  related,
  reviews,
}: { 
  name: string
  description: string
  url: string
  areaServed?: string 
  serviceType?: string
  category?: string
  audience?: string[]
  related?: { name: string; url: string }[]
  reviews?: { body: string; author: string }[]
}) {
  const siteUrl = 'https://clearchoicepay.com'
  const normalizedUrl = url.startsWith('http') ? url : `${siteUrl}${url}`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${normalizedUrl}#service`,
    name,
    description,
    url: normalizedUrl,
    provider: { 
      '@type': 'Organization', 
      '@id': `${siteUrl}/#organization`,
      name: 'Clear Choice Payment Solutions', 
      url: siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    serviceType: serviceType || name,
    category,
    audience: audience?.map((name) => ({
      '@type': 'Audience',
      audienceType: name,
    })),
    isRelatedTo: related?.map((item) => ({
      '@type': 'WebPage',
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
    review: reviews?.map((review) => ({
      '@type': 'Review',
      reviewBody: review.body,
      author: {
        '@type': 'Organization',
        name: review.author,
      },
      itemReviewed: {
        '@id': `${normalizedUrl}#service`,
      },
    })),
    offers: {
      '@type': 'Offer',
      url: `${siteUrl}/book-demo`,
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
      description: 'Book a free demo with Clear Choice Payment Solutions.',
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
