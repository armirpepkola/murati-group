import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#4a5261] text-sm mt-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <Link href="/" aria-label="Home">
            <Image
              src="/images/logo.png"
              alt="Murati Group Logo"
              width={140}
              height={60}
              className="mx-auto mb-4 md:mx-0"
              priority={false}
            />
          </Link>
          <p className="opacity-75 leading-relaxed max-w-xs mx-auto md:mx-0">
            Building excellence in London—residential, commercial & beyond.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer navigation">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["about", "services", "projects", "contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item}`} className="hover:underline">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <address className="not-italic space-y-2 opacity-80">
            <p>📞 +44 20 7946 0958</p>
            <p>
              ✉️{" "}
              <a href="mailto:info@muratigroup.co.uk" className="hover:underline">
                info@muratigroup.co.uk
              </a>
            </p>
            <p>🏢 123 Builder St, London, UK</p>
          </address>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
          <ul className="opacity-80 space-y-1">
            <li>Mon – Fri: 8am – 6pm</li>
            <li>Saturday: 9am – 4pm</li>
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