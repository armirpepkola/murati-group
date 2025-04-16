'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Button } from './Button'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentY = window.scrollY
      const goingUp = currentY < lastScrollY.current
      setIsHeaderVisible(goingUp || currentY <= 0)
      lastScrollY.current = currentY
      ticking.current = false
    }

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection)
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Tier */}
      <div className="w-full bg-gray-100 px-4 md:px-8 lg:px-16 py-2 z-49">
        <div className="flex flex-col md:flex-row justify-between gap-2 text-sm text-[#4a5261]">
          {/* Email line - responsive wording with truncation */}
          <div className="flex items-center gap-1 whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="block md:hidden">For inquiries send us your documents at:</span>
            <span className="hidden md:block">For inquiries or projects send us your documents at:</span>
            <a
              href="mailto:info@muratigroup.com"
              className="text-[#e25858] underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-[#e25858]"
            >
              info@muratigroup.com
            </a>
          </div>

          {/* Working Days - hidden on mobile */}
          <div className="hidden md:flex items-center">
            <span>Working days: Mon - Fri</span>
          </div>
        </div>
      </div>

      <div className="w-full h-0.5 bg-gray-300 z-50" aria-hidden="true"></div>

      {/* Main Header */}
      <header
        id="header"
        className={`w-full bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? 'transform-none' : '-translate-y-full'
        }`}
      >
        <div className="w-full px-4 md:px-8 lg:px-16 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" aria-label="Murati Group Home">
            <Image
              src="/images/logo.png"
              alt="Murati Group Logo"
              width={96}
              height={96}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden lg:flex flex-grow justify-center space-x-6 md:space-x-8 items-center uppercase"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="relative text-[#4a5261] font-semibold transition-colors hover:text-[#e25858] 
                  before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 
                  before:bg-[#e25858] before:transition-all before:duration-300 hover:before:w-full"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button href="/services" variant="secondary">
              call an expert
            </Button>
          </div>

          {/* Mobile & Tablet Toggle Button */}
          <button
            className="lg:hidden p-2 text-[#4a5261] hover:text-[#e25858] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e25858]"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile & Tablet Nav */}
        {isMobileMenuOpen && (
          <nav
            role="navigation"
            aria-label="Mobile navigation"
            className="lg:hidden absolute left-0 right-0 z-[9999] bg-white shadow-md py-4"
          >
            <div className="max-w-7xl mx-auto px-4 space-y-4">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-[#4a5261] font-semibold hover:text-[#e25858] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e25858]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-2">
                <Button href="/services" variant="secondary">
                  call an expert
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
