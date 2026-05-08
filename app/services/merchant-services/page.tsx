// app/services/merchant-services/page.tsx
import Button from '@/components/Button'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ServiceFaq, { ServiceFaqJsonLd } from '@/components/ServiceFaq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Merchant Services',
  description: 'Lower costs with high‑risk stability and zero surprise drops.',
  alternates: { canonical: '/services/merchant-services' },
}

const faqs = [
  {
    q: 'Can Clear Choice support high-risk merchant processing?',
    a: 'Yes. Clear Choice works with high-risk and hard-to-place merchant categories by focusing on stable routing, compliance guardrails, and practical chargeback support.',
  },
  {
    q: 'How can merchant services lower my payment costs?',
    a: 'Clear Choice reviews your processing setup, fee structure, routing, and risk profile to look for avoidable costs and better-fit payment options.',
  },
  {
    q: 'What happens if my current processor drops my account?',
    a: 'Clear Choice helps evaluate your merchant profile and build a more stable processing path so your business can keep accepting payments with less disruption.',
  },
]

const testimonial = {
  body: 'Clear Choice kept us compliant and processing while others dropped us. Revenue is up and chargebacks are down.',
  author: 'High-Risk Merchant',
}

export default function MerchantServices() {
  return (
    <main>
      {/* Option: hero customized per service */}
      <section className="section">
        <h1 className="text-display font-bold">Merchant Services</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-2xl">
          Lower costs with high‑risk stability and zero surprise drops.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
          <Button href="/solutions/merchant-payment-stability" variant="secondary">Payment Stability Strategy</Button>
        </div>
      </section>

      {/* Problem + Villain */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What's in your way</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Payment instability and surprise terminations. Processors categorize you as "high‑risk," then pull support when you need it most.
        </p>
      </section>

      {/* Solution + Plan */}
      <section className="section">
        <h2 className="text-2xl font-semibold">How Clear Choice helps</h2>
        <ol className="mt-4 grid sm:grid-cols-3 gap-6">
          {['Evaluate & stabilize', 'Optimize fees & routing', 'Monitor & support 24/7'].map((step, i) => (
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
            'Interchange optimization that reduces effective rates',
            'Compliance guardrails for high‑risk categories',
            'Hands‑on chargeback strategy and tooling',
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
          <footer className="mt-3 text-sm text-gray-500">— {testimonial.author}, Retail Business</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready to stabilize and grow?</h3>
          <p className="mt-2 text-gray-600">Let's map your merchant profile and route you right.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </section>
      <ServiceFaq items={faqs} />
      <ServiceFaqJsonLd items={faqs} />
      <ServiceJsonLd
        name="Merchant Services"
        description="Lower costs with high‑risk stability and zero surprise drops."
        url="https://clearchoicepay.com/services/merchant-services"
        serviceType="Payment processing and merchant services"
        category="Financial services"
        audience={['Retail merchants', 'High-risk merchants', 'Businesses that need stable payment processing']}
        related={[
          { name: 'Merchant Payment Stability Strategy', url: '/solutions/merchant-payment-stability' },
          { name: 'Merchant Compliance Guide', url: '/resources/guides/merchant-compliance' },
          { name: 'High Risk Merchants', url: '/highriskmerchants' },
        ]}
        reviews={[testimonial]}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://clearchoicepay.com/' },
        { name: 'Services', url: 'https://clearchoicepay.com/services' },
        { name: 'Merchant Services' },
      ]}/>
    </main>
  )
}
