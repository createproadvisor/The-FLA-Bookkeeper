import Image from 'next/image'
import { Button } from '@/components/Button'

export function Hero() {
  return (
    <div className="flex" style={{backgroundColor: '#f7ee54'}}>
      <div className="justify-center flex flex-col p-6">
        <h1 className="max-w-4xl mt-4 mb-4 font-display text-6xl tracking-tight text-gray-800 sm:text-7xl">
          Professional Bookkeeping Services
        </h1>
        <p className="mt-4 max-w-2xl text-lg tracking-tight text-slate-700 flex flex-col gap-3">
          <span>Bookkeeping & Notary</span>
          <span>That’s it. Not complicated. Let’s work together. </span>
          <span> <span className="mr-3">CALL US TODAY!</span> <span className="font-bold">352 531-6460</span> </span>
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
