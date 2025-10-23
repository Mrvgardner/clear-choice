// Example: How to integrate CMS data into your existing /app/services/page.tsx
// This shows how to replace your hardcoded service data with CMS content

import { getClient } from '@/lib/sanity.preview'
import { allServicesQuery } from '@/lib/queries'
import ServiceCard from '@/components/ServiceCard'

export default async function ServicesOverview() {
  // Fetch services from CMS instead of hardcoded data
  const services = await getClient().fetch(allServicesQuery)

  return (
    <main className="section">
      <header className="text-center mb-12">
        <h1 className="text-display font-bold mb-4">Our Services</h1>
        <p className="text-lead text-gray-600 max-w-2xl mx-auto">
          Whether you need a single ATM or a complete payment ecosystem, Clear Choice builds the right solution for your business.
        </p>
      </header>

      {/* CMS-driven Services Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Core Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: any) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              desc={service.subtitle}
              href={`/services/${service.slug}`}
              // You can add icon mapping logic here
              // icon={getServiceIcon(service.slug)}
              // bullets={service.keyBenefits}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

// Helper function to map service slugs to icons (optional)
function getServiceIcon(slug: string) {
  const iconMap: Record<string, JSX.Element> = {
    'merchant-services': (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path fill="currentColor" d="M3 7h18v10H3V7zm2 2v6h14V9H5zm3 8h8v2H8v-2z" />
      </svg>
    ),
    'atm-placement': (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path fill="currentColor" d="M3 4h18v4H3V4zm2 6h14v10H5V10zm3 2v2h8v-2H8z" />
      </svg>
    ),
    // Add more icon mappings as needed
  }
  
  return iconMap[slug] || (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path fill="currentColor" d="M12 2l3 6 6 .9-4.5 4.3 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8l3-6z" />
    </svg>
  )
}
