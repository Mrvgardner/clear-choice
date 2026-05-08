import type { Metadata } from 'next'
import SolutionHub, { SolutionHubData } from '../SolutionHub'

export const metadata: Metadata = {
  title: 'ATM Monitoring and Uptime Strategy',
  description: 'A practical hub for ATM operators and retail locations that need better uptime, alerts, and issue visibility with Watchdog monitoring.',
  alternates: { canonical: '/solutions/watchdog-atm-monitoring' },
}

const hub: SolutionHubData = {
  eyebrow: 'Watchdog monitoring strategy',
  title: 'ATM monitoring for operators who cannot afford blind spots',
  description:
    'Watchdog helps ATM operators, route owners, and retail locations see equipment issues earlier, reduce avoidable downtime, and protect transaction revenue across national portfolios or targeted growth markets.',
  canonicalPath: '/solutions/watchdog-atm-monitoring',
  primaryCta: { label: 'Book a Demo', href: '/book-demo' },
  secondaryCta: { label: 'Explore Watchdog', href: '/services/watchdog' },
  audiences: [
    'Independent ATM operators',
    'Convenience store groups',
    'Retail locations with revenue-sensitive ATMs',
    'Route owners expanding into new markets',
  ],
  problems: [
    'Downtime is noticed after transactions have already been lost.',
    'Service teams do not have enough context before dispatching a technician.',
    'Operators cannot easily separate isolated failures from recurring portfolio patterns.',
    'Growth into new regions creates visibility gaps across equipment, cash, and connectivity.',
  ],
  approach: [
    {
      title: 'Monitor what affects revenue',
      body: 'The goal is not more alerts. It is better signal around ATM health, connectivity, cash availability, and recurring failure patterns.',
      points: ['Real-time issue visibility', 'Portfolio-level monitoring', 'Uptime-focused workflows'],
    },
    {
      title: 'Prioritize response',
      body: 'Watchdog gives operators more context before they decide whether a location needs remote support, cash attention, or onsite service.',
      points: ['Fewer avoidable truck rolls', 'Earlier triage', 'Cleaner service decisions'],
    },
    {
      title: 'Grow where support can keep up',
      body: 'A national strategy works best when expansion follows operational coverage. Monitoring helps teams spread from strong markets without losing control.',
      points: ['Regional expansion visibility', 'Better operator reporting', 'Clearer location accountability'],
    },
  ],
  proof: ['Reduced downtime', 'Fewer emergency service calls', 'More consistent transaction availability'],
  service: { label: 'Watchdog ATM Monitoring', href: '/services/watchdog' },
  resource: { label: 'Watchdog Playbook', href: '/resources/library/watchdog-playbook' },
  related: [
    { label: 'ATM Placement', href: '/services/atm-placement' },
    { label: 'Watchdog C-Store Case Study', href: '/resources/case-studies/watchdog-cstore-uptime' },
  ],
}

export default function WatchdogMonitoringSolution() {
  return <SolutionHub data={hub} />
}
