import type { Metadata } from 'next'
import SolutionHub, { SolutionHubData } from '../SolutionHub'

export const metadata: Metadata = {
  title: 'Merchant Payment Stability Strategy',
  description: 'A practical hub for merchants that need stable processing, clearer costs, compliance support, and fewer surprise account disruptions.',
  alternates: { canonical: '/solutions/merchant-payment-stability' },
}

const hub: SolutionHubData = {
  eyebrow: 'Merchant services strategy',
  title: 'Merchant payment stability for businesses that need processing to hold',
  description:
    'Clear Choice helps merchants build payment processing that fits their risk profile, reduces avoidable cost, and keeps revenue moving when generic processors are not enough.',
  canonicalPath: '/solutions/merchant-payment-stability',
  primaryCta: { label: 'Book a Demo', href: '/book-demo' },
  secondaryCta: { label: 'Explore Merchant Services', href: '/services/merchant-services' },
  audiences: [
    'High-risk merchants',
    'Retail merchants reviewing processing costs',
    'Businesses recovering from processor disruption',
    'Operators entering regulated or hard-to-place categories',
  ],
  problems: [
    'Processors approve an account, then change the rules when volume or risk changes.',
    'Statements are difficult to read and make true processing cost hard to compare.',
    'Chargebacks, reserves, and compliance requests pull attention away from growth.',
    'Businesses expanding nationally need processing that can keep pace with new markets.',
  ],
  approach: [
    {
      title: 'Fit the account to the business',
      body: 'A stable merchant setup starts with the right underwriting context, category fit, and expectations around volume, risk, and support.',
      points: ['Risk-profile review', 'High-risk category experience', 'Stability-first setup'],
    },
    {
      title: 'Make costs readable',
      body: 'Clear Choice reviews processing structure and statement details so merchants can see what is necessary, what is negotiable, and what should be questioned.',
      points: ['Statement review', 'Fee visibility', 'Routing and rate review'],
    },
    {
      title: 'Support the messy middle',
      body: 'The real value shows up when chargebacks, compliance questions, and account changes need practical handling instead of generic support queues.',
      points: ['Chargeback support', 'Compliance guardrails', 'Responsive account help'],
    },
  ],
  proof: ['Fewer surprise disruptions', 'Clearer payment costs', 'Better handling for high-risk categories'],
  service: { label: 'Merchant Services', href: '/services/merchant-services' },
  resource: { label: 'Merchant Compliance Guide', href: '/resources/guides/merchant-compliance' },
  related: [
    { label: 'High-Risk Merchants', href: '/highriskmerchants' },
    { label: 'High-Risk Stability Case Study', href: '/resources/case-studies/high-risk-stability' },
  ],
}

export default function MerchantPaymentStabilitySolution() {
  return <SolutionHub data={hub} />
}
