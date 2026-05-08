import { ChevronDown } from 'react-feather'

export type ServiceFaqItem = {
  q: string
  a: string
}

export function ServiceFaqJsonLd({ items }: { items: ServiceFaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function ServiceFaq({ items }: { items: ServiceFaqItem[] }) {
  return (
    <section className="section">
      <h2 className="text-2xl font-semibold">Questions businesses ask</h2>
      <div className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
        {items.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="font-heading text-lg normal-case">{item.q}</span>
              <span
                aria-hidden="true"
                className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 group-hover:bg-gray-50 group-hover:border-gray-400 transition"
              >
                <ChevronDown className="transition group-open:rotate-180" size={18} />
              </span>
            </summary>
            <p className="mt-3 text-gray-700 max-w-3xl">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
