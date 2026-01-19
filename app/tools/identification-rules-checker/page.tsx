import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import IdentificationRulesChecker from "@/components/tools/IdentificationRulesChecker";

const PRIMARY_CITY = "Jacksonville";
const PRIMARY_STATE_ABBR = "FL";
const SITE_URL = "https://www.1031exchangeofjacksonville.com";
const COMPANY_NAME = "1031 Exchange of Jacksonville";

export const metadata: Metadata = {
  title: `Identification Rules Checker | ${COMPANY_NAME}`,
  description:
    "Validate your replacement property identification against the 3-property, 200%, or 95% identification rules for 1031 exchanges in Jacksonville, FL.",
  keywords:
    "1031 identification rules, 3 property rule, 200 percent rule, 95 percent rule, 1031 exchange Jacksonville, Florida 1031 identification",
  openGraph: {
    title: `Identification Rules Checker | ${COMPANY_NAME}`,
    description:
      "Validate your replacement property identification against IRS rules. Check 3-property, 200%, and 95% rules compliance.",
    type: "website",
    url: `${SITE_URL}/tools/identification-rules-checker`,
  },
  alternates: {
    canonical: `${SITE_URL}/tools/identification-rules-checker`,
  },
};

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Identification Rules Checker | ${COMPANY_NAME}`,
  description:
    "Validate your replacement property identification against the 3-property, 200%, or 95% identification rules for 1031 exchanges.",
  url: `${SITE_URL}/tools/identification-rules-checker`,
  about: {
    "@type": "SoftwareApplication",
    name: "Identification Rules Checker",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
};

export default function IdentificationRulesCheckerPage() {
  return (
    <div className="luxury-page">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/ponte-vedra-beach-fl-1031-exchange.jpg"
          alt="Identification Rules Checker"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Free Checker
            </span>
            <div className="section-divider" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-light text-white tracking-tight">
            Identification Rules Checker
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="text-lg leading-relaxed text-[#1a1a1a]/80 mb-12">
            Validate your replacement property identification against IRS rules. The IRS allows three
            methods for identifying replacement properties: the 3-property rule, the 200% rule, or
            the 95% rule. Use this tool to check if your identification complies with these rules.
          </p>

          <IdentificationRulesChecker />

          <div className="mt-12 bg-white/50 p-8">
            <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
              <strong className="text-[#1a1a1a]">Educational content only.</strong> Not tax, legal, or investment advice.
              Results are estimates only. Consult a qualified intermediary and tax advisor before
              making decisions. Florida does not impose a state real estate transfer tax. Recording
              fees and title insurance premiums still apply.
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              More Tools
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-light text-white tracking-tight mb-12">
            Related Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/tools/boot-calculator"
              className="group block bg-[#2a2a2a] p-8 hover:bg-[#333] transition-all"
            >
              <h3 className="font-display text-xl text-white group-hover:text-[#c9a962] transition-colors">
                Boot Calculator
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Calculate boot and estimate tax implications for your exchange
              </p>
            </Link>
            <Link
              href="/tools/exchange-cost-estimator"
              className="group block bg-[#2a2a2a] p-8 hover:bg-[#333] transition-all"
            >
              <h3 className="font-display text-xl text-white group-hover:text-[#c9a962] transition-colors">
                Exchange Cost Estimator
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Calculate QI fees, escrow costs, title insurance, and recording fees
              </p>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/tools"
              className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
            >
              <span>View All Tools</span>
              <ArrowIcon className="ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight mb-6 italic">
            Need Professional Guidance?
          </h2>
          <p className="text-[#1a1a1a]/70 mb-8 max-w-2xl mx-auto">
            While calculators help estimate your exchange, professional guidance is essential for success. Our team connects you with qualified intermediaries, CPAs, and attorneys throughout Florida.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#1a1a1a] text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#2a2a2a] transition-all"
          >
            <span>Contact Us</span>
            <ArrowIcon className="ml-3" />
          </Link>
        </div>
      </section>

      <Script id="identification-rules-checker-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </div>
  );
}
