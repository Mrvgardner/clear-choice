// app/about/page.tsx
import type { Metadata } from 'next'
import Icon from '@/components/Icon'
import { Shield, TrendingUp, Users } from 'react-feather'
import Link from 'next/link'
import Section from '@/components/Section'
import ValuesInline from '@/components/ValuesInline'
import FeatureBanner from '@/components/FeatureBanner'
import ResourceBanner from '@/components/ResourceBanner'

export const metadata: Metadata = {
  title: 'About Clear Choice',
  description:
    'Clear Choice Payment Solutions is a Switch Commerce company helping businesses grow with merchant services, ATM placement, Watchdog monitoring, kiosks, FX ATMs, and affiliate programs.',
  alternates: { canonical: '/about' },
}

const values = [
  { 
    title: 'Reliability', 
    desc: 'Payments that stay up and keep you selling.', 
    IconEl: <Icon as={Shield} /> 
  },
  { 
    title: 'Growth', 
    desc: 'Optimize fees and unlock new revenue streams.', 
    IconEl: <Icon as={TrendingUp} /> 
  },
  { 
    title: 'Partnership', 
    desc: 'Training, compliance, and support as you scale.', 
    IconEl: <Icon as={Users} /> 
  },
]

const services = [
  {
    name: 'Merchant Services',
    href: '/services/merchant-services',
    summary: 'Stable payment processing, fee optimization, chargeback support, and compliance-minded merchant support.',
  },
  {
    name: 'ATM Placement',
    href: '/services/atm-placement',
    summary: 'Hands-off ATM programs with placement guidance, installation, servicing, cash logistics, and revenue share.',
  },
  {
    name: 'Watchdog Monitoring',
    href: '/services/watchdog',
    summary: 'Proactive ATM monitoring and 24/7 issue visibility designed to reduce downtime and emergency truck rolls.',
  },
  {
    name: 'All-In-One Kiosks',
    href: '/services/kiosks',
    summary: 'Self-service kiosk solutions for cash access, bill pay, foot traffic, and customer convenience.',
  },
  {
    name: 'Foreign Exchange ATMs',
    href: '/services/foreign-exchange',
    summary: 'FX-enabled ATM programs for venues serving travelers and international customers.',
  },
  {
    name: 'Affiliate Program',
    href: '/services/affiliate-program',
    summary: 'A partner program for building recurring payment and ATM revenue without traditional ISO overhead.',
  },
]

const audiences = [
  'Independent ATM operators',
  'High-risk merchants',
  'Convenience stores and retail locations',
  'Hospitality, travel, and airport venues',
  'Affiliate and ISO-style payment partners',
  'Businesses that need stable payment infrastructure',
]

