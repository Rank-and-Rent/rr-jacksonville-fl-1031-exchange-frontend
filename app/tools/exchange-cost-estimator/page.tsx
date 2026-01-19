import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import ExchangeCostEstimator from "@/components/tools/ExchangeCostEstimator";

const PRIMARY_CITY = "Jacksonville";
const PRIMARY_STATE_ABBR = "FL";
const SITE_URL = "https://www.1031exchangeofjacksonville.com";
const COMPANY_NAME = "1031 Exchange of Jacksonville";

export const metadata: Metadata = {
  title: `Exchange Cost Estimator | ${COMPANY_NAME}`,
  description:
    "Calculate QI fees, escrow costs, title insurance, recording fees, and other closing costs for your 1031 exchange in Jacksonville, FL.",
  keywords:
    "1031 exchange costs, QI fees, escrow costs, title insurance, recording fees, 1031 exchange Jacksonville, Florida 1031 costs",
  openGraph: {
    title: `Exchange Cost Estimator | ${COMPANY_NAME}`,
    description:
      "Estimate total costs for your 1031 exchange including QI fees, escrow, title insurance, and recording fees.",
    type: "website",
    url: `${SITE_URL}/tools/exchange-cost-estimator`,
  },
  alternates: {
    canonical: `${SITE_URL}/tools/exchange-cost-estimator`,
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
  name: `Exchange Cost Estimator | ${COMPANY_NAME}`,
  description:
    "Calculate QI fees, escrow costs, title insurance, recording fees, and other closing costs for your 1031 exchange.",
  url: `${SITE_URL}/tools/exchange-cost-estimator`,
  about: {
    "@type": "SoftwareApplication",
    name: "Exchange Cost Estimator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
};

export default function ExchangeCostEstimatorPage() {
  return (
    <div className="luxury-page">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/atlantic-beach-fl-1031-exchange.jpg"
          alt="Exchange Cost Estimator"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Free Estimator
            </span>
            <div className="section-divider" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-light text-white tracking-tight">
            Exchange Cost Estimator
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="text-lg leading-relaxed text-[#1a1a1a]/80 mb-12">
            Estimate the total costs associated with your 1031 exchange, including Qualified
            Intermediary fees, escrow costs, title insurance premiums, and recording fees. Use this
            tool to budget for your exchange transaction.
          </p>

          <ExchangeCostEstimator />

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
              href="/tools/identification-rules-checker"
              className="group block bg-[#2a2a2a] p-8 hover:bg-[#333] transition-all"
            >
              <h3 className="font-display text-xl text-white group-hover:text-[#c9a962] transition-colors">
                Identification Rules Checker
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Validate against 3-property, 200%, or 95% identification rules
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

      <Script id="exchange-cost-estimator-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </div>
  );
}
