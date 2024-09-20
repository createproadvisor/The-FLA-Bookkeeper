import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const faqs = [
  [
    {
      question: 'What are the fees?',
      answer:
        'We use a transaction rate fee per month. We can talk about your specific business needs and figure out how we can best serve you.'
    },
    {
      question: 'What type of bookkeeping services do you offer?',
      answer: 'We specialize in QuickBooks and are QuickBooks Online Certified ProAdvisors. We work remotely, or we can set up in person meetings to help you better understand your bookkeeping. We utilize cloud based software for easy and secure document uploads and transfers.',
    },
    {
      question: 'How does monthly bookkeeping work?',
      answer:
        'We analyze and record all of your business transactions through QuickBooks to compile monthly financial statements such as P&L and Balance Sheet.'
    },
  ],
  [
    {
      question: 'What if I need a more frequent schedule than monthly?',
      answer:
        'We provide excellent customer service, and we are here to serve you. We can absolutely meet more often to meet your specific business needs. We can even provide weekly cash meetings to help you optimize your cash flow.',
    },
    {
      question:
        'When and how do I send my documents to you?',
      answer:
        'We will need your bank statements every month. We can setup your bank statements to automatically synch with QuickBooks so that you can focus on your business while we handle your bookkeeping. You can also send us your documents if you prefer. We use secure cloud based software and email for document delivery.',
    },
  ],
  [
    {
      question: 'What if my books are behind schedule or need a clean-up?',
      answer: 'Don’t worry about that. We can help clean-up any messy transactions or inaccurate records from your past. We will discuss the details as necessary for your specific situation.',
    },
    {
      question: 'What if I need assistance for special projects?',
      answer:
        'Let’s talk about it! We love innovation and are constantly trying new concepts. Let’s work together to improve your special projects and optimize your business.',
    },
    {
      question: 'When do you deliver my monthly financial reports?',
      answer:
        'We will have your financial reports delivered by the 10th of every month so that you can better plan for your business.',
    },
  ],
]

export default function Faqs() {
  return (
    <>
      <Header />
        <main className="mx-auto max-w-5xl">
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative mx-auto overflow-hidden py-12"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl ">
          <h2
            id="faq-title"
            className="font-display text-left sm:text-center text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
    </main>
    <Footer />
    </>
  )
}
