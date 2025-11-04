import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, Shield, TrendingUp } from 'react-feather'
import PartnerBenefits from '@/components/PartnerBenefits'

export const metadata: Metadata = {
  title: 'High Risk Partners | Clear Choice Payment Solutions',
  description:
    'Expand your business and earn recurring revenue by partnering with Clear Choice. Serve high-risk merchants in CBD, vape, firearms, and more.',
  alternates: { canonical: '/highriskpartners' },
}

export default function HighRiskPartnersPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#002b5e] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6 flex items-center justify-center gap-4">
              <Image
                src="/images/CCLogoOnly-White.png"
                alt="Clear Choice"
                width={80}
                height={80}
                className="inline-block"
              />
              <span className="text-[#ff4f00]">High-Risk Partners</span>
            </h1>
            <p className="text-xl text-gray-200">
              POWERED BY <span className="font-bold">TRX SERVICES</span>
            </p>
          </div>
          <p className="text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
            Expand Your Business & Earn Recurring Revenue
          </p>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12">
            Partner with Clear Choice to serve high-risk merchants and unlock new revenue streams with ongoing residual income.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-[#ff4f00] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#e54700] hover:scale-105 transition-all uppercase text-lg shadow-lg"
          >
            Become a Partner
          </Link>
        </div>
      </section>

      {/* Expand Your Business Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#002b5e] uppercase">
            Expand Your Business & Earn More
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Unlock New Revenue Streams by Partnering with Clear Choice Payment Solutions
          </p>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-3xl mx-auto shadow-md hover:shadow-lg hover:border-[#ff4f00]/40 transition mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Help high-risk merchants—like those in CBD, vape, firearms, and more—get approved and processing while you earn ongoing residual income.
            </p>
          </div>

          <h3 className="text-3xl font-bold text-center mb-8 text-[#002b5e] uppercase">Industries You'll Serve</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-[#002b5e]">Retail</h4>
                <div className="text-[#ff4f00] opacity-80">
                  <DollarSign size={32} />
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>CBD & Hemp Retailers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>Vape & Smoke Shops</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-[#002b5e]">Regulated</h4>
                <div className="text-[#ff4f00] opacity-80">
                  <Shield size={32} />
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>Firearm & Ammunition Dealers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>Adult Entertainment & Clubs</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-[#002b5e]">More</h4>
                <div className="text-[#ff4f00] opacity-80">
                  <TrendingUp size={32} />
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>Other High-Risk Verticals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-[#002b5e] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
                Why PARTNER with Clear Choice?
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Join a network of successful partners earning recurring revenue while serving merchants others turn away. We provide everything you need to grow your business.
              </p>
            </div>
            <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/images/HRP.png"
                alt="High Risk Partners"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <PartnerBenefits />
        </div>
      </section>

      {/* What Do Others Say - Podcast Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#002b5e] uppercase">
            What Do Others Say?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Hear from partners about their success with Clear Choice
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src="/images/podcast.png"
                  alt="Partner Success Stories Podcast"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#002b5e]">
                Partner Success Stories
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Listen to this quick podcast episode about the advantages of partnering with Clear Choice Payment Solutions.
              </p>
              <audio controls className="w-full mb-6">
                <source src="/audio/HighRiskPartners_Clear_Choice.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "Partnering with Clear Choice has been a game-changer for our business. The recurring revenue is substantial and consistent."
                  </p>
                  <p className="font-bold text-[#002b5e]">— Payment Solutions Partner</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "We can finally serve the high-risk merchants who need us most. Clear Choice handles all the compliance headaches."
                  </p>
                  <p className="font-bold text-[#002b5e]">— ISO Partner</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "The support team is always there when we need them. Our merchants are happy, and we're growing faster than ever."
                  </p>
                  <p className="font-bold text-[#002b5e]">— Merchant Services Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#002b5e] uppercase">
              Ready to Partner?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our network of successful partners and start earning today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#002b5e] text-white p-12 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold mb-3 uppercase">Expand Your Income.</h2>
                  <h3 className="text-2xl uppercase">Grow Your Business.</h3>
                </div>
                <Image
                  src="/images/CCMainLogoWhite.png"
                  alt="Clear Choice Payment Solutions"
                  width={300}
                  height={150}
                  className="mx-auto"
                />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
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
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-[#ff4f00] focus:outline-none transition"
                  ></textarea>
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
                  className="w-full bg-[#ff4f00] text-white font-bold py-4 rounded-lg hover:bg-[#e04400] hover:scale-105 transition-all uppercase text-lg shadow-md"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-white text-center">
        <p className="text-gray-600 text-sm">
          Thanks for submitting!
        </p>
      </section>
    </main>
  )
}
