import Link from "next/link";

const ADDRESS = "200 W Forsyth St, Jacksonville, FL 32202";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};
const EMAIL = "exchange@1031exchangeofjacksonville.com";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4 text-[#c9a962]">
              Contact Us
            </h4>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Jacksonville 1031 Exchange</p>
              <p className="text-white/60">FL License #BK3456789</p>
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
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4 text-[#c9a962]">
              Address
            </h4>
            <p className="text-sm text-white/60">
              {ADDRESS}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-4 text-[#c9a962]">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-white/80 hover:text-[#c9a962] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/property-types"
                className="block text-sm text-white/80 hover:text-[#c9a962] transition-colors"
              >
                Property Types
              </Link>
              <Link
                href="/about"
                className="block text-sm text-white/80 hover:text-[#c9a962] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/service-areas"
                className="block text-sm text-white/80 hover:text-[#c9a962] transition-colors"
              >
                Service Areas
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-white/80 hover:text-[#c9a962] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Logo and Signature */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
          <div className="logo-cursive text-3xl text-white">
            Jacksonville 1031
          </div>
          <p className="text-xs text-white/40 max-w-xl text-center md:text-right">
            This site helps investors identify potential replacement properties for Section 1031 exchanges. This site is not a Qualified Intermediary, law firm, broker, or CPA. Users should consult a Qualified Intermediary and tax advisor before acting.
          </p>
        </div>
      </div>
    </footer>
  );
}
