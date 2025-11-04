'use client'

import { useEffect, useRef, useState } from 'react'
import { Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend, PieController)

export default function ATMFraudChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<Chart | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible || !chartRef.current || chartInstanceRef.current) return

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    chartInstanceRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Cash Trapping',
          'Card Theft',
          'Skimming & Card Data Compromise',
          'Transaction Reversal Fraud',
          'Dispenser Jackpotting',
        ],
        datasets: [
          {
            data: [55.7, 27.4, 8.28, 8.18, 0.4],
            backgroundColor: [
              '#002b5e',
              '#0951fa',
              '#ff4f00',
              '#ff8925',
              '#75808d',
            ],
            hoverOffset: 20,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.label}: ${context.parsed}%`
              },
            },
          },
        },
        layout: {
          padding: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          },
        },
        animation: {
          duration: 1500,
          easing: 'easeOutBounce',
        },
      },
    })

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
        chartInstanceRef.current = null
      }
    }
  }, [isVisible])

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef} className="w-full h-full"></canvas>
    </div>
  )
}
