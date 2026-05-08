import type { Metadata } from 'next'
import SolutionHub, { SolutionHubData } from '../SolutionHub'

export const metadata: Metadata = {
  title: 'Affiliate Payment Partner Growth Strategy',
  description: 'A practical hub for affiliate and ISO-style partners who want recurring payment and ATM revenue with training, support, and compliance guidance.',
  alternates: { canonical: '/solutions/affiliate-payment-partner-program' },
}

const hub: SolutionHubData = {
  eyebrow: 'Affiliate program strategy',
  title: 'Affiliate partner growth for payment and ATM opportunities',
  description:
    'Clear Choice helps entrepreneurs, consultants, and ISO-style partners build recurring revenue by connecting businesses with merchant services, ATM programs, monitoring, and related payment support.',
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
    'Traditional ISO models can create too much compliance, operations, and support burden too early.',
    'Partners need credible offerings beyond a single processing product.',
    'New partners need training and account support before they can sell confidently.',
    'National opportunity is easier to pursue when partners can start in markets where they already have relationships.',
  ],
  approach: [
    {
      title: 'Start with fit',
      body: 'The strongest partner strategy begins with the partner audience, market access, and services they can credibly introduce.',
      points: ['Partner profile review', 'Audience and vertical fit', 'Offer alignment'],
    },
    {
      title: 'Provide practical enablement',
      body: 'Clear Choice supports partners with training, service context, and guidance so conversations are grounded in real business problems.',
      points: ['Training support', 'Compliance awareness', 'Service education'],
    },
    {
      title: 'Expand from useful wins',
      body: 'Partners can build nationally by proving value in the markets and categories where they are already trusted, then expanding outward.',
      points: ['Recurring revenue opportunities', 'Merchant and ATM solutions', 'Ongoing account support'],
    },
  ],
  proof: ['Better partner confidence', 'More ways to serve merchant accounts', 'Recurring revenue potential'],
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
