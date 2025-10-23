declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // Analytics tracking implementation
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
}

export default trackEvent