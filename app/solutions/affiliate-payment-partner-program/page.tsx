import type { Metadata } from 'next'
import SolutionHub, { SolutionHubData } from '../SolutionHub'

export const metadata: Metadata = {
  title: 'Affiliate Payment Partner Growth Strategy',
  description: 'A practical hub for affiliate partners who want ISO-style business freedom without the network-fee burden of becoming an ISO.',
  alternates: { canonical: '/solutions/affiliate-payment-partner-program' },
}

const hub: SolutionHubData = {
  eyebrow: 'Affiliate program strategy',
  title: 'ISO-style freedom without the ISO-level network-fee burden',
  description:
    'Clear Choice helps partners build recurring payment and ATM revenue with room to manage their own business, without requiring them to pay network fees and carry obligations like a traditional ISO.',
  canonicalPath: '/solutions/affiliate-payment-partner-program',
  primaryCta: { label: 'Book a Demo', href: '/book-demo' },
  secondaryCta: { label: 'Explore the Affiliate Program', href: '/services/affiliate-program' },
  audiences: [
    'Affiliate partners',
    'ISO-style payment partners',
    'Consultants with merchant relationships',
    'Entrepreneurs entering payment or ATM sales',
  ],
  problems: [
    'Traditional ISO models can create heavy network fees, compliance obligations, and operations burden too early.',
    'Partners need credible offerings beyond a single processing product.',
    'New partners need training and account support before they can sell confidently.',
    'Partners want freedom to manage their business without paying and operating like a full ISO from day one.',
  ],
  approach: [
    {
      title: 'Remove the heavy cost barrier',
      body: 'The program is designed for partners who want to grow payment and ATM revenue without taking on the same network-fee burden traditional ISOs face.',
      points: ['Lower-overhead path', 'No ISO-level network-fee burden', 'Clearer route to recurring revenue'],
    },
    {
      title: 'Keep business control',
      body: 'Partners can manage their relationships, pursue the markets they know, and build their book without being boxed into a rigid reseller model.',
      points: ['Business ownership mindset', 'Market-by-market growth', 'Flexible partner support'],
    },
    {
      title: 'Expand from useful wins',
      body: 'Partners can build nationally by proving value in the markets and categories where they are already trusted, then expanding outward.',
      points: ['Recurring revenue opportunities', 'Merchant and ATM solutions', 'Ongoing account support'],
    },
  ],
  proof: ['Freedom to manage the business', 'Relief from ISO-level network-fee burden', 'Recurring revenue potential'],
  service: { label: 'Affiliate Program', href: '/services/affiliate-program' },
  resource: { label: 'High-Risk Partners', href: '/highriskpartners' },
  related: [
    { label: 'Merchant Services', href: '/services/merchant-services' },
    { label: 'ATM Placement', href: '/services/atm-placement' },
  ],
}

export default function AffiliatePaymentPartnerProgramSolution() {
  return <SolutionHub data={hub} />
}
