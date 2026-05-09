// app/services/affiliate-program/page.tsx
import Button from '@/components/Button'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ServiceFaq, { ServiceFaqJsonLd } from '@/components/ServiceFaq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Program',
  description: 'Build an ISO-style payments business without taking on the network-fee burden of becoming an ISO.',
  alternates: { canonical: '/services/affiliate-program' },
}

const faqs = [
  {
    q: 'Who is the Clear Choice affiliate program for?',
    a: 'The affiliate program is for partners and entrepreneurs who want recurring revenue opportunities in payments or ATMs without taking on the network-fee burden and overhead of becoming an ISO.',
  },
  {
    q: 'Does Clear Choice provide affiliate training?',
    a: 'Yes. The program is built around training, compliance support, partner tools, and ongoing account support so affiliates have a clearer path to growth.',
  },
  {
    q: 'What can affiliates offer through Clear Choice?',
    a: 'Affiliates can connect businesses with Clear Choice payment and ATM solutions, including merchant services, ATM placement, monitoring, kiosks, and related support.',
  },
  {
    q: 'Do affiliates have to pay network fees like an ISO?',
    a: 'No. Clear Choice gives affiliate partners room to manage and grow their business without requiring them to shoulder the same network-fee structure and obligations that traditional ISOs face.',
  },
]

const testimonial = {
  body: 'Clear Choice gave us the freedom to manage the business without the network-fee burden of becoming an ISO ourselves.',
  author: 'Clear Choice Affiliate',
}

export default function AffiliateProgram() {
  return (
    <main>
      {/* Option: hero customized per service */}
      <section className="section">
        <h1 className="text-display font-bold">Affiliate Program</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-2xl">
          Manage your payments business with ISO-style freedom without paying network fees like one.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
          <Button href="/solutions/affiliate-payment-partner-program" variant="secondary">Partner Growth Strategy</Button>
        </div>
      </section>

      {/* Problem + Villain */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What's in your way</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Becoming an ISO can mean heavy network fees, compliance obligations, paperwork, and support gaps before the business has room to grow.
        </p>
      </section>

      {/* Solution + Plan */}
      <section className="section">
        <h2 className="text-2xl font-semibold">How Clear Choice helps</h2>
        <ol className="mt-4 grid sm:grid-cols-3 gap-6">
          {['Lower-overhead partner path', 'Ongoing compliance support', 'Revenue share & growth tools'].map((step, i) => (
            <li key={step} className="border border-gray-200 rounded-xl p-5">
              <div className="text-sm text-gray-500">Step {i + 1}</div>
              <div className="mt-1 font-semibold">{step}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* Outcomes */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What you'll get</h2>
        <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
          {[
            'Freedom to manage your business without ISO-level network fees',
            'Recurring revenue from merchant portfolios',
            'Partner tools and dedicated account management',
          ].map(b => (
            <li key={b} className="flex gap-2">
              <span className="text-green-500">•</span><span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Proof */}
      <section className="section">
        <h2 className="text-2xl font-semibold">Who says?</h2>
        <blockquote className="mt-4 border-l-4 border-brand pl-4 text-gray-700 max-w-3xl">
          "{testimonial.body}"
          <footer className="mt-3 text-sm text-gray-500">— {testimonial.author}</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready to build recurring revenue?</h3>
          <p className="mt-2 text-gray-600">Build like an operator without carrying the full ISO cost structure yourself.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </section>
      <ServiceFaq items={faqs} />
      <ServiceFaqJsonLd items={faqs} />
      <ServiceJsonLd
        name="Affiliate Program"
        description="Build an ISO-style payments business without taking on the network-fee burden of becoming an ISO."
        url="https://clearchoicepay.com/services/affiliate-program"
        serviceType="Payment and ATM affiliate program"
        category="Partner program"
        audience={['Affiliate partners', 'ISO-style payment partners', 'Entrepreneurs entering the ATM industry']}
        related={[
          { name: 'Affiliate Payment Partner Growth Strategy', url: '/solutions/affiliate-payment-partner-program' },
          { name: 'High Risk Partners', url: '/highriskpartners' },
          { name: 'Book a Demo', url: '/book-demo' },
        ]}
        reviews={[testimonial]}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://clearchoicepay.com/' },
        { name: 'Services', url: 'https://clearchoicepay.com/services' },
        { name: 'Affiliate Program' },
      ]}/>
    </main>
  )
}
