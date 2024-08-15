import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">EdFortify</span>
                <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" width={1000} height={100} />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#FF5722]" onClick={toggleMobileMenu}>
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:gap-x-12">
              <Link href="/" className="text-sm font-semibold leading-6 text-[#4CAF50] hover:text-[#4CAF5080] active:text-[#4CAF50]">Home</Link>
              <Link href="/aboutus" className="text-sm font-semibold leading-6 text-[#4CAF50] hover:text-[#4CAF5080] active:text-[#4CAF50]">About us</Link>
              <Link href="/contactus" className="text-sm font-semibold leading-6 text-[#4CAF50] hover:text-[#4CAF5080] active:text-[#4CAF50]">Contact us</Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="/account/signin" className="text-sm font-semibold leading-6 text-[#FF5722] hover:text-[#FF572280] active:text-[#FF5722]">
                Sign in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
          
          {/* Mobile Menu */}
          <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Edfortify</span>
                    <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" width={1000} height={200} />
                  </Link>
                  <button type="button" className="-m-2.5 rounded-md p-2.5 text-[#4CAF50]" onClick={toggleMobileMenu}>
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#4CAF50] hover:bg-[#4CAF5095] active:text-white">Home</Link>
                      <Link href="/aboutus" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#4CAF50] hover:bg-[#4CAF5095] active:text-white">About us</Link>
                      <Link href="/contactus" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#4CAF50] hover:bg-[#4CAF5095] active:text-white">Contact us</Link>
                    </div>
                    <div className="py-6">
                      <Link href="/account/signin" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#FF5722] hover:bg-[#FF572295] active:text-white">Sign in</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </header>
    </div>
  )
}
