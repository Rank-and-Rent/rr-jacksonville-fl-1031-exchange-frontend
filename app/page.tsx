import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { locationsData } from "@/data/locations";
import { servicesData } from "@/data/services";
import PropertyTypesCarousel from "@/components/property-types-carousel";
import ConnectButton from "@/components/connect-button";

const SITE_URL = "https://www.1031exchangeofjacksonville.com/";
const ADDRESS = "200 W Forsyth St, Jacksonville, FL 32202";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};
const EMAIL = "exchange@1031exchangeofjacksonville.com";
const COMPANY_NAME = "1031 Exchange of Jacksonville";

export const metadata: Metadata = {
  title: "Jacksonville 1031 Exchange | Florida Tax-Deferred Property Specialists",
  description:
    "Premier 1031 exchange services in Jacksonville, FL. Defer capital gains taxes on investment property with our expert guidance. Serving North Florida investors since 2010.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Jacksonville 1031 Exchange | Florida Tax-Deferred Property Specialists",
    description:
      "Premier 1031 exchange services in Jacksonville. Defer capital gains taxes with our expert guidance and local market knowledge.",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacksonville 1031 Exchange | Tax-Deferred Property Experts",
    description:
      "Defer capital gains taxes with an IRS-compliant 1031 exchange. Serving Jacksonville, St. Augustine, and investors across Florida.",
    images: ["/og-image.png"],
  },
};

const neighborhoods = [
  {
    name: "Jacksonville",
    slug: "jacksonville-fl",
    image: "/locations/jacksonville-1031-exchange.jpg",
  },
  {
    name: "St. Augustine",
    slug: "st-augustine-fl",
    image: "/locations/st-augustine-fl-1031-exchange.jpg",
  },
  {
    name: "Ponte Vedra Beach",
    slug: "ponte-vedra-beach-fl",
    image: "/locations/ponte-vedra-beach-fl-1031-exchange.jpg",
  },
  {
    name: "Amelia Island",
    slug: "amelia-island-fl",
    image: "/locations/amelia-island-1031-exchange.jpg",
  },
  {
    name: "San Marco",
    slug: "san-marco-fl",
    image: "/locations/san-marco-1031-exchange.jpg",
  },
  {
    name: "Riverside",
    slug: "riverside-fl",
    image: "/locations/riverside-1031-exchange.jpg",
  },
];

// Top services with images for display
const topServices = [
  {
    name: "Qualified Intermediary Coordination",
    slug: "qualified-intermediary-coordination",
    description: "Coordinate with bonded Qualified Intermediaries to ensure proper escrow handling and documentation.",
    image: "/locations/downtown-jacksonville-1031-exchange.jpg",
  },
  {
    name: "45-Day Identification Strategy",
    slug: "45-day-identification-strategy",
    description: "Develop a strategic approach to identifying replacement properties within the 45 day deadline.",
    image: "/locations/jacksonville-1031-exchange.jpg",
  },
  {
    name: "Reverse Exchange Coordination",
    slug: "reverse-exchange-coordination",
    description: "Coordinate reverse exchanges where replacement property is acquired before the relinquished property is sold.",
    image: "/locations/ponte-vedra-beach-fl-1031-exchange.jpg",
  },
  {
    name: "DST Placement Assistance",
    slug: "dst-placement-assistance",
    description: "Get assistance identifying Delaware Statutory Trust opportunities for 1031 exchange placement.",
    image: "/locations/amelia-island-1031-exchange.jpg",
  },
  {
    name: "Timeline Management",
    slug: "timeline-management",
    description: "Manage 45-day identification and 180-day closing deadlines with coordinated tracking and alerts.",
    image: "/locations/st-augustine-fl-1031-exchange.jpg",
  },
  {
    name: "Boot Planning",
    slug: "boot-planning",
    description: "Plan for cash boot and non-like-kind property received in exchanges to minimize tax liability.",
    image: "/locations/san-marco-1031-exchange.jpg",
  },
];

const faqItems = [
  {
    question: "What are the 45 and 180 day deadlines?",
    answer:
      "You have 45 calendar days from the sale of your relinquished property to identify replacement properties in writing, and 180 calendar days to close on one or more of those properties. The federal deadline shortens if your tax filing is due sooner, so extensions may be required.",
  },
  {
    question: "Which properties qualify as like-kind?",
    answer:
      "Any real property held for investment or productive use in a trade or business is considered like-kind to any other qualifying real property within the United States. Primary residences and inventory do not qualify, while multifamily, retail, land, and commercial assets typically do.",
  },
  {
    question: "What is boot and how is it taxed?",
    answer:
      "Boot is any cash or non-like-kind property received in an exchange. Boot is taxable up to the amount of capital gain realized, so reinvesting the full net equity and replacing equal or greater debt is essential to defer 100 percent of the gain.",
  },
  {
    question: "Are transfer taxes deferred in Florida?",
    answer:
      "A 1031 exchange defers federal and Florida income tax on qualifying real property, but documentary stamp taxes, transfer fees, and local surtaxes are still due at closing per Florida law.",
  },
  {
    question: "Can I complete a reverse exchange?",
    answer:
      "Yes. A reverse or improvement exchange uses an Exchange Accommodation Titleholder (EAT) to hold the replacement property until your relinquished asset sells, provided all exchange funds are controlled by a qualified intermediary.",
  },
  {
    question: "How do I report with Form 8824?",
    answer:
      "Form 8824 summarizes the relinquished and replacement properties, dates, boot received, and gain deferred. Your CPA files it with your federal return and keeps backup schedules from your intermediary.",
  },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}og-image.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE.dial,
      contactType: "customer service",
      areaServed: "US-FL",
      availableLanguage: "en",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
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

