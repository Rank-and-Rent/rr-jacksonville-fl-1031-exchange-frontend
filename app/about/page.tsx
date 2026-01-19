import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const PRIMARY_CITY = "Jacksonville";

export const metadata = {
  title: `About Us | Jacksonville 1031 Exchange Specialists`,
  description: `Learn how Jacksonville 1031 Exchange helps investors identify replacement properties and coordinates with Qualified Intermediaries and tax professionals.`,
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

export default function AboutPage() {
  return (
    <div className="luxury-page">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/jacksonville-1031-exchange.jpg"
          alt="Jacksonville Skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Our Story
            </span>
            <div className="section-divider" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            About Jacksonville 1031
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-[#1a1a1a]/80 font-display">
              This site is focused on helping you identify 1031 exchange properties. We can also help you get in touch with tax professionals and Qualified Intermediaries, but we are not a Qualified Intermediary.
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] mt-16 mb-6">
              Secure Intake Process
            </h2>
            <p className="text-[#1a1a1a]/70 leading-relaxed">
              When you submit a request through our contact form, your information is securely transmitted and stored. We use industry standard encryption to protect your data throughout the intake process.
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] mt-16 mb-6">
              Property Matching Workflow
            </h2>
            <p className="text-[#1a1a1a]/70 leading-relaxed">
              Our property matching workflow begins with understanding your investment criteria, timeline, and geographic preferences. We analyze available properties across {PRIMARY_CITY}, FL and surrounding markets to identify potential replacement properties that meet your 1031 exchange requirements.
            </p>
            <p className="text-[#1a1a1a]/70 leading-relaxed mt-4">
              We provide detailed property information including location, property type, estimated value, and key characteristics. This helps you make informed decisions during your 45 day identification period.
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] mt-16 mb-6">
              Third Party Coordination
            </h2>
            <p className="text-[#1a1a1a]/70 leading-relaxed">
              We coordinate with third party Qualified Intermediaries and lenders to ensure your exchange process stays on track. We do not provide Qualified Intermediary services directly, but we can connect you with bonded QI partners who handle escrow and documentation.
            </p>
            <p className="text-[#1a1a1a]/70 leading-relaxed mt-4">
              Our team works with lenders to help facilitate financing for replacement properties. We coordinate timelines to ensure your 180 day closing deadline is met.
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] mt-16 mb-6">
              What We Do Not Provide
            </h2>
            <p className="text-[#1a1a1a]/70 leading-relaxed">
              This site is not a Qualified Intermediary. We do not hold exchange funds or provide escrow services. We are not a law firm and do not provide legal advice. We are not a CPA firm and do not provide tax advice.
            </p>
            <p className="text-[#1a1a1a]/70 leading-relaxed mt-4">
              Investors should consult with a Qualified Intermediary and tax advisor before proceeding with any 1031 exchange transaction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/ponte-vedra-beach-fl-1031-exchange.jpg"
          alt="Florida Luxury Property"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-6 italic">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Contact us today to discuss your 1031 exchange property identification needs.
          </p>
          <Link
            href="/contact"
            className="btn-luxury inline-flex"
          >
            <span>Contact Us</span>
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <Script id="about-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About 1031 Exchange ${PRIMARY_CITY}`,
          description: `Learn how ${PRIMARY_CITY} 1031 Exchange helps investors identify replacement properties`,
        })}
      </Script>
    </div>
  );
}
