// lib/resources.ts
// Helper to fetch related case studies by product (and optional industry)
import { listDocs } from '@/lib/mdx'

export type RelatedParams = {
  product: string
  industry?: string
  limit?: number
}

export function getRelatedCaseStudies({ product, industry, limit = 3 }: RelatedParams) {
  const all = listDocs('case-studies')
  const filtered = all.filter((d) => {
    const prodOk = (d.product || '').toLowerCase() === product.toLowerCase()
    const indOk =
      !industry ||
      !d.industry ||
      (d.industry && String(d.industry).toLowerCase() === industry.toLowerCase())
    return prodOk && indOk
  })
  return filtered.slice(0, limit)
}
