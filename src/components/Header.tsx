'use client';

import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <header className="w-full border-b shadow-sm sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800"
          aria-label="Murati Group Home"
        >
          Murati Group
        </Link>

        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden sm:flex space-x-6"
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-600 hover:text-black transition-colors"
              prefetch
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
