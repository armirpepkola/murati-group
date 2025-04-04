import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#4a5261] text-sm mt-24">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={140}
              height={60}
              className="mb-4"
            />
          </Link>
          <p className="opacity-75">
            Building excellence in London—residential, commercial & beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 opacity-80">
            <li>📞 +44 20 7946 0958</li>
            <li>✉️ info@muratigroup.co.uk</li>
            <li>🏢 123 Builder St, London, UK</li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
          <ul className="opacity-80">
            <li>Mon - Fri: 8am - 6pm</li>
            <li>Saturday: 9am - 4pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Bottom Ruler */}
      <div className="border-t border-[#4a5261]/20 text-center py-4 text-xs text-[#4a5261]/60">
        &copy; {new Date().getFullYear()} Murati Group. All rights reserved.
      </div>
    </footer>
  );
}
