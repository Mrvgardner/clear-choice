export default function ServicesJsonLd() {
  const services = [
    { name: 'Merchant Services', url: 'https://clearchoicepay.com/services/merchant-services' },
    { name: 'Watchdog ATM Monitoring', url: 'https://clearchoicepay.com/services/watchdog' },
    { name: 'Foreign Exchange ATMs', url: 'https://clearchoicepay.com/services/foreign-exchange' },
    { name: 'Affiliate Program', url: 'https://clearchoicepay.com/services/affiliate-program' },
    { name: 'ATM Placement', url: 'https://clearchoicepay.com/services/atm-placement' },
    { name: 'All-In-One Kiosks', url: 'https://clearchoicepay.com/services/kiosks' },
  ]
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://clearchoicepay.com/services#service-list',
    name: 'Clear Choice Payment Solutions Services',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.name,
      url: service.url,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
