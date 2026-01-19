import Link from "next/link";
import { locationsData } from "@/data/locations";
import { servicesData } from "@/data/services";

const ADDRESS = "200 W Forsyth St, Jacksonville, FL 32202";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};
const EMAIL = "exchange@1031exchangeofjacksonville.com";

const propertyTypes = [
  { name: "Triple Net", href: "/property-types/triple-net" },
  { name: "Land", href: "/property-types/land" },
  { name: "Residential", href: "/property-types/residential" },
  { name: "Commercial", href: "/property-types/commercial" },
  { name: "Retail", href: "/property-types/retail" },
  { name: "Industrial", href: "/property-types/industrial" },
  { name: "Hospitality", href: "/property-types/hospitality" },
];

const topNeighborhoods = locationsData.filter(
  (l) => l.type === "city" || l.type === "neighborhood"
).slice(0, 8);

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div>
            <Link href="/" className="logo-cursive text-3xl block mb-6">
              Jacksonville 1031
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Northeast Florida&apos;s premier 1031 exchange specialists. We help investors defer capital gains taxes and build wealth through strategic property exchanges.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white/40 hover:text-[#c9a962] transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Property Types */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#c9a962] mb-6">
              Property Types
            </h4>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type.href}>
                  <Link
                    href={type.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {type.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/property-types"
                  className="text-sm text-[#c9a962] hover:text-white transition-colors"
                >
                  View All Types
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Neighborhoods */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#c9a962] mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {topNeighborhoods.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={location.route}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-sm text-[#c9a962] hover:text-white transition-colors"
                >
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#c9a962] mb-6">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white/40 mb-1">Address</p>
                <p className="text-white/80">{ADDRESS}</p>
              </div>
              <div>
                <p className="text-white/40 mb-1">Phone</p>
                <a
                  href={`tel:${PHONE.dial}`}
                  className="text-white/80 hover:text-[#c9a962] transition-colors"
                >
                  {PHONE.formatted}
                </a>
              </div>
              <div>
                <p className="text-white/40 mb-1">Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/80 hover:text-[#c9a962] transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="text-xs tracking-[0.2em] uppercase text-[#c9a962] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    1031 Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40 text-center md:text-left">
              &copy; {new Date().getFullYear()} Jacksonville 1031 Exchange. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-xs text-white/40 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-[10px] text-white/30 leading-relaxed max-w-4xl">
            This site helps investors identify potential replacement properties for Section 1031 exchanges. This site is not a Qualified Intermediary, law firm, broker, or CPA. Users should consult a Qualified Intermediary and tax advisor before acting. The property information herein is derived from various sources and may include approximations. Although the information is believed to be accurate, it is not warranted and you should not rely upon it without personal verification.
          </p>
        </div>
      </div>
    </footer>
  );
}
