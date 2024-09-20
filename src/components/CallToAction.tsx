import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden py-10"
    >
      <Container className="relative">
        <div className="text-center">
          <div className="mb-2">
            <h2 className="font-bold uppercase text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Why You Need Bookkeeping
            </h2>
          </div>
          <div>
              <span className="underline">Financial Visibility</span>
              <span className="ml-4 underline">Compliance</span>
              <span className="ml-4 underline">Financial Stability</span>
          </div>
          <div className="flex flex-col gap-2 pt-4 text-left sm:text-center">
            <div>Where is the money going? What are your spending habits? Are you aligned with the budget?</div>
            <div>You need to know where you have been to know where you are going.</div>
            <div>Bookkeeping is the 1st step to finance and accounting within a business.</div>
            <div>Income Taxes Compliance - Income, Expenses, Financial Reporting </div>
            <div>Need updated finances to get a loan Audit </div>
            <div>Business expenses = potential savings. </div>
            <div>Audit - Tracking receipts and documents</div>
          </div>
        </div>
      </Container>
    </section>
  )
}
