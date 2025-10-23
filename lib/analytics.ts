// lib/analytics.ts
export const track = (event: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return
  
  // GA4
  ;(window as any).gtag?.('event', event, params)
  
  // Meta Pixel
  ;(window as any).fbq?.('trackCustom', event, params)
}

// Predefined tracking events
export const trackEvent = {
  // Form interactions
  formStart: (formType: string) => track('form_start', { form_type: formType }),
  formSubmit: (formType: string) => track('form_submit', { form_type: formType }),
  
  // CTA clicks
  ctaClick: (area: string, label: string) => track('cta_click', { area, label }),
  
  // Page engagement
  pageView: (page: string) => track('page_view', { page }),
  
  // Service interactions
  serviceView: (service: string) => track('service_view', { service }),
  
  // Resource downloads
  resourceDownload: (resource: string) => track('resource_download', { resource }),
  
  // Demo requests
  demoRequest: (source: string) => track('demo_request', { source }),
}
