import Image from 'next/image'
import { Button } from '@/components/Button'

export function Hero() {
  return (
    <div className="flex max-w-7xl mx-auto" style={{backgroundColor: '#f7ee54'}}>
      <div className="justify-center flex flex-grow flex-col p-6">
        <h1 className="mt-4 mb-4 font-bold sm:font-normal font-display text-4xl tracking-tight text-gray-800 sm:text-7xl">
          Professional Bookkeeping Services
        </h1>
        <p className="mt-4 text-lg tracking-tight text-slate-700 flex flex-col gap-3">
          <span>Bookkeeping & Notary</span>
          <span>That’s it. Not complicated. Let’s work together. </span>
          <span> <span className="mr-3">CALL US TODAY!</span> 
          <a href="tel:+13525316460" className="font-bold underline">352 531-6460</a> 
          </span>
        </p>
        <div className="mt-4 flex justify-right gap-x-6 mb-4">
          <Button href="/consultation">Get Started</Button>
        </div>
      </div>
      <div className="hidden sm:block">
        <Image src={require('@/images/hero.webp')} alt="hero" className='h-full object-cover' />
      </div>
    </div>
  )
}
