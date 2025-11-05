import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, Shield, TrendingUp } from 'react-feather'

export const metadata: Metadata = {
  title: 'High Risk Merchants | Clear Choice Payment Solutions',
  description:
    'Secure, reliable payment processing for high-risk businesses. From Clear Choice Payment Solutions - Powered by TRX Services.',
  alternates: { canonical: '/highriskmerchants' },
}

export default function HighRiskMerchantsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#002b5e] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold uppercase mb-6">
              SECURE, RELIABLE PAYMENT PROCESSING FOR HIGH-RISK BUSINESSES
            </h1>
            <p className="text-xl text-gray-200">
              FROM CLEAR CHOICE PAYMENT SOLUTIONS - <span className="font-bold">POWERED BY TRX SERVICES</span>
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-block bg-[#ff4f00] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#e54700] hover:scale-105 transition-all uppercase text-lg shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Are You Tired Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#002b5e] uppercase">
            Are You Tired of Payment Shutdowns?
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-4xl mx-auto shadow-md hover:shadow-lg hover:border-[#ff4f00]/40 transition mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you own a CBD shop, smoke shop, vape store, firearms store, or any other high-risk business, you know how difficult it is to find a reliable payment processor. Many providers suddenly shut down accounts, leaving business owners without a way to process payments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Clear Choice Payment Solutions, we specialize in secure, uninterrupted payment processing for high-risk businesses—<strong>so you never have to worry about your transactions again.</strong>
            </p>
          </div>

          <h3 className="text-3xl font-bold text-center mb-8 text-[#002b5e] uppercase">Industries We Support</h3>
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
                <h4 className="text-xl font-bold text-[#002b5e]">Specialty</h4>
                <div className="text-[#ff4f00] opacity-80">
                  <TrendingUp size={32} />
                </div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>Kratom & Supplement Stores</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>Tattoo & Piercing Shops</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>Other High-Risk Businesses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Clear Choice Section */}
      <section className="py-20 bg-[#002b5e] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
                Why Choose Clear Choice?
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                We work with banks and processors that understand high-risk industries and won't shut you down unexpectedly.
              </p>
            </div>
            <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/images/HRP.png"
                alt="High Risk Merchants"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-[#ff4f00]" size={28} />
                No More Shutdowns
              </h3>
              <p className="text-gray-200 leading-relaxed">
                We work with banks and processors that understand high-risk industries.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-[#ff4f00]" size={28} />
                Secure Transactions
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Our solutions help reduce fraud risks and protect your business.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-[#ff4f00]" size={28} />
                Compliant & Reliable
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Stay within industry regulations with our compliant payment processing.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-[#ff4f00]" size={28} />
                Seamless POS Solutions
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Accept payments quickly and easily with state-of-the-art POS devices.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-[#ff4f00]" size={28} />
                Reduce Cash Handling Risks
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Avoid security concerns by offering multiple payment options.
              </p>
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
            Hear from merchants about their success with Clear Choice
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src="/images/podcast.png"
                  alt="Merchant Success Stories Podcast"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#002b5e]">
                Merchant Success Stories
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Listen to this quick podcast episode about the advantages of working with Clear Choice Payment Solutions.
              </p>
              <audio controls className="w-full mb-6">
                <source src="/audio/HighRiskMerchants.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "After being shut down twice by other processors, Clear Choice has been a lifesaver. We've been processing smoothly for over a year now."
                  </p>
                  <p className="font-bold text-[#002b5e]">— CBD Retail Owner</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "Clear Choice understands our industry. Finally, a payment processor that doesn't make us feel like we're doing something wrong."
                  </p>
                  <p className="font-bold text-[#002b5e]">— Vape Shop Manager</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "The support team is responsive and knowledgeable. They helped us get set up quickly and we've had zero downtime."
                  </p>
                  <p className="font-bold text-[#002b5e]">— Firearms Retailer</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop worrying about payment shutdowns and start processing with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#002b5e] text-white p-12 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold mb-3 uppercase">Secure Processing.</h2>
                  <h3 className="text-2xl uppercase">Zero Shutdowns.</h3>
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
