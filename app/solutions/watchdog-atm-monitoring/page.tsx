import type { Metadata } from 'next'
import SolutionHub, { SolutionHubData } from '../SolutionHub'

export const metadata: Metadata = {
  title: 'ATM Monitoring and Uptime Strategy',
  description: 'A practical hub for ATM operators that need safer connections, threat visibility, 24/7 monitoring, and better uptime with Watchdog.',
  alternates: { canonical: '/solutions/watchdog-atm-monitoring' },
}

const hub: SolutionHubData = {
  eyebrow: 'Watchdog monitoring strategy',
  title: 'ATM monitoring for operators who cannot afford blind spots',
  description:
    'Watchdog helps ATM operators, route owners, and retail locations stay ahead of fraud, downtime, connectivity failures, and costly surprises with 24/7 monitoring, safer connections, and real-time threat protection.',
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
    'ATM crime is moving across physical tampering, cash trapping, card compromise, transaction reversal fraud, and digital threats.',
    'Unreliable wireless connections create mystery failures and make troubleshooting slower.',
    'Service teams do not have enough context before dispatching a technician.',
    'Operators cannot easily separate isolated failures from recurring portfolio patterns.',
    'Growth into new regions creates visibility gaps across equipment, cash, and connectivity.',
  ],
  approach: [
    {
      title: 'Protect the connection',
      body: 'Watchdog supports stronger, safer ATM connections with built-in, manufacturer-approved security and optimized wireless hardware.',
      points: ['Safer connectivity', 'Optimized wireless hardware', 'Fewer mystery failures'],
    },
    {
      title: 'Monitor around the clock',
      body: 'Always-on monitoring helps operators catch and fix problems before they impact the bottom line.',
      points: ['24/7 monitoring', 'Earlier triage', 'Uptime-focused workflows'],
    },
    {
      title: 'Respond to threats faster',
      body: 'Real-time threat protection helps shield ATMs from hackers, fraud, third-party tampering, and recurring failure patterns.',
      points: ['Fraud and tampering visibility', 'Expert ATM network support', 'Cleaner service decisions'],
    },
  ],
  proof: ['Q1 2025 snapshot: 43,757 ATM crime incidents logged', 'Cash trapping: 62.4% of fraud tactics in the snapshot', 'North America snapshot: 72% fraud and 28% physical incidents'],
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
