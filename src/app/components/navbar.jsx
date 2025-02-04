'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 p-6 lg:px-8 transition-all duration-300 ${scrolled ? 'bg-yellow-500 text-black' : 'bg-transparent text-white'}`}>
      <nav aria-label="Global" className="flex items-center justify-center lg:justify-between">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Portfolio</span>
            <img
              alt="mee"
              src="https://your-logo-url.com/logo.png" // Replace with your logo URL
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="font-semibold text-lg">
              {item.name}
            </a>
          ))}
        </div>
        {/* Social Icons Section */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-6">
          <a href="https://www.linkedin.com/in/goofydidthis/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/MiesieduoCodes" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/goofy_did_this/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
            <FaInstagram size={30} />
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Portfolio</span>
              <img
                alt=""
                src="https://your-logo-url.com/logo.png" // Replace with your logo URL
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-black/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
