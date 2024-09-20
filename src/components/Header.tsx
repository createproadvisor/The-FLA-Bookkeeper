'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink href="/">Home</MobileNavLink>
        <MobileNavLink href="/services">Services</MobileNavLink>
        <MobileNavLink href="/consultation">Consultation</MobileNavLink>
        <MobileNavLink href="/faq">FAQ</MobileNavLink>
        <MobileNavLink href="/about">About</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex-col content-center">
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col justify-center items-end sm:gap-x-12">
              <Link href="/" aria-label="Home">
                <span className="font-extrabold italic text-xl sm:text-4xl">
                  The FLA Bookkeeper.
                </span>
              </Link>
              <span className="text-gray-500 text-sm sm:text-md">
                BOOKKEEPING SERVICES.
              </span>
            </div>
            <div>
              <Image src={require("@/images/FLA Bookkeeper Image.webp")} 
                alt="logo" className="w-20" />
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <div className="hidden sm:flex gap-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/consultation">Consultation</NavLink>
              <NavLink href="/faq">FAQ</NavLink>
              <NavLink href="/about">About</NavLink>
            </div>
          </div>
          <div className="flex justify-end gap-x-5 sm:gap-x-8">
            <div className="-mr-1 sm:hidden">
              <MobileNavigation />  
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
