import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { servicesData } from "@/data/services";
import { getServiceBatchData } from "@/lib/batch-data";

const PRIMARY_CITY = "Jacksonville";
const PRIMARY_STATE_ABBR = "FL";
const SITE_URL = "https://www.1031exchangeofjacksonville.com";
const COMPANY_NAME = "1031 Exchange of Jacksonville";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};

type Props = {
  params: Promise<{ slug: string }>;
};

// Dynamic route - pages generated at request time for better build performance
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | 1031 Exchange ${PRIMARY_CITY}`,
    description: service.short,
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
  };
}

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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const batchData = getServiceBatchData(slug);
  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.short,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: PRIMARY_CITY,
      addressRegion: PRIMARY_STATE_ABBR,
    },
  };

  return (
    <div className="luxury-page">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/downtown-jacksonville-1031-exchange.jpg"
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Services
            </span>
            <div className="section-divider" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
          {service.name}
        </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="text-lg leading-relaxed text-[#1a1a1a]/80 mb-8">
          {service.short}
        </p>

        {batchData?.mainDescription && (
          <div 
              className="prose prose-lg max-w-none text-[#1a1a1a]/70"
            dangerouslySetInnerHTML={{ __html: batchData.mainDescription }}
          />
        )}

        {batchData?.inclusions && batchData.inclusions.length > 0 && (
          <div className="mt-12">
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] mb-6">
              What We Include
            </h2>
              <ul className="space-y-3">
              {batchData.inclusions.map((inclusion, index) => (
                  <li key={index} className="flex items-start text-[#1a1a1a]/70">
                    <span className="mr-3 text-[#c9a962]">•</span>
                  <span>{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {batchData?.commonSituations && batchData.commonSituations.length > 0 && (
          <div className="mt-12">
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] mb-6">
              Common Situations
            </h2>
              <div className="space-y-4">
              {batchData.commonSituations.map((situation, index) => (
                  <div key={index} className="bg-white/50 p-6">
                    <p className="text-[#1a1a1a]/70">{situation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {batchData?.faqs && batchData.faqs.length > 0 && (
          <div className="mt-12">
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] mb-6">
              Frequently Asked Questions
            </h2>
              <div className="space-y-4">
              {batchData.faqs.map((faq, index) => (
                  <details key={index} className="group bg-white/50 p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-display font-medium text-[#1a1a1a] hover:text-[#c9a962] transition-colors">
                    {faq.question}
                      <span className="ml-4">+</span>
                  </summary>
                    <p className="mt-4 text-sm leading-relaxed text-[#1a1a1a]/70">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {batchData?.complianceNote && (
            <div className="mt-8 bg-white/50 p-6">
              <p className="text-sm text-[#1a1a1a]/70 italic">{batchData.complianceNote}</p>
            </div>
          )}

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#1a1a1a] text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#2a2a2a] transition-all"
            >
              <span>Get Started</span>
              <ArrowIcon className="ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Explore More
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-16">
            Related Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={related.route}
                className="group block bg-[#2a2a2a] p-8 hover:bg-[#333] transition-all"
              >
                <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-[#c9a962] transition-colors">
                  {related.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
            >
              <span>View All Services</span>
              <ArrowIcon className="ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/ponte-vedra-beach-fl-1031-exchange.jpg"
          alt="Luxury Florida Property"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-6 italic">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Our Jacksonville-based team helps investors stay compliant, on time, and fully informed throughout the exchange process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#1a1a1a] px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#f5f1eb] transition-all"
            >
              <span>Contact Us</span>
              <ArrowIcon className="ml-3" />
            </Link>
            <a
              href={`tel:${PHONE.dial}`}
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
            >
              {PHONE.formatted}
            </a>
          </div>
        </div>
      </section>

      <Script id="service-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </div>
  );
}
