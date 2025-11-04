import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, AlertTriangle, TrendingDown, CheckCircle } from 'react-feather'
import ATMFraudChart from '@/components/ATMFraudChart'

export const metadata: Metadata = {
  title: 'Watchdog ATM Monitoring | Clear Choice Payment Solutions',
  description:
    'Proactive ATM monitoring with real-time alerts, threat detection, and 24/7 issue resolution. Reduce downtime and protect your revenue.',
  alternates: { canonical: '/watchdog' },
}

export default function WatchdogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#002b5e] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            {/* Placeholder for Watchdog logo */}
            <div className="inline-block bg-white/10 rounded-lg px-8 py-4 mb-6">
              <h1 className="text-5xl md:text-6xl font-bold uppercase">Watchdog</h1>
            </div>
          </div>
          <p className="text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
            Proactive ATM Monitoring That Never Sleeps
          </p>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12">
            Real-time alerts, threat detection, and 24/7 issue resolution to keep your ATMs running and your revenue flowing.
          </p>
          <Link
            href="/book-demo"
            className="inline-block bg-[#ff4f00] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#e54700] hover:scale-105 transition-all uppercase text-lg shadow-lg"
          >
            Schedule a Demo
          </Link>
        </div>
      </section>

      {/* What the Watchdog Program Offers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#002b5e] uppercase">
            What the Watchdog Program Offers
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive monitoring and protection for your ATM fleet
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#002b5e]">24/7 Monitoring</h3>
                <div className="text-[#ff4f00] opacity-80">
                  <Shield size={32} />
                </div>
              </div>
              <p className="text-gray-600">
                Continuous surveillance of your ATM network with immediate alerts when issues arise. Our team is always watching.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#002b5e]">Real-Time Alerts</h3>
                <div className="text-[#ff4f00] opacity-80">
                  <AlertTriangle size={32} />
                </div>
              </div>
              <p className="text-gray-600">
                Get instant notifications about machine status, errors, and potential threats before they impact your revenue.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#002b5e]">Reduced Downtime</h3>
                <div className="text-[#ff4f00] opacity-80">
                  <TrendingDown size={32} />
                </div>
              </div>
              <p className="text-gray-600">
                Proactive issue detection and rapid response minimize offline time, keeping your machines profitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More About Watchdog */}
      <section className="py-20 bg-[#002b5e] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
                Learn More About Watchdog
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Watchdog is more than just monitoring software. It's a comprehensive security and maintenance platform designed specifically for ATM operators who demand reliability.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Our advanced algorithms detect anomalies, predict maintenance needs, and alert you to potential security threats before they become problems.
              </p>
              <Link
                href="#video"
                className="inline-block bg-[#ff4f00] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#e54700] hover:scale-105 transition-all uppercase"
              >
                Watch Video
              </Link>
            </div>
            <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/images/Watchdog-Room-Logo.png"
                alt="Watchdog ATM Security"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#002b5e] uppercase">
            See Watchdog in Action
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Watch how Watchdog protects your ATMs 24/7
          </p>
          
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AjwtY5XujII"
              title="Watchdog ATM Monitoring Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* The Cold Hard Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#002b5e] uppercase">
            The Cold Hard Stats
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            ATM crime is on the rise. Is your fleet protected?
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff4f00] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002b5e] mb-2">
                      Physical Attacks Increasing
                    </h3>
                    <p className="text-gray-600">
                      ATM physical attacks have risen significantly, with criminals using explosives, gas attacks, and ram raids.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff4f00] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002b5e] mb-2">
                      Logical Attacks Growing
                    </h3>
                    <p className="text-gray-600">
                      Cyber criminals are targeting ATM software vulnerabilities, including malware and jackpotting attacks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#ff4f00] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002b5e] mb-2">
                      Downtime Costs Thousands
                    </h3>
                    <p className="text-gray-600">
                      Every hour of ATM downtime means lost revenue, frustrated customers, and potential permanent business loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="aspect-square mb-6">
                <ATMFraudChart />
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded flex-shrink-0" style={{ backgroundColor: '#002b5e' }}></div>
                  <span className="text-gray-700">Cash Trapping (55.7%)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded flex-shrink-0" style={{ backgroundColor: '#0951fa' }}></div>
                  <span className="text-gray-700">Card Theft (27.4%)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded flex-shrink-0" style={{ backgroundColor: '#ff4f00' }}></div>
                  <span className="text-gray-700">Skimming & Card Data Compromise (8.28%)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded flex-shrink-0" style={{ backgroundColor: '#ff8925' }}></div>
                  <span className="text-gray-700">Transaction Reversal Fraud (8.18%)</span>
                </div>
                <div className="flex items-center gap-3 col-span-2">
                  <div className="w-4 h-4 rounded flex-shrink-0" style={{ backgroundColor: '#75808d' }}></div>
                  <span className="text-gray-700">Dispenser Jackpotting (0.4%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Watchdog */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#002b5e] uppercase">
            Why Choose Watchdog?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Purpose-built for ATM operators who demand reliability and peace of mind
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-start gap-4">
                <CheckCircle size={32} className="text-[#ff4f00] opacity-80 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#002b5e]">Prevent Revenue Loss</h3>
                  <p className="text-gray-600">
                    Catch issues before they cause downtime. Every minute your ATM is offline is money walking out the door.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-start gap-4">
                <CheckCircle size={32} className="text-[#ff4f00] opacity-80 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#002b5e]">Reduce Truck Rolls</h3>
                  <p className="text-gray-600">
                    Remote diagnostics and issue resolution mean fewer expensive service calls and faster problem solving.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-start gap-4">
                <CheckCircle size={32} className="text-[#ff4f00] opacity-80 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#002b5e]">Enhanced Security</h3>
                  <p className="text-gray-600">
                    Detect physical tampering, logical attacks, and suspicious patterns before they become major incidents.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-start gap-4">
                <CheckCircle size={32} className="text-[#ff4f00] opacity-80 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#002b5e]">Expert Support</h3>
                  <p className="text-gray-600">
                    Our experienced team monitors your machines and responds immediately when action is needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Do Others Say - Podcast Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#002b5e] uppercase">
            What Do Others Say?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Hear from industry experts about ATM security and monitoring
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src="/images/podcast.png"
                  alt="ATM Crime and Fraud Trends Podcast"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#002b5e]">
                ATM Crime and Fraud Trends in 2024-2025
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join us as we discuss the latest trends in ATM security, emerging threats, and how Watchdog keeps operators ahead of criminals.
              </p>
              <audio controls className="w-full mb-6">
                <source src="/audio/watchdog-podcast.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <Link
                href="/resources/blog/atm-crime-trends-2024-2025"
                className="inline-block bg-[#ff4f00] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#e04400] transition"
              >
                Read More
              </Link>
            </div>

            <div>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "Watchdog has transformed how we manage our ATM fleet. We catch problems before our customers even notice them."
                  </p>
                  <p className="font-bold text-[#002b5e]">— Regional ATM Operator</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "The real-time alerts have saved us thousands in lost revenue. It's like having a security guard on every machine."
                  </p>
                  <p className="font-bold text-[#002b5e]">— Convenience Store Chain Owner</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "We've reduced our truck rolls by 40% since implementing Watchdog. The ROI is incredible."
                  </p>
                  <p className="font-bold text-[#002b5e]">— ATM Service Provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#002b5e] uppercase">
              Get Started with Watchdog
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protect your ATM investment with 24/7 monitoring and proactive threat detection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#002b5e] text-white p-12 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="mb-6">
                  <h2 className="text-5xl font-bold mb-3 uppercase">Clear Choice</h2>
                  <h3 className="text-3xl uppercase">Payment Solutions</h3>
                </div>
                <p className="text-2xl italic">PAYMENTS WITHOUT LIMITS</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ff4f00] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ff4f00] focus:outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ff4f00] focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Phone</label>
                  <input
                    type="tel"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ff4f00] focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Tell us why you want Watchdog info
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ff4f00] focus:outline-none transition"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Topic</label>
                  <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ff4f00] focus:outline-none transition">
                    <option>Choose an option</option>
                    <option>General Inquiry</option>
                    <option>Schedule a Demo</option>
                    <option>Pricing Information</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div className="flex items-center justify-center">
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" required className="w-4 h-4" />
                    <span>
                      I agree to the{' '}
                      <a
                        href="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff4f00] hover:underline font-semibold"
                      >
                        Terms & Conditions
                      </a>
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#ff4f00] text-white font-bold py-4 rounded-lg hover:bg-[#e54700] hover:scale-105 transition-all uppercase text-lg shadow-md"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="py-20 bg-gray-50 border-t-4 border-[#ff4f00]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002b5e] mb-3 uppercase">
              Clear Choice Payment Solutions
            </h2>
            <p className="text-2xl italic text-gray-600">PAYMENTS WITHOUT LIMITS</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <h3 className="font-bold text-xl mb-4 text-[#002b5e] uppercase">Phone</h3>
              <a href="tel:9725508376" className="text-[#ff4f00] hover:underline text-lg font-semibold">
                (972) 550-8376
              </a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <h3 className="font-bold text-xl mb-4 text-[#002b5e] uppercase">Email</h3>
              <a href="mailto:sales@clearchoicepay.com" className="text-[#ff4f00] hover:underline text-lg font-semibold break-all">
                sales@clearchoicepay.com
              </a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <h3 className="font-bold text-xl mb-4 text-[#002b5e] uppercase">Address</h3>
              <p className="text-gray-600 text-lg">
                6365 N MacArthur Blvd.<br />
                Suite 1050<br />
                Irving, TX 75039
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
