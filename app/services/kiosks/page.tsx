// app/services/kiosks/page.tsx
import Button from '@/components/Button'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ServiceFaq, { ServiceFaqJsonLd } from '@/components/ServiceFaq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kiosks',
  description: 'Self-service kiosks that reduce wait times, cut staffing costs, and increase customer satisfaction.',
  alternates: { canonical: '/services/kiosks' },
}

const faqs = [
  {
    q: 'What can an all-in-one kiosk help customers do?',
    a: 'A kiosk can support self-service workflows such as cash access, bill pay, customer transactions, and other convenience services depending on the business model.',
  },
  {
    q: 'How do kiosks help reduce operational pressure?',
    a: 'Kiosks can shorten lines, shift simple transactions to self-service, and let staff focus on higher-value customer needs.',
  },
  {
    q: 'Can Clear Choice customize a kiosk program?',
    a: 'Yes. Clear Choice can help match kiosk features to the location, customer traffic, payment needs, and revenue goals of the business.',
  },
]

const testimonial = {
  body: 'Our kiosks handle 60% of transactions now. Wait times are down and our staff can focus on complex customer needs.',
  author: 'Operations Manager',
}

export default function Kiosks() {
  return (
    <main>
      {/* Option: hero customized per service */}
      <section className="section">
        <h1 className="text-display font-bold">Kiosks</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-2xl">
          Self-service solutions that reduce wait times and increase efficiency.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
          <Button href="/contact" variant="secondary">Explore Kiosk Options</Button>
        </div>
      </section>

      {/* Problem + Villain */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What's in your way</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Long customer wait times, staff bottlenecks during peak hours, and the rising cost of labor. Traditional service models can't scale efficiently.
        </p>
      </section>

      {/* Solution + Plan */}
      <section className="section">
        <h2 className="text-2xl font-semibold">How Clear Choice helps</h2>
        <ol className="mt-4 grid sm:grid-cols-3 gap-6">
          {['Custom kiosk design & setup', 'Integration with existing systems', 'Training & ongoing support'].map((step, i) => (
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
            'Reduced customer wait times',
            'Lower staffing costs',
            'Increased customer satisfaction',
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
          <footer className="mt-3 text-sm text-gray-500">— {testimonial.author}, Quick Service Chain</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready to streamline your operations?</h3>
          <p className="mt-2 text-gray-600">Let's design a kiosk solution that fits your business perfectly.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </section>
      <ServiceFaq items={faqs} />
      <ServiceFaqJsonLd items={faqs} />
      <ServiceJsonLd
        name="All-In-One Kiosks"
        description="Self-service kiosks that reduce wait times, cut staffing costs, and increase customer satisfaction."
        url="https://clearchoicepay.com/services/kiosks"
        serviceType="Self-service kiosk solutions"
        category="Payment kiosks"
        audience={['Retail operators', 'Convenience stores', 'Quick-service businesses', 'Businesses with customer queues']}
        related={[
          { name: 'Kiosk Traffic Lift Case Study', url: '/resources/case-studies/kiosk-traffic-lift' },
          { name: 'Contact Clear Choice', url: '/contact' },
        ]}
        reviews={[testimonial]}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'All-In-One Kiosks' },
      ]}/>
    </main>
  )
}
