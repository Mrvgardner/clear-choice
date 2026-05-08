type ResourceJsonLdProps = {
  type?: 'Article' | 'CreativeWork' | 'DigitalDocument'
  title: string
  description?: string
  url: string
  datePublished?: string
  dateModified?: string
  image?: string
  keywords?: string[]
  about?: string[]
  audience?: string[]
  genre?: string
  isPartOf?: {
    name: string
    url: string
  }
  action?: {
    type: 'DownloadAction' | 'RegisterAction'
    name: string
    target: string
  }
}

export default function ResourceJsonLd({
  type = 'CreativeWork',
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
  keywords,
  about,
  audience,
  genre,
  isPartOf,
  action,
}: ResourceJsonLdProps) {
  const siteUrl = 'https://clearchoicepay.com'
  const normalizedUrl = url.startsWith('http') ? url : `${siteUrl}${url}`
  const normalizedImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : undefined
  const normalizedActionTarget = action
    ? action.target.startsWith('http')
      ? action.target
      : `${siteUrl}${action.target}`
    : undefined

  const data = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${normalizedUrl}#resource`,
    ...(type === 'Article' ? { headline: title } : { name: title }),
    description,
    url: normalizedUrl,
    image: normalizedImage,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Clear Choice Payment Solutions',
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Clear Choice Payment Solutions',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/brand/clearchoice-logo.svg`,
      },
    },
    isPartOf: isPartOf
      ? {
          '@type': 'WebPage',
          name: isPartOf.name,
          url: isPartOf.url.startsWith('http') ? isPartOf.url : `${siteUrl}${isPartOf.url}`,
        }
      : undefined,
    genre,
    keywords,
    about: about?.map((name) => ({
      '@type': 'Thing',
      name,
    })),
    audience: audience?.map((name) => ({
      '@type': 'Audience',
      audienceType: name,
    })),
    potentialAction: action
      ? {
          '@type': action.type,
          name: action.name,
          target: normalizedActionTarget,
        }
      : undefined,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
