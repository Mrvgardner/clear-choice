/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      { source: '/demo', destination: '/book-demo', permanent: true },
      { source: '/fx', destination: '/services/foreign-exchange', permanent: true },
      { source: '/atm', destination: '/services/atm-placement', permanent: true },
      { source: '/affiliate', destination: '/services/affiliate-program', permanent: true },
      { source: '/merchants', destination: '/services/merchant-services', permanent: true },
      { source: '/kiosk', destination: '/services/kiosks', permanent: true },
      { source: '/products/:path*', destination: '/services/:path*', permanent: true },
      { source: '/company', destination: '/about/company', permanent: true },
      { source: '/support', destination: '/contact', permanent: true },
      { source: '/blog/:path*', destination: '/resources/blog/:path*', permanent: true },
      { source: '/news/:path*', destination: '/resources/blog/:path*', permanent: true },
      { source: '/articles/:path*', destination: '/resources/blog/:path*', permanent: true },
      { source: '/book-a-demo', destination: '/book-demo', permanent: true },
      { source: '/schedule-demo', destination: '/book-demo', permanent: true },
      { source: '/get-started', destination: '/book-demo', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/reach-out', destination: '/contact', permanent: true },
    ]
  },
}

module.exports = nextConfig
