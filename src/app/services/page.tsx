import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Image from 'next/image'
import { Button } from '@/components/Button'

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <div className="grid mx-auto grid-cols-1 md:grid-cols-2 gap-4 pb-8 max-w-5xl">
          <div className="flex flex-col px-4">
            <h1 className="text-4xl font-serif">
              Exclusive Services
            </h1>
            <p className="mb-4 mt-4 max-w-2xl  flex flex-col gap-3">
              The FLA Bookkeeper provides comprehensive bookkeeping services, including:
            </p>
            <ul className="list-disc pl-4">
              <li>Bank reconciliations</li>
              <li>Financial statement preparation</li>
            </ul>
            <p className="mt-4 max-w-2xl  flex flex-col gap-3">
            The FLA Bookkeeper&apos;s methodical approach ensures that clients&apos; financial records are always up-to-date, compliant with regulations, and ready for review at any time. This reliability allows clients to focus on their core operations, knowing their finances are in capable hands.
            </p>
            <p className="mt-4 max-w-2xl  flex flex-col gap-3">
            In addition to bookkeeping, The FLA Bookkeeper offers certified notary services, including:
            </p>
            <ul className="list-disc pl-4 mb-4 mt-4">
              <li>Document notarization</li>
              <li>Witnessing signatures</li>
              <li>Administering oaths and affirmations</li>
              <li>Certifying copies of documents</li>
            </ul>

            <div>
              <div className="flex gap-2">
                <Button href="tel:+1 (352) 531-6460" className="py-2 flex-grow">Call</Button>
                <Button href="mailto:Ronnie@theflabookkeeper.com?subject=Website%20Inquirt%20for%20Bookkeeping%20or%20Notary%20Services" className="py-2 flex-grow">Email</Button>
              </div>
              <div className="pt-2">
                  <Button href="https://calendar.app.google/P7VhJMR6jGmiTaHR9" className="py-2 w-full">Book A Call</Button>
              </div>
            </div>
          </div>
          <div className="pt-2 px-4">
            <p className="text-xl font-bold font-serif mb-2">1 | Essentials</p>
            <div>
              <ul className="list-disc pl-4">
                <li>Categorize your transactions for your P&L and Schedule C</li>
                <li>Reconcile your accounts</li>
                <li>Manage your Financial Statements: Profit & Loss, Balance Sheet</li>
              </ul>
              
              <span className='text-md font-bold pt-4 block'>
                Contact for Monthly Estimate 
              </span>
            </div>

            <p className="text-xl font-bold font-serif mb-2 mt-12">2 | Book Clean Up Service</p>
            <p>
                Our Bookkeeping Clean-Up Service is designed to bring order and clarity to your financial records. Whether you&apos;re dealing with months of backlog, disorganized accounts, or preparing for tax season, we meticulously review, reconcile, and update your books, ensuring accuracy and compliance. Let us transform your chaotic records into a streamlined and understandable financial system, giving you peace of mind and a solid foundation for future growth. Trust us to tidy up your books so you can focus on what matters most – your business.
            </p>

            <p className="text-xl font-bold font-serif mb-2 mt-12">3 | Notary Services</p>
            <div>
                
              <span>The FLA Bookkeeper offers certified notary services, including:</span>
              <ul className="list-disc pl-4 my-6">
                <li>
                  Document notarization
                </li>
                <li>
                  Witnessing signatures
                </li>
                <li>
                  Administering oaths and affirmations
                </li>
                <li>
                  Certifying copies of documents
                </li>
              </ul>
            
              <span>The FLA Bookkeeper&apos;s notary services are designed to provide convenience and peace of mind, ensuring that all documents are handled with the highest level of integrity and confidentiality.</span>
            </div>
            <div className="pt-4">
                  <Button href="https://calendar.app.google/P7VhJMR6jGmiTaHR9" className="py-2 w-full">Book A Call</Button>
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
