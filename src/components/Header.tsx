'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(0)
  let lastScrollY = 0

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // Scroll down -> hide the header
          setIsHeaderVisible(false)
        } else {
          // Scroll up -> show the header
          setIsHeaderVisible(true)
        }
        lastScrollY = window.scrollY <= 0 ? 0 : window.scrollY
      }
    }

    const headerElement = document.getElementById('header')
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight)
    }

    window.addEventListener('scroll', handleScroll)
    
    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Tier */}
      <div className="w-full bg-gray-100 px-16 py-2">
        <div className="flex justify-between text-sm text-[#4a5261]">
          <div className="flex space-x-2">
            <span>For inquiries or projects send us your documents at:</span>
            <a href="mailto:info@muratigroup.com" className="text-[#e25858]">
              info@muratigroup.com
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <span>Working days: Mon - Fri</span>
          </div>
        </div>
      </div>

      {/* Thin Ruler */}
      <div className="w-full h-0.5 bg-gray-300"></div>

      {/* Main Header */}
      <header
        id="header"
        className={`w-full bg-white shadow-md sticky top-0 z-50 transition-transform ${
          isHeaderVisible ? 'transform-none' : '-translate-y-full'
        }`}
      >
        <div className="w-full px-16 py-3 flex items-center justify-between">
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

          {/* Navigation (Desktop) */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="flex-grow flex justify-center space-x-8 items-center uppercase"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[#4a5261] font-semibold hover:text-[#e25858] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Call-to-Action Button */}
          <Link
            href="/contact"
            className="bg-[#1f1f1f] hover:bg-black transition text-white uppercase font-semibold px-6 py-2 rounded-none shadow"
          >
            Call an expert
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden p-2 text-[#4a5261] hover:text-[#e25858] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md py-4">
          <div className="max-w-7xl mx-auto px-4 space-y-4">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="block text-[#4a5261] font-semibold hover:text-[#e25858] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
