import Image from 'next/image'

import { Button } from '@/components/Button'

export function Pricing() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="justify-center flex flex-col p-6">
        <h1 className="text-center mt-4 mb-4 font-display text-5xl tracking-tight text-gray-800">
          Get Started.
        </h1>
        <div className="max-w-2xl mx-auto mt-4 flex justify-right mb-4 flex-col gap-4">
          <Button href="/services" className="py-4" style={{width:300}}>Services</Button>
          <Button href="tel:+1 (352) 531-6460" className="py-4">Call Us</Button>
          <Button href="mailto:Ronnie@theflabookkeeper.com?subject=Website%20Inquirt%20for%20Bookkeeping%20or%20Notary%20Services" className="py-4">Email</Button>
          <div className="mx-auto">
              <Image src={require("@/images/FLA Bookkeeper Image.webp")} 
                alt="logo" className="w-20" />
            </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <Image src={require('@/images/get_started.webp')} alt="hero" className='h-full object-cover' />
      </div>
    </div>
  )
}
