import { getClient } from '@/lib/sanity.preview'
import { resourcesFilteredQuery } from '@/lib/queries'
import { Suspense } from 'react'

interface ResourcesPageProps {
  searchParams: Record<string, string>
}

export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
  const { product, buyer, industry } = searchParams
  // const data = await getClient().fetch(resourcesFilteredQuery, { product, buyer, industry })
  const data: any[] = [] // Placeholder for example

  return (
    <main className="section">
      <header className="text-center mb-12">
        <h1 className="text-display font-bold mb-4">Resource Library</h1>
        <p className="text-lead text-gray-600 max-w-2xl mx-auto">
          Guides, whitepapers, and tools to help you succeed in the payments industry.
        </p>
      </header>

      {/* Filter UI */}
      <div className="mb-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Filter Resources</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <FilterSelect
            name="product"
            label="Product Type"
            options={['ATM', 'POS', 'Software', 'Kiosk']}
            current={product}
          />
          <FilterSelect
            name="buyer"
            label="Buyer Type"
            options={['Sales Agent', 'ISO', 'Support Team', 'Merchant']}
            current={buyer}
          />
          <FilterSelect
            name="industry"
            label="Industry"
            options={['Convenience', 'Liquor', 'Smoke Shop', 'Cannabis', 'Airport', 'Hospitality', 'Retail']}
            current={industry}
          />
        </div>
      </div>

      {/* Resources Grid */}
      <Suspense fallback={<div>Loading resources...</div>}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((resource: any) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </Suspense>

      {data.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No resources found with the current filters.</p>
        </div>
      )}
    </main>
  )
}

function FilterSelect({ name, label, options, current }: {
  name: string
  label: string
  options: string[]
  current?: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        name={name}
        defaultValue={current || ''}
        onChange={(e) => {
          const url = new URL(window.location.href)
          if (e.target.value) {
            url.searchParams.set(name, e.target.value)
          } else {
            url.searchParams.delete(name)
          }
          window.location.href = url.toString()
        }}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
      >
        <option value="">All {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

function ResourceCard({ resource }: { resource: any }) {
  const formattedDate = new Date(resource.publishedAt).toLocaleDateString()
  
  return (
    <article className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition-shadow">
      <div className="flex flex-wrap gap-2 mb-3">
        {resource.productType?.map((type: string) => (
          <span key={type} className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
            {type}
          </span>
        ))}
      </div>
      
      <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
      <p className="text-gray-600 mb-4">{resource.summary}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{formattedDate}</span>
        {resource.fileUrl && (
          <a
            href={resource.fileUrl}
            download
            className="inline-flex items-center text-brand font-semibold hover:underline"
          >
            Download PDF
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        )}
      </div>
    </article>
  )
}