function ChevronIcon({ direction = "down" }: { direction?: "up" | "down" }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform ${direction === "up" ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#1a1a1a] focus:shadow-lg"
      >
        Skip to main content
      </a>

        <main id="main-content">
        {/* Hero Section with Video Background */}
        <section className="video-hero relative h-screen min-h-[700px] flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/locations/jacksonville-1031-exchange.jpg"
          >
            <source src="/jags lova.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-6">
              Florida&apos;s Premier 1031 Exchange Specialists
            </p>

            <h1 className="logo-cursive logo-hero text-white mb-6">
              Jacksonville 1031
            </h1>

            <p className="font-display text-xl md:text-2xl text-white/90 tracking-wide mb-12">
              Tax-Deferred Exchange Experts
            </p>

            <Link
              href="#contact"
              className="btn-luxury inline-flex"
            >
              <span>Start Your Exchange</span>
              <ArrowIcon />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
              <div className="w-px h-8 bg-white/30 animate-pulse" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-[#f5f1eb] text-[#1a1a1a]">
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] lg:aspect-auto lg:h-full relative overflow-hidden">
                <Image
                  src="/locations/downtown-jacksonville-1031-exchange.jpg"
                  alt="Jacksonville Skyline"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 flex items-center">
              <div className="px-8 py-16 md:px-16 lg:px-20 xl:px-32 max-w-3xl">
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-tight mb-10">
                  The 1031 Exchange <span className="italic">Advantage</span>
                </h2>

                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#1a1a1a] mb-12">
                  With decades of combined experience facilitating tax-deferred exchanges, Jacksonville 1031 has developed an unmatched reputation as Northeast Florida&apos;s premier exchange specialists. We are the trusted advisors for investors seeking to maximize their real estate portfolios. Due to our expertise in the Jacksonville market and our integrity, loyalty, and professionalism, we are sought out by savvy investors, developers, and financial advisors. Jacksonville 1031 is frequently featured as a tax-deferred exchange expert and appears as a keynote speaker at real estate conferences around the globe. Contact Jacksonville 1031 to sell and find houses, gated estates, condos, mansions and luxury homes for sale in Jacksonville, St. Augustine, Ponte Vedra, Amelia Island and more.
                </p>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-[#1a1a1a] text-white px-10 py-5 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-[#2a2a2a] transition-all"
                >
                  <span>Learn About Us</span>
                  <ArrowIcon className="ml-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types Carousel Section */}
        <PropertyTypesCarousel />

        {/* Services Section */}
        <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20 md:py-28">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-[60px] h-[1px] bg-[#c9a962]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
                Expert Guidance
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] tracking-tight">
                Our Services
              </h2>
              <Link
                href="/services"
                className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-sm text-[#c9a962] hover:text-[#1a1a1a] transition-colors tracking-[0.15em] uppercase"
              >
                <span>View All {servicesData.length} Services</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                      src={service.image}
                      alt={service.name}
                        fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl md:text-2xl text-[#1a1a1a] group-hover:text-[#c9a962] transition-colors mb-3">
                      {service.name}
                    </h3>
                    <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="bg-[#1a1a1a] py-20 md:py-28">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="section-divider" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
                Jacksonville 1031 Exchange
              </span>
          </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-16">
              Neighborhoods We Serve
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="neighborhood-card group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                      <Image
                      src={area.image}
                      alt={`${area.name} Real Estate`}
                        fill
                      className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-[#c9a962] transition-colors">
                    {area.name}
                  </h3>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/service-areas"
                className="btn-luxury bg-transparent border border-white/30 text-white hover:bg-white/10 inline-flex"
              >
                <span>View All {locationsData.length} Service Areas</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* Connect CTA Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                          <Image
            src="/locations/ponte-vedra-beach-fl-1031-exchange.jpg"
            alt="Luxury Florida Property"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center px-6">
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-white tracking-tight mb-8 italic">
              Connect With Jacksonville 1031
            </h2>

              <Link
              href="#contact"
              className="btn-luxury inline-flex"
              >
              <span>Contact Us</span>
              <ArrowIcon />
              </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="section-divider" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
                Knowledge Center
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group border-b border-[#1a1a1a]/10 pb-4"
                >
                  <summary className="flex cursor-pointer items-center justify-between py-4 text-lg font-display font-medium text-[#1a1a1a] hover:text-[#c9a962] transition-colors">
                    {item.question}
                    <ChevronIcon direction="down" />
                  </summary>
                  <p className="pb-4 text-[#1a1a1a]/70 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Newsletter Section */}
        <section id="contact" className="bg-[#f5f1eb] text-[#1a1a1a] py-16 border-t border-[#1a1a1a]/10">
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
        </section>
        </main>

      <ConnectButton />

      <Script id="organization-jsonld" type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </Script>
      <Script id="website-jsonld" type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </Script>
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
    </>
  );
}
