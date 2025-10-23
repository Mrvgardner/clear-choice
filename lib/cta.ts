// Central source of truth for CTA button labels

// Services (core) by slug
const SERVICE_CTA: Record<string, string> = {
  'affiliate-program': 'Claim Your Free Consultation',
  'atm-placement': 'Talk to Sales Today',
  'watchdog': 'Start Your Free Demo',
  'merchant-services': 'Grow Your Revenue',
  'kiosks': 'Get Started Now',
  'foreign-exchange': 'Talk to Sales Today',
}

// "More Solutions" (by title)
const MORE_SOLUTIONS_CTA: Record<string, string> = {
  'Dispensary Solution': 'Get Started Now',
  'Cash Management': 'Talk to Sales Today',
  'Billboard': 'Talk to Sales Today',
  'Reliable Equipment': 'Talk to Sales Today',
  'Expert Servicing': 'Talk to Sales Today',
}

// Industries (by key)
const INDUSTRY_CTA: Record<string, string> = {
  convenience: 'Get Started Now',
  liquor: 'Stay Profitable & Compliant',
  smoke: 'Protect Your Payments',
  cannabis: 'Simplify Cannabis Payments',
  airports: 'Serve International Travelers',
  hospitality: 'Delight Your Guests',
  retail: 'Upgrade Your Checkout',
}

// Service Detail footer (by slug)
const SERVICE_DETAIL_CTA: Record<string, string> = {
  'affiliate-program': 'Claim Your Free Consultation',
  'atm-placement': 'Talk to Sales Today',
  'watchdog': 'Start Your Free Demo',
  'merchant-services': 'Grow Your Revenue',
  'kiosks': 'Get Started Now',
  'foreign-exchange': 'Talk to Sales Today',
}

export function getServiceCTA(slug: string, fallback = 'Talk to Sales Today') {
  return SERVICE_CTA[slug] ?? fallback
}
export function getMoreSolutionsCTA(title: string, fallback = 'Talk to Sales Today') {
  return MORE_SOLUTIONS_CTA[title] ?? fallback
}
export function getIndustryCTA(key: string, fallback = 'Talk to Sales Today') {
  return INDUSTRY_CTA[key] ?? fallback
}
export function getServiceDetailCTA(slug: string, fallback = 'Talk to Sales Today') {
  return SERVICE_DETAIL_CTA[slug] ?? fallback
}
