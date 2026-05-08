import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { listDocs, readDoc } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import FeatureBanner from '@/components/FeatureBanner'
import Section from '@/components/Section'
import ResourceBanner from '@/components/ResourceBanner'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ResourceJsonLd from '@/components/ResourceJsonLd'

export async function generateStaticParams() {
  return listDocs('case-studies').map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const d = readDoc('case-studies', params.slug)
  if (!d) return { title: 'Not found' }
  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: { canonical: `/resources/case-studies/${params.slug}` },
  }
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const doc = readDoc('case-studies', params.slug)
  if (!doc) return notFound()
  const meta = doc.meta

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <article className="prose prose-neutral max-w-none">
        <h1 className="text-3xl font-bold tracking-tight">{doc.meta.title}</h1>
        {doc.meta.date ? <p className="text-sm text-gray-500 mt-1">{new Date(doc.meta.date).toLocaleDateString()}</p> : null}
        <div className="mt-6">
          <MDXRemote source={doc.content} />
        </div>
      </article>
      <section className="mt-12 space-y-4 text-center">
        <Link
          href="/contact"
          className="inline-block bg-[#ff4f00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e04400] transition"
        >
          Talk to Sales Today
        </Link>

        <Link
          href="/resources/case-studies"
          className="block text-sm text-gray-500 hover:text-[#ff4f00]"
        >
          See More Success Stories
        </Link>
      </section>

      <ResourceBanner
        heading={`See results like this`}
        sub={`Book a demo to learn how we can reproduce these outcomes for your business.`}
        href="/book-demo"
        label="Book a Free Demo"
        className="mt-12"
      />
      <ResourceJsonLd
        type="Article"
        title={meta.title}
        description={meta.description}
        url={`/resources/case-studies/${meta.slug}`}
        datePublished={meta.date}
        genre="Case study"
        keywords={[meta.product, meta.industry, ...(meta.metrics || [])].filter(Boolean)}
        about={[meta.product, meta.industry, ...(meta.metrics || [])].filter(Boolean)}
        audience={['Business owners', 'Payment operators', 'Retail and convenience operators']}
        isPartOf={{ name: 'Case Studies', url: '/resources/case-studies' }}
        action={{
          type: 'RegisterAction',
          name: 'Book a demo',
          target: '/book-demo',
        }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Resources', url: '/resources' },
        { name: 'Case Studies', url: '/resources/case-studies' },
        { name: meta.title },
      ]}/>
    </main>
  )
}
