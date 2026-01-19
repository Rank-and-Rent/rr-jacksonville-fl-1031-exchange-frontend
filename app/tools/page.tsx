import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const SITE_URL = "https://www.1031exchangeofjacksonville.com";

export const metadata: Metadata = {
  title: "1031 Exchange Tools | Calculators & Checkers | Jacksonville, FL",
  description:
    "Free 1031 exchange calculators and tools for Jacksonville, FL investors. Calculate boot, estimate costs, check identification rules, and more.",
  keywords:
    "1031 exchange tools, 1031 calculator, boot calculator, exchange cost estimator, identification rules checker, 1031 exchange Jacksonville",
  openGraph: {
    title: "1031 Exchange Tools | Calculators & Checkers",
    description:
      "Free 1031 exchange calculators and tools for Jacksonville, FL investors. Calculate boot, estimate costs, and check identification rules.",
    type: "website",
    url: `${SITE_URL}/tools`,
  },
  alternates: {
    canonical: `${SITE_URL}/tools`,
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

function CalculatorIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8" y2="10" />
      <line x1="12" y1="10" x2="12" y2="10" />
      <line x1="16" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="8" y2="14" />
      <line x1="12" y1="14" x2="12" y2="14" />
      <line x1="16" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="8" y2="18" />
      <line x1="12" y1="18" x2="12" y2="18" />
      <line x1="16" y1="18" x2="16" y2="18" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const tools = [
  {
    name: "Boot Calculator",
    slug: "boot-calculator",
    description:
      "Calculate boot (cash received, mortgage relief, non-like-kind property) and estimate tax implications for your 1031 exchange.",
    icon: CalculatorIcon,
    href: "/tools/boot-calculator",
  },
  {
    name: "Exchange Cost Estimator",
    slug: "exchange-cost-estimator",
    description:
      "Calculate QI fees, escrow costs, title insurance, recording fees, and other closing costs for your 1031 exchange.",
    icon: DollarIcon,
    href: "/tools/exchange-cost-estimator",
  },
  {
    name: "Identification Rules Checker",
    slug: "identification-rules-checker",
    description:
      "Validate your replacement property identification against the 3-property, 200%, or 95% identification rules.",
    icon: CheckIcon,
    href: "/tools/identification-rules-checker",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "1031 Exchange Tools | Calculators & Checkers",
  description:
    "Free 1031 exchange calculators and tools for Jacksonville, FL investors. Calculate boot, estimate costs, and check identification rules.",
  url: `${SITE_URL}/tools`,
};

export default function ToolsPage() {
  return (
    <div className="luxury-page">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/mandarin-1031-exchange.jpg"
          alt="Jacksonville"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Free Resources
            </span>
            <div className="section-divider" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            1031 Exchange Tools
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            Free calculators and tools to help you navigate your 1031 exchange. Calculate boot, estimate costs, check identification rules, and more.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="service-card group block p-8 rounded-sm text-center"
                >
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#c9a962]/10 text-[#c9a962] mb-6 group-hover:bg-[#c9a962]/20 transition-colors">
                    <Icon />
                  </span>
                  <h2 className="font-display text-2xl text-white group-hover:text-[#c9a962] transition-colors mb-4">
                    {tool.name}
                  </h2>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs text-[#c9a962] tracking-[0.15em] uppercase">
                    Use Tool
                    <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-[#2a2a2a] py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="font-display text-2xl text-white mb-6">
            Important Disclaimer
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            <strong className="text-white">Educational content only.</strong> Not tax, legal, or investment advice.
            Results are estimates only. Consult a qualified intermediary and tax advisor before
            making decisions. Florida does not impose a state real estate transfer tax. Recording
            fees and title insurance premiums still apply.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            These tools are provided for illustrative purposes only. Actual tax implications,
            costs, and rules compliance should be verified with qualified professionals including
            your Qualified Intermediary, CPA, and tax attorney.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight mb-6">
            Need Professional Help?
          </h2>
          <p className="text-[#1a1a1a]/70 mb-8 max-w-2xl mx-auto">
            While these tools can help you estimate and understand your 1031 exchange, professional
            guidance is essential for a successful exchange. Our team can connect you with
            qualified intermediaries, CPAs, and attorneys throughout Florida.
          </p>
          <Link
            href="/contact"
            className="btn-luxury bg-[#1a1a1a] text-white inline-flex"
          >
            <span>Contact Us</span>
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <Script id="tools-page-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </div>
  );
}
