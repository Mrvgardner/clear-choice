'use client'

import { useEffect, useRef, useState } from 'react'
import { DollarSign, Shield, CheckCircle, Zap, TrendingUp, Users } from 'react-feather'

export default function PartnerBenefits() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [isVisible])

  const benefits = [
    {
      icon: <DollarSign size={24} />,
      title: 'Earn Recurring Revenue',
      description: 'Get paid on every transaction your merchants process.',
      delay: '0.1s',
    },
    {
      icon: <Shield size={24} />,
      title: 'Place & Own the Equipment',
      description: 'Our solutions reduce fraud risks and protect your business.',
      delay: '0.2s',
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'High-Risk Approved',
      description: 'Serve merchants banks often reject—with no surprise shutdowns.',
      delay: '0.3s',
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast & Easy Onboarding',
      description: 'Merchants are up and running quickly, without the red tape.',
      delay: '0.4s',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Full Compliance & Risk Management',
      description: 'We handle the regulations—so you don\'t have to.',
      delay: '0.5s',
    },
    {
      icon: <Users size={24} />,
      title: 'Dedicated Expert Support',
      description: '24/7 guidance for you and your merchants.',
      delay: '0.6s',
    },
  ]

  return (
    <div ref={sectionRef} className="mt-16 grid md:grid-cols-2 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: isVisible ? benefit.delay : '0s' }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#ff4f00] rounded-full flex items-center justify-center text-white">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-lg text-gray-200">{benefit.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
