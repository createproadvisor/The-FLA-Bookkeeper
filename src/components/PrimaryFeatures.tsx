'use client'

import { useEffect, useState } from 'react'

import { Container } from '@/components/Container'

const services = [
  {
    title: 'Call Us Today',
    description:
      "Call us or submit a contact request and we'll reach out to you to learn more about your bookkeeping needs.",
  },
  {
    title: 'Assess & Estimate',
    description:
      "We'll review all current accounts in depth to determine a timeline and an upfront - one-time or monthly estimate.",
  },
  {
    title: 'We Work Together',
    description:
      "You no longer stress about being prepared for tax season and exactly where your money is going.",
  },
  {
    title: 'Bookkeeping Services',
    description:
      'We promise quality and reliable bookkeeping. Our clients are our number one priority, and we always strive to deliver the best customer service.',
  },
  {
    title: '24/7 Support',
    description: null,
  }
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="our-process"
      aria-label="Our process"
      className="relative overflow-hidden bg-white pb-10 pt-10"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none mb-10">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
          >
            <div className="border-b-0 px-1 sm:px-0  border-gray-900">
              <div>
                <span className="text-3xl font-serif">0{index + 1}.</span>
              </div>
              <h3 className="text-lg font-display tracking-tight mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-slate-700 pb-4">{service.description}</p>
            </div>
          </div>
        ))}
        </div>
      </Container>
    </section>
  )
}
