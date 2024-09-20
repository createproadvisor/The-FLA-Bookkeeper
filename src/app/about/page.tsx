import Image from 'next/image'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function About() {
  return (
    <>
        <Header />
        <div className="flex" style={{backgroundColor: '#f7ee54'}}>
        <div className="flex flex-col p-8" style={{flex:3}}>
            <h1 className="max-w-4xl mt-4 mb-4 font-serif text-3xl tracking-tight text-gray-800">
                Get in Touch with The FLA Bookkeeper
            </h1>

            <p className="mb-4">
                Ronnie Ryan is a dedicated and meticulous professional who founded The FLA Bookkeeper in 2024. With a passion for numbers and a commitment to excellence, The FLA Bookkeeper has established a business that offers top-notch bookkeeping and notary services, catering to the diverse needs of individuals and businesses nationally. Ronnie is a Certified QuickBooks ProAdvisor and an expert with all things bookkeeping, QuickBooks, and accounting.
            </p>
                
            <p className="mb-4">
                Ronnie Ryan brings years of experience and expertise in financial management and administration to The FLA Bookkeeper. Known for a keen eye for detail and a relentless dedication to accuracy, Ronnie ensures that every financial record is meticulously maintained and every notarial act is executed with the utmost professionalism.
            </p>
                
            <p className="mb-4">
                The FLA Bookkeeper provides comprehensive bookkeeping services, including:
            </p>

            <ul className="list-disc pl-4 mb-4">
                <li>Bank reconciliations</li>
                <li>Financial statement preparation</li>
                <li>Accounts payable and receivable</li>
            </ul>

            <p className="mb-4">
                The FLA Bookkeeper&apos;s methodical approach ensures that clients&apos; financial records are always up-to-date, compliant with regulations, and ready for review at any time. This reliability allows clients to focus on their core operations, knowing their finances are in capable hands.
            </p>
                
            <p className="mb-4">
                In addition to bookkeeping, The FLA Bookkeeper offers certified notary services, including:
            </p>
                

            <ul className="list-disc pl-4 mb-4">
                <li>Document notarization</li>
                <li>Witnessing signatures</li>
                <li>Administering oaths and affirmations</li>
                <li>Certifying copies of documents</li>
            </ul>
                
            <p className="mb-4">
                The FLA Bookkeeper&apos;s notary services are designed to provide convenience and peace of mind, ensuring that all documents are handled with the highest level of integrity and confidentiality.
            </p>
                
            <p className="mb-4">
                The FLA Bookkeeper&apos;s mission is to provide exceptional service that simplifies the complexities of financial management and notarization for clients. With a personalized approach, The FLA Bookkeeper tailors services to meet the unique needs of each client, fostering long-term relationships built on trust and reliability.Ronnie Ryan&apos;s dedication to excellence, combined with a genuine passion for helping others succeed, makes The FLA Bookkeeper a trusted partner for all bookkeeping and notary needs in Florida.
            </p>

            <div className="flex gap-2">
                <Button href="mailto:Ronnie@theflabookkeeper.com?subject=Website%20Inquirt%20for%20Bookkeeping%20or%20Notary%20Services" className="py-2 flex-grow">Email</Button>
                <Button href="tel:+1 (352) 531-6460" className="py-2 flex-grow">Call Us</Button>
              </div>
              <div className="pt-2">
                <Button href="/services" className="py-2 block w-full">Services</Button>
              </div>
              <Image src={require("@/images/FLA Bookkeeper Image.webp")} 
                alt="logo" className="w-20 mx-auto mt-4" />
        </div>
        <div className="hidden md:block" style={{flex:3}}>
            <Image src={require('@/images/ronnyryan.webp')} alt="hero" className='h-full object-cover' />
        </div>

        </div>

        <Image src={require('@/images/ronnyryan.webp')} alt="hero" className='h-full object-cover md:hidden' />
        <Footer />
    </>
  )
}
