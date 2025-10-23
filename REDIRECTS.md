# URL Redirects Configuration

## Overview
Redirects are configured in `next.config.mjs` to handle old URLs, common misspellings, and provide short URLs for marketing.

## Configured Redirects

### Short URLs
- `/demo` → `/book-demo`
- `/fx` → `/services/foreign-exchange`
- `/atm` → `/services/atm-placement`
- `/watchdog` → `/services/watchdog`
- `/affiliate` → `/services/affiliate-program`
- `/merchants` → `/services/merchant-services`
- `/kiosk` → `/services/kiosks`

### Legacy URL Patterns
- `/solutions/*` → `/services/*`
- `/products/*` → `/services/*`
- `/about` → `/services`
- `/company` → `/contact`
- `/support` → `/contact`

### Content Migration
- `/blog/*` → `/resources/library/*`
- `/news/*` → `/resources/library/*`
- `/articles/*` → `/resources/library/*`

### Common Variations
- `/book-a-demo` → `/book-demo`
- `/schedule-demo` → `/book-demo`
- `/get-started` → `/book-demo`
- `/contact-us` → `/contact`
- `/reach-out` → `/contact`

## Implementation Notes

All redirects are:
- **Permanent (301)** - For SEO link equity transfer
- **Server-side** - Handled by Next.js before page load
- **Automatic** - No client-side JavaScript required

## Testing Redirects

In production, you can test redirects with:
```bash
curl -I https://clearchoicepay.com/demo
# Should return: 301 Moved Permanently
# Location: https://clearchoicepay.com/book-demo
```

## Marketing Benefits

1. **Short URLs**: Easy to remember and share
2. **SEO Protection**: Preserve link equity from old URLs  
3. **User Experience**: No broken links for returning visitors
4. **Analytics**: Track redirect usage patterns
