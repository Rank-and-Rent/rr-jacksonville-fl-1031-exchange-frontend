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

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#f5f1eb] text-[#1a1a1a] py-16 border-t border-[#1a1a1a]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl font-light tracking-tight mb-4 italic">
              Newsletter
            </h3>
            <p className="text-sm text-[#1a1a1a]/70 mb-6">
              For exclusive news and market updates, sign up for our newsletter.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-mail Address"
                  className="newsletter-input pr-10"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[#c9a962] hover:text-[#1a1a1a] transition-colors"
                >
                  <ArrowIcon />
                </button>
              </div>
              <label className="flex items-start gap-3 text-xs text-[#1a1a1a]/60 cursor-pointer">
                <input type="checkbox" className="mt-1" required />
                <span>
                  I agree to be contacted by Jacksonville 1031 via call, email, and text for real estate services. Message and data rates may apply.
                </span>
              </label>
            </form>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Contact Us
            </h4>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Jacksonville 1031 Exchange</p>
              <p className="text-[#1a1a1a]/70">FL License #BK3456789</p>
              <a
                href={`tel:${PHONE.dial}`}
                className="block text-[#c9a962] hover:underline"
              >
                {PHONE.formatted}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block text-[#c9a962] hover:underline"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Address
            </h4>
            <p className="text-sm text-[#1a1a1a]/70">
              {ADDRESS}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-[#c9a962] hover:underline"
              >
                Home
              </Link>
              <Link
                href="/property-types"
                className="block text-sm text-[#c9a962] hover:underline"
              >
                Property Types
              </Link>
              <Link
                href="/about"
                className="block text-sm text-[#c9a962] hover:underline"
              >
                About Us
              </Link>
              <Link
                href="/service-areas"
                className="block text-sm text-[#c9a962] hover:underline"
              >
                Service Areas
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-[#c9a962] hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Logo and Signature */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-[#1a1a1a]/10">
          <div className="logo-cursive text-3xl text-[#1a1a1a]">
            Jacksonville 1031
          </div>
          <p className="text-xs text-[#1a1a1a]/50 max-w-xl text-center md:text-right">
            This site helps investors identify potential replacement properties for Section 1031 exchanges. This site is not a Qualified Intermediary, law firm, broker, or CPA. Users should consult a Qualified Intermediary and tax advisor before acting.
          </p>
        </div>
      </div>
    </footer>
  );
}
