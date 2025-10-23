import { getClient } from '@/lib/sanity.preview'
import { serviceBySlugQuery } from '@/lib/queries'
import { notFound } from 'next/navigation'
import Button from '@/components/Button'

// This is an example of how to create a CMS-driven service page
// Replace your existing hardcoded service pages with this pattern

export default async function CMSServicePage({ params }: { params: { slug: string } }) {
  // const data = await getClient().fetch(serviceBySlugQuery, { slug: params.slug })
  const data = null // Placeholder for example
  if (!data) return notFound()

  return (
    <main>
      {/* Hero Section */}
      <section className="section">
        <h1 className="text-display font-bold">{data.title}</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-2xl">
          {data.subtitle}
        </p>
        <div className="mt-8 flex gap-4">
          <Button href={data.ctaHref || "/book-demo"} variant="primary">
            {data.ctaLabel || "Book a Free Demo Now"}
          </Button>
          <Button href="/contact" variant="secondary">Talk to Sales</Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What's in your way</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          {data.problem}
        </p>
      </section>

      {/* Solution Section */}
      <section className="section">
        <h2 className="text-2xl font-semibold">How Clear Choice helps</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          {data.solution}
        </p>
        
        {data.plan && (
          <ol className="mt-4 grid sm:grid-cols-3 gap-6">
            {data.plan.map((step: string, i: number) => (
              <li key={step} className="border border-gray-200 rounded-xl p-5">
                <div className="text-sm text-gray-500">Step {i + 1}</div>
                <div className="mt-1 font-semibold">{step}</div>
              </li>
            ))}
          </ol>
        )}
      </section>

      {/* Outcomes Section */}
      {data.outcomes && (
        <section className="section">
          <h2 className="text-2xl font-semibold">What you'll get</h2>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
            {data.outcomes.map((outcome: string) => (
              <li key={outcome} className="flex gap-2">
                <span className="text-green-500">•</span><span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Testimonial Section */}
      {data.testimonial && (
        <section className="section">
          <h2 className="text-2xl font-semibold">Who says?</h2>
          <blockquote className="mt-4 border-l-4 border-brand pl-4 text-gray-700 max-w-3xl">
            "{data.testimonial.quote}"
            <footer className="mt-3 text-sm text-gray-500">
              — {data.testimonial.name}
              {data.testimonial.role && `, ${data.testimonial.role}`}
              {data.testimonial.company && `, ${data.testimonial.company}`}
            </footer>
          </blockquote>
        </section>
      )}

      {/* Final CTA */}
      <section className="section">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready to get started?</h3>
          <p className="mt-2 text-gray-600">Let's discuss how we can help your business grow.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href={data.ctaHref || "/book-demo"} variant="primary">
              {data.ctaLabel || "Book a Free Demo Now"}
            </Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Example of how to generate static params for all services
export async function generateStaticParams() {
  const services = await getClient().fetch(`*[_type == "service"]{"slug": slug.current}`)
  return services.map((service: any) => ({
    slug: service.slug,
  }))
}

// Example metadata generation from CMS
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = await getClient().fetch(serviceBySlugQuery, { slug: params.slug })
  
  if (!data) return {}

  return {
    title: data.seo?.title || `${data.title} | Clear Choice Payment Solutions`,
    description: data.seo?.description || data.subtitle,
  }
}
