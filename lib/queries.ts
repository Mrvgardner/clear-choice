import { groq } from 'next-sanity'

export const serviceBySlugQuery = groq`
*[_type == "service" && slug.current == $slug][0]{
  title, subtitle, "slug": slug.current, heroImage, problem, solution, plan, outcomes,
  testimonial->{quote, name, company, role},
  seo
}
`

export const allServicesQuery = groq`
*[_type == "service"] | order(title asc){
  title, "slug": slug.current, subtitle
}
`

export const resourcesFilteredQuery = groq`
*[_type == "resource"
  && (!defined($product) || $product in productType[])
  && (!defined($buyer) || $buyer in buyerType[])
  && (!defined($industry) || $industry in industry[])
] | order(publishedAt desc)[0...24]{
  title, "slug": slug.current, summary, productType, buyerType, industry, publishedAt, "fileUrl": media.asset->url
}
`

export const testimonialsQuery = groq`
*[_type == "testimonial"] | order(_createdAt desc){
  quote, name, company, role
}
`

export const faqsByCategoryQuery = groq`
*[_type == "faq" && (!defined($category) || category == $category)] | order(_createdAt asc){
  question, answer, category
}
`

export const navigationQuery = groq`
*[_type == "nav"][0]{
  main[]{label, href},
  footer[]{label, href}
}
`

export const settingsQuery = groq`
*[_type == "settings"][0]{
  siteTitle, tagline, footerOwner, defaultOgImage
}
`
