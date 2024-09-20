import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import background from '@/images/Consultation Fla Bookkeeper.webp'

export default function Consultation() {
  return (
    <>
      <Header />
        <main className="relative">
            <div className="flex justify-center items-center" style={{ backgroundImage: `url("${background.src}")`, minHeight:"450px", width:"100%", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition: "center" }}>
                <div className="rounded-lg max-w-xl py-20 px-4 sm:px-9 text-gray-700 text-xl sm:text-2xl font-bold text-center" style={{backgroundColor: '#f7ee54DD', lineHeight: 1.5}}>
                    You can schedule a free consultation, or you can call me directly. 
                    <br />
                    <a href="tel:+1 (352) 531-6460" className="text-gray-600 underline hover:text-gray-900">
                      +1 (352) 531-6460
                    </a>
                    <div className="pt-4">
                      <Button href="https://calendar.app.google/P7VhJMR6jGmiTaHR9" className="py-2">Free Consultation</Button>
                    </div>
                </div>
            </div>
        </main>
    <Footer />
    </>
  )
}