function AboutEntityJsonLd() {
  const siteUrl = 'https://clearchoicepay.com'
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Clear Choice Payment Solutions',
        url: siteUrl,
        logo: `${siteUrl}/brand/clearchoice-logo.svg`,
        foundingDate: '2019',
        parentOrganization: {
          '@type': 'Organization',
          name: 'Switch Commerce',
          url: 'https://www.switchcommerce.net',
        },
        areaServed: 'US',
        knowsAbout: [
          'merchant services',
          'ATM placement',
          'ATM monitoring',
          'kiosks',
          'foreign exchange ATMs',
          'high-risk merchant processing',
          'payment compliance',
          'affiliate payment programs',
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': `${siteUrl}/about#aboutpage`,
        url: `${siteUrl}/about`,
        name: 'About Clear Choice Payment Solutions',
        description: metadata.description,
        mainEntity: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/about#services`,
        name: 'Clear Choice Payment Solutions service catalog',
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: service.name,
            description: service.summary,
            url: `${siteUrl}${service.href}`,
            provider: { '@id': `${siteUrl}/#organization` },
            areaServed: 'US',
          },
        })),
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function AboutPage() {
  return (
    <main>
      <AboutEntityJsonLd />
      <section className="pt-16 pb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-4 uppercase font-switch">About Clear Choice</h1>
        <p className="max-w-2xl mx-auto text-lg text-black/70">
          Clear Choice Payment Solutions is a Switch Commerce company helping businesses build stable, revenue-focused payment systems.
        </p>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-[6px,1fr] gap-6 px-6">
          {/* Accent vertical bar */}
          <div className="bg-[#ff4f00] rounded-full" />

          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">OUR STORY</h2>
            <p className="text-gray-700 mb-4">
              Clear Choice Payment Solutions was founded in <strong>2019</strong> with a simple idea:
              give entrepreneurs a way to make money in the ATM industry <em>without</em> paying the
              outrageous buy-in fees that keep most people out.
            </p>
            <p className="text-gray-700 mb-4">
              Traditional programs forced operators to pay ISO-level costs just for the right to
              participate. We believed there had to be a better way — one that put more money in
              your pocket and less in hidden fees.
            </p>
            <p className="text-gray-700">
              That’s still Clear Choice's mission: to give our partners the tools, transparency, and
              support to succeed. Today, hundreds of merchants and
              partners trust Clear Choice to deliver stable processing, honest revenue share,
              and growth opportunities in payments.
            </p>
          </div>
        </div>
      </section>

  <ValuesInline />

      <Section variant="surface" containerClassName="py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1fr,1.25fr]">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Company Snapshot</h2>
              <p className="text-gray-700">
                Clear Choice works with merchants, ATM operators, venues, and partners that need dependable payment infrastructure, clear support, and practical ways to grow revenue.
              </p>
              <dl className="mt-6 grid gap-4 text-sm">
                <div className="border border-gray-200 bg-white p-4 rounded-lg">
                  <dt className="font-semibold text-gray-900">Brand</dt>
                  <dd className="text-gray-700 mt-1">Clear Choice Payment Solutions</dd>
                </div>
                <div className="border border-gray-200 bg-white p-4 rounded-lg">
                  <dt className="font-semibold text-gray-900">Founded</dt>
                  <dd className="text-gray-700 mt-1">2019</dd>
                </div>
                <div className="border border-gray-200 bg-white p-4 rounded-lg">
                  <dt className="font-semibold text-gray-900">Parent Company</dt>
                  <dd className="text-gray-700 mt-1">
                    A Switch Commerce company with payment infrastructure roots.
                  </dd>
                </div>
                <div className="border border-gray-200 bg-white p-4 rounded-lg">
                  <dt className="font-semibold text-gray-900">Primary Market</dt>
                  <dd className="text-gray-700 mt-1">United States</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">What Clear Choice Does</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="border border-gray-200 bg-white p-5 rounded-lg hover:shadow-lg hover:border-[#ff4f00]/40 transition block"
                  >
                    <h3 className="font-heading text-lg normal-case">{service.name}</h3>
                    <p className="mt-2 text-sm text-gray-700">{service.summary}</p>
                    <div className="mt-3 text-[#ff4f00] font-cta text-sm">Learn more →</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted" containerClassName="py-16">
        <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Serve</h2>
            <ul className="grid gap-3">
              {audiences.map((audience) => (
                <li key={audience} className="flex gap-3 text-gray-700">
                  <span className="text-[#ff4f00]" aria-hidden>•</span>
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">How We Help</h2>
            <p className="text-gray-700 mb-4">
              Clear Choice focuses on payment stability, compliance-aware operations, uptime, transparent revenue opportunities, and practical support from onboarding through growth.
            </p>
            <div className="grid gap-3 text-sm">
              <Link href="/industries" className="text-[#ff4f00] font-semibold hover:underline">
                See industries we serve →
              </Link>
              <Link href="/resources" className="text-[#ff4f00] font-semibold hover:underline">
                Browse resources and guides →
              </Link>
              <Link href="/book-demo" className="text-[#ff4f00] font-semibold hover:underline">
                Book a free demo →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA after Our Story (ResourceBanner) */}
      <ResourceBanner
        heading="See Our Resources"
        sub="Explore guides, checklists, and more to help your business grow."
        href="/resources"
        label="Browse Resources"
      />
      {/* Resources Teaser */}
      <Section variant="muted" containerClassName="py-12">
        <h2 className="text-2xl font-semibold mb-8">Resources</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/resources/case-studies"
            className="border rounded-xl p-6 bg-white hover:shadow-lg transition block"
          >
            <h3 className="font-heading text-base normal-case">Case Studies</h3>
            <p className="text-sm text-gray-600 mt-1">
              Proof from the field — uptime lifted, fees lowered, fewer truck rolls.
            </p>
            <div className="mt-3 text-[#ff4f00] font-cta">See Success Stories →</div>
          </Link>

          <Link
            href="/resources/faqs"
            className="border rounded-xl p-6 bg-white hover:shadow-lg transition block"
          >
            <h3 className="font-heading text-base normal-case">FAQs</h3>
            <p className="text-sm text-gray-600 mt-1">
              Clear answers to the most common questions about ATMs, kiosks, and merchant services.
            </p>
            <div className="mt-3 text-[#ff4f00] font-cta">Read FAQs →</div>
          </Link>

          <Link
            href="/resources/guides/merchant-compliance"
            className="border rounded-xl p-6 bg-white hover:shadow-lg transition block"
          >
            <h3 className="font-heading text-base normal-case">Compliance Guide</h3>
            <p className="text-sm text-gray-600 mt-1">
              Stay compliant with evolving regulations and protect your business.
            </p>
            <div className="mt-3 text-[#ff4f00] font-cta">Get the Guide →</div>
          </Link>
        </div>
      </Section>
    </main>
  )
}
