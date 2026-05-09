// app/services/watchdog/page.tsx
import Button from '@/components/Button'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ServiceFaq, { ServiceFaqJsonLd } from '@/components/ServiceFaq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Watchdog Monitoring',
  description:
    'Watchdog monitors, protects, and supports ATMs 24/7 with safer connections, real-time threat protection, and uptime-focused support.',
  alternates: { canonical: '/services/watchdog' },
}

const faqs = [
  {
    q: 'What does Watchdog monitor?',
    a: 'Watchdog monitors ATM and payment-system health, connectivity, threat signals, and operational issues so operators can respond before problems affect revenue.',
  },
  {
    q: 'How does Watchdog reduce truck rolls?',
    a: 'By surfacing problems sooner and helping identify failure patterns, Watchdog gives teams better information before sending a technician onsite.',
  },
  {
    q: 'Who is Watchdog best for?',
    a: 'Watchdog is best for ATM operators, convenience stores, and businesses with payment equipment where uptime directly affects customer experience and revenue.',
  },
  {
    q: 'Does Watchdog help with ATM fraud and tampering risk?',
    a: 'Yes. Watchdog is designed to help operators stay ahead of fraud, hackers, third-party tampering, connectivity failures, and other threats that can create downtime or costly surprises.',
  },
]

const testimonial = {
  body: 'Watchdog caught a system issue at 2 AM and had it fixed before we opened. That saved us thousands in lost sales.',
  author: 'Restaurant Manager',
}

function WatchdogCrimeGraph() {
  const categories = [
    { name: 'Cash trapping', className: 'bg-brand text-white' },
    { name: 'Card theft', className: 'bg-brand-navy text-white' },
    { name: 'Skimming & card data compromise', className: 'bg-gray-400 text-white' },
    { name: 'Transaction reversal fraud', className: 'bg-gray-200 text-brand-navy' },
  ]

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px] items-center">
      <div>
        <h3 className="text-xl font-semibold">Q1 2025 ATM crime trends snapshot</h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li><strong>43,757</strong> total incidents logged to date, up from <strong>38,116</strong> as of December 2024.</li>
          <li><strong>Cash trapping</strong> accounted for <strong>62.4%</strong> of all fraud tactics in the snapshot.</li>
          <li>North America incidents were classified as <strong>72% fraud</strong> and <strong>28% physical</strong>.</li>
        </ul>
        <div className="mt-6 grid gap-2 sm:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`${category.className} min-h-12 rounded-full px-3 py-2 text-center text-xs font-semibold flex items-center justify-center`}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-[320px]">
        <div
          className="relative aspect-square rounded-full shadow-lg"
          aria-label="North America ATM crime split: 72 percent fraud and 28 percent physical incidents."
          role="img"
          style={{
            background: 'conic-gradient(#ff4f00 0deg 259deg, #1f2b5c 259deg 360deg)',
          }}
        >
          <div className="absolute inset-[18%] rounded-full bg-white grid place-items-center text-center shadow-inner">
            <div>
              <div className="text-3xl font-bold text-brand">72%</div>
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Fraud</div>
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-brand" aria-hidden="true" />
            <span>72% fraud</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-brand-navy" aria-hidden="true" />
            <span>28% physical</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Watchdog() {
  return (
    <main>
      {/* Option: hero customized per service */}
      <section className="section">
        <h1 className="text-display font-bold">Watchdog</h1>
        <p className="mt-4 text-lead text-gray-600 max-w-2xl">
          Always-on ATM protection that monitors threats, protects connections, and catches problems before they become costly.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
          <Button href="/solutions/watchdog-atm-monitoring" variant="secondary">Uptime Strategy</Button>
        </div>
      </section>

      {/* Problem + Villain */}
      <section className="section">
        <h2 className="text-2xl font-semibold">What's in your way</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          ATM crime is moving fast. Fraud, physical tampering, digital threats, and unreliable connectivity can all hit revenue before an operator even knows there is a problem.
        </p>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold">The cold, hard stats</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          ATM physical and digital crimes are costing operators millions. Watchdog gives operators a front-line defense for fraud, downtime, and costly surprises.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { stat: '43,757', label: 'Q1 2025 ATM crime incidents logged to date' },
            { stat: '+5,641', label: 'more incidents than December 2024 in the snapshot' },
            { stat: '72%', label: 'North America incidents classified as fraud in the snapshot' },
          ].map((item) => (
            <div key={item.stat} className="border border-gray-200 rounded-lg p-5 bg-white">
              <div className="text-3xl font-bold text-brand">{item.stat}</div>
              <p className="mt-2 text-sm text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600 max-w-3xl">
          The same Q1 2025 snapshot identified cash trapping as 62.4% of fraud tactics and North America activity as 72% fraud and 28% physical incidents.
        </p>
        <WatchdogCrimeGraph />
      </section>

      {/* Solution + Plan */}
      <section className="section">
        <h2 className="text-2xl font-semibold">How Clear Choice helps</h2>
        <ol className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Stronger, safer connections',
            '24/7 monitoring',
            'Real-time threat protection',
            'Expert ATM network support',
          ].map((step, i) => (
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
            'Built-in, manufacturer-approved security with optimized wireless hardware',
            'Always-on monitoring that catches and fixes problems before downtime',
            'Protection from hackers, fraud, and third-party tampering',
            'Fast help from experts who understand ATM networks',
            'Fewer mystery failures from unreliable connectivity',
            'Reduced revenue loss from downtime and avoidable surprises',
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
          <footer className="mt-3 text-sm text-gray-500">— {testimonial.author}, Multi-Location Chain</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-2xl border border-gray-200 p-8 text-center">
          <h3 className="text-xl font-semibold">Ready for bulletproof uptime?</h3>
          <p className="mt-2 text-gray-600">No sketchy Wi-Fi. No mystery failures. Just safer, smarter uptime.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button href="/book-demo" variant="primary">Book a Free Demo Now</Button>
            <Button href="/contact" variant="secondary">Talk to Sales</Button>
          </div>
        </div>
      </section>
      <ServiceFaq items={faqs} />
      <ServiceFaqJsonLd items={faqs} />
      <ServiceJsonLd
        name="Watchdog ATM Monitoring"
        description="Always-on ATM monitoring, safer connectivity, real-time threat protection, and expert support for fraud, downtime, and tampering risk."
        url="https://clearchoicepay.com/services/watchdog"
        serviceType="ATM monitoring and uptime support"
        category="ATM security and monitoring"
        audience={['ATM operators', 'Convenience stores', 'Retail locations with ATMs']}
        related={[
          { name: 'ATM Monitoring Strategy', url: '/solutions/watchdog-atm-monitoring' },
          { name: 'Watchdog Playbook', url: '/resources/library/watchdog-playbook' },
          { name: 'Watchdog overview', url: '/watchdog' },
        ]}
        reviews={[testimonial]}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://clearchoicepay.com/' },
        { name: 'Services', url: 'https://clearchoicepay.com/services' },
        { name: 'Watchdog ATM Monitoring' },
      ]}/>
    </main>
  )
}
