import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, Shield, TrendingUp, Zap, Lock, Users } from 'react-feather'

export const metadata: Metadata = {
  title: 'Low Risk Merchants | Clear Choice Payment Solutions',
  description:
    'Your trusted partner for fast, secure, & affordable POS systems. Lightning-fast transactions with transparent pricing.',
  alternates: { canonical: '/lowriskmerchants' },
}

export default function LowRiskMerchantsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#002b5e] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold uppercase mb-6">
              CLEAR CHOICE PAYMENT SOLUTIONS
            </h1>
            <p className="text-xl text-gray-200">
              YOUR TRUSTED PARTNER FOR FAST, SECURE, & AFFORDABLE POS SYSTEMS
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

      {/* Why Your Business Needs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#002b5e] uppercase">
            Why Your Business Needs an Advanced POS System
          </h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-4xl mx-auto shadow-md hover:shadow-lg hover:border-[#ff4f00]/40 transition mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              In today's fast-paced world, customers expect quick, seamless, and secure transactions. A modern Point-of-Sale (POS) system can help streamline your business, improve customer experience, and boost profitability.
            </p>
          </div>

          <h3 className="text-3xl font-bold text-center mb-8 text-[#002b5e] uppercase">Key Benefits of Our POS System</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="text-[#ff4f00] flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-[#002b5e] mb-2">Lightning-Fast Transactions</h4>
                  <p className="text-gray-600">Reduce customer wait times.</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-start gap-3 mb-3">
                <DollarSign className="text-[#ff4f00] flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-[#002b5e] mb-2">Accept All Payment Types</h4>
                  <p className="text-gray-600">Credit, debit, mobile wallets, EBT, and Apple Pay/Google Pay.</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="text-[#ff4f00] flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-[#002b5e] mb-2">No Hidden Fees & Transparent Pricing</h4>
                  <p className="text-gray-600">Enjoy low processing rates with no surprises.</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-start gap-3 mb-3">
                <TrendingUp className="text-[#ff4f00] flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-[#002b5e] mb-2">Robust Inventory Management</h4>
                  <p className="text-gray-600">Track stock levels, sales trends, and reorder alerts in real-time.</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-start gap-3 mb-3">
                <Users className="text-[#ff4f00] flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-[#002b5e] mb-2">User-Friendly & Customizable</h4>
                  <p className="text-gray-600">Intuitive interface tailored to your business needs.</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <div className="flex items-start gap-3 mb-3">
                <Lock className="text-[#ff4f00] flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-[#002b5e] mb-2">Enhanced Security & Compliance</h4>
                  <p className="text-gray-600">PCI-compliant payment processing and fraud prevention.</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition col-span-full">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="text-[#ff4f00] flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-[#002b5e] mb-2">24/7 Live Support</h4>
                  <p className="text-gray-600">Our experts are always available to keep your business running smoothly.</p>
                </div>
              </div>
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
                Why Choose Clear Choice Payment Solutions?
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                At Clear Choice Payment Solutions, we believe in helping businesses succeed with reliable, cost-effective, and innovative payment solutions.
              </p>
              <p className="text-xl text-gray-200 leading-relaxed">
                Our industry-leading POS systems are designed to enhance your operations while ensuring you stay ahead of the competition.
              </p>
            </div>
            <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="/images/lrm.png"
                alt="Low Risk Merchants"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#002b5e] uppercase">
            Who We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <h3 className="text-2xl font-bold mb-4 text-[#002b5e]">Convenience Stores</h3>
              <p className="text-gray-600 leading-relaxed">
                Handle high-volume transactions efficiently.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <h3 className="text-2xl font-bold mb-4 text-[#002b5e]">Retail Shops</h3>
              <p className="text-gray-600 leading-relaxed">
                Manage inventory and sales with ease.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <h3 className="text-2xl font-bold mb-4 text-[#002b5e]">Restaurants & Cafes</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline orders and enhance dining experiences.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <h3 className="text-2xl font-bold mb-4 text-[#002b5e]">Gas Stations</h3>
              <p className="text-gray-600 leading-relaxed">
                Accept multiple payment types, including fleet cards.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 hover:shadow-lg hover:border-[#ff4f00]/40 transition">
              <h3 className="text-2xl font-bold mb-4 text-[#002b5e]">Small Businesses</h3>
              <p className="text-gray-600 leading-relaxed">
                Grow with a scalable, affordable solution.
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
                <source src="/audio/HighRiskPartners_Clear_Choice.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "Our checkout times have been cut in half since switching to Clear Choice. Customers love the fast service."
                  </p>
                  <p className="font-bold text-[#002b5e]">— Convenience Store Owner</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "The inventory management features have been a game-changer for our retail shop. We always know what's in stock."
                  </p>
                  <p className="font-bold text-[#002b5e]">— Retail Shop Manager</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "Transparent pricing with no hidden fees. Finally, a payment processor we can trust."
                  </p>
                  <p className="font-bold text-[#002b5e]">— Restaurant Owner</p>
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
              Ready to Upgrade Your POS System?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with Clear Choice today and experience the difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#002b5e] text-white p-12 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold mb-3 uppercase">Fast Transactions.</h2>
                  <h3 className="text-2xl uppercase">Zero Surprises.</h3>
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
