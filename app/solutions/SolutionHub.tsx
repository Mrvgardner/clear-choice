import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import Button from '@/components/Button'

type HubLink = {
  label: string
  href: string
}

type HubSection = {
  title: string
  body: string
  points?: string[]
}

export type SolutionHubData = {
  title: string
  eyebrow: string
  description: string
  canonicalPath: string
  primaryCta: HubLink
  secondaryCta: HubLink
  audiences: string[]
  problems: string[]
  approach: HubSection[]
  proof: string[]
  related: HubLink[]
  service: HubLink
  resource?: HubLink
}

function SolutionHubJsonLd({ data }: { data: SolutionHubData }) {
  const siteUrl = 'https://clearchoicepay.com'
  const url = `${siteUrl}${data.canonicalPath}`
  const json = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: data.title,
    description: data.description,
    url,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Clear Choice Payment Solutions',
    },
    about: [
      data.service.label,
      ...data.audiences,
      ...data.problems,
    ].map((name) => ({
      '@type': 'Thing',
      name,
    })),
    audience: data.audiences.map((name) => ({
      '@type': 'Audience',
      audienceType: name,
    })),
    isPartOf: {
      '@type': 'CollectionPage',
      name: 'Solutions',
      url: `${siteUrl}/solutions`,
    },
    potentialAction: {
      '@type': 'ScheduleAction',
      name: data.primaryCta.label,
      target: `${siteUrl}${data.primaryCta.href}`,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}

export default function SolutionHub({ data }: { data: SolutionHubData }) {
  return (
    <main>
      <section className="section">
        <p className="text-sm uppercase tracking-wide text-gray-500">{data.eyebrow}</p>
        <h1 className="mt-3 text-display font-bold max-w-4xl">{data.title}</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-3xl">{data.description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={data.primaryCta.href} variant="primary">{data.primaryCta.label}</Button>
          <Button href={data.secondaryCta.href} variant="secondary">{data.secondaryCta.label}</Button>
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold">Who this helps</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.audiences.map((item) => (
            <div key={item} className="border border-gray-200 rounded-lg p-5 bg-white">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold">Problems this solves</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {data.problems.map((item) => (
            <li key={item} className="flex gap-3 text-gray-700">
              <span className="mt-1 text-brand">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section bg-gray-50">
        <h2 className="text-2xl font-semibold">How Clear Choice approaches it</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {data.approach.map((section) => (
            <article key={section.title} className="border border-gray-200 rounded-lg p-6 bg-white">
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <p className="mt-3 text-gray-700">{section.body}</p>
              {section.points ? (
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-green-500">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold">Signals that it is working</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {data.proof.map((item) => (
            <div key={item} className="border-l-4 border-brand pl-4 py-2 text-gray-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="border border-gray-200 rounded-lg p-8 bg-white">
          <h2 className="text-2xl font-semibold">Where to go next</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href={data.service.href} className="block border border-gray-200 rounded-lg p-5 hover:border-brand transition">
              <span className="text-sm text-gray-500">Core service</span>
              <span className="mt-1 block font-semibold text-brand">{data.service.label}</span>
            </Link>
            {data.resource ? (
              <Link href={data.resource.href} className="block border border-gray-200 rounded-lg p-5 hover:border-brand transition">
                <span className="text-sm text-gray-500">Resource</span>
                <span className="mt-1 block font-semibold text-brand">{data.resource.label}</span>
              </Link>
            ) : null}
            {data.related.map((link) => (
              <Link key={link.href} href={link.href} className="block border border-gray-200 rounded-lg p-5 hover:border-brand transition">
                <span className="text-sm text-gray-500">Related</span>
                <span className="mt-1 block font-semibold text-brand">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="rounded-lg bg-brand text-white p-8 text-center">
          <h2 className="text-2xl font-bold">Map the right path for your business</h2>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
            Clear Choice can help you decide what fits now, what can wait, and how to grow from the first useful deployment.
          </p>
          <div className="mt-6">
            <Button href="/book-demo" variant="secondary" className="bg-white hover:bg-white text-brand border-white">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <SolutionHubJsonLd data={data} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/solutions' },
        { name: data.title },
      ]}/>
    </main>
  )
}
