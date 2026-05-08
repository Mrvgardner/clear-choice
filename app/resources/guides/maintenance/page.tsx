import type { Metadata } from 'next'
import GAWebToLead from '@/components/GAWebToLead'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import ResourceJsonLd from '@/components/ResourceJsonLd'

export const metadata: Metadata = {
  title: 'Maintenance Before You Call Support',
  description: 'Download the free checklist to fix common issues and avoid costly service calls.',
  alternates: { canonical: '/resources/guides/maintenance' },
}

export default function MaintenanceGuide() {
  const base = 'https://clearchoicepay.com'
  const ret = `${base}/resources/guides/maintenance/thank-you` // swap to prod at go-live

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">MAINTENANCE BEFORE YOU CALL SUPPORT</h1>
      <p className="mb-6 text-lg text-gray-700">
        Solve common ATM issues in minutes and save on service calls. Get the printable checklist for your team.
      </p>

      <GAWebToLead
        orgId="00Da500000FOGNx"
        retURL={ret}
        eventLabel="Maintenance Checklist"
        className="space-y-4 bg-white border rounded-lg p-6 shadow"
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="last_name" required className="w-full border rounded p-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input name="company" required className="w-full border rounded p-2" placeholder="Your company" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" required className="w-full border rounded p-2" placeholder="you@company.com" />
        </div>

        <button type="submit" className="bg-[#ff4f00] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e04400] transition">
          Get the Checklist →
        </button>
      </GAWebToLead>
      <ResourceJsonLd
        type="DigitalDocument"
        title="Maintenance Before You Call Support"
        description="A printable checklist to help ATM teams resolve common issues and avoid unnecessary service calls."
        url="/resources/guides/maintenance"
        genre="Checklist"
        about={['ATM maintenance', 'ATM uptime', 'Service calls', 'Payment equipment support']}
        audience={['ATM operators', 'Retail locations with ATMs', 'Convenience store operators']}
        action={{
          type: 'RegisterAction',
          name: 'Request the Maintenance Checklist',
          target: '/resources/guides/maintenance',
        }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Resources', url: '/resources' },
        { name: 'Guides', url: '/resources/library' },
        { name: 'Maintenance Before You Call Support' },
      ]}/>
    </main>
  )
}
