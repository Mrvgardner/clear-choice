/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    // Temporarily ignore build errors during development
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily ignore ESLint errors during development  
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Short URLs and common redirects
      { source: '/demo', destination: '/book-demo', permanent: true },
      { source: '/fx', destination: '/services/foreign-exchange', permanent: true },
      { source: '/atm', destination: '/services/atm-placement', permanent: true },
      { source: '/watchdog', destination: '/services/watchdog', permanent: true },
      { source: '/affiliate', destination: '/services/affiliate-program', permanent: true },
      { source: '/merchants', destination: '/services/merchant-services', permanent: true },
      { source: '/kiosk', destination: '/services/kiosks', permanent: true },
      
      // Legacy URL patterns
      { source: '/solutions/:path*', destination: '/services/:path*', permanent: true },
      { source: '/products/:path*', destination: '/services/:path*', permanent: true },
      { source: '/about', destination: '/services', permanent: true },
      { source: '/company', destination: '/contact', permanent: true },
      { source: '/support', destination: '/contact', permanent: true },
      
      // Old blog/news patterns
      { source: '/blog/:path*', destination: '/resources/library/:path*', permanent: true },
      { source: '/news/:path*', destination: '/resources/library/:path*', permanent: true },
      { source: '/articles/:path*', destination: '/resources/library/:path*', permanent: true },
      
      // Common misspellings/variations
      { source: '/book-a-demo', destination: '/book-demo', permanent: true },
      { source: '/schedule-demo', destination: '/book-demo', permanent: true },
      { source: '/get-started', destination: '/book-demo', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/reach-out', destination: '/contact', permanent: true },
    ]
  },
};

export default config;