import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { propertyTypesData } from "@/data/property-types";
import { servicesData } from "@/data/services";

const PRIMARY_CITY = "Jacksonville";
const PRIMARY_STATE_ABBR = "FL";
const SITE_URL = "https://www.1031exchangeofjacksonville.com";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};

// Map batch data property-type slugs to service routes
const propertyTypeToServiceMap: Record<string, string> = {
  "retail-nnn": "/services/retail-nnn-property-identification",
  "multifamily": "/services/multifamily-property-identification",
  "self-storage": "/services/self-storage-identification",
  "industrial": "/services/industrial-warehouse-identification",
  "hospitality": "/services/hospitality-property-identification",
  "mixed-use": "/services/mixed-use-property-identification",
  "medical-office": "/services/medical-office-identification",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return propertyTypesData.map((type) => ({
    slug: type.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const propertyType = propertyTypesData.find((t) => t.slug === slug);

  if (!propertyType) {
    // Check if it's a batch data slug that should redirect
    if (propertyTypeToServiceMap[slug]) {
      return {
        title: "Redirecting...",
      };
    }
    return {
      title: "Property Type Not Found",
    };
  }

  return {
    title: `${propertyType.name} 1031 Exchange Properties | ${PRIMARY_CITY}`,
    description: `Find ${propertyType.name} properties for your 1031 exchange replacement property identification in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
    alternates: {
      canonical: `${SITE_URL}/property-types/${slug}`,
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

export default async function PropertyTypePage({ params }: Props) {
  const { slug } = await params;
  const propertyType = propertyTypesData.find((t) => t.slug === slug);

  // If slug is a batch data property-type that maps to a service, redirect
  if (!propertyType && propertyTypeToServiceMap[slug]) {
    redirect(propertyTypeToServiceMap[slug]);
  }

  if (!propertyType) {
    notFound();
  }

  // Find related service if it exists
  const relatedService = servicesData.find((s) =>
    s.name.toLowerCase().includes(propertyType.name.toLowerCase()) ||
    propertyType.name.toLowerCase().includes(s.name.toLowerCase())
  );

  // Get other property types for related section
  const relatedTypes = propertyTypesData
    .filter((t) => t.slug !== propertyType.slug)
    .slice(0, 6);

  return (
    <div className="luxury-page">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/jacksonville-1031-exchange.jpg"
          alt={`${propertyType.name} Properties`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Property Types
            </span>
            <div className="section-divider" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            {propertyType.name}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="text-lg leading-relaxed text-[#1a1a1a]/80 mb-8">
            Find {propertyType.name} properties for your 1031 exchange replacement property identification in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. We help investors identify qualified replacement properties within the 45 day identification deadline.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] mt-12 mb-6">
              About {propertyType.name} Properties
            </h2>
            <p className="text-[#1a1a1a]/70 leading-relaxed">
              {propertyType.name} properties can qualify as like-kind replacement properties for 1031 exchanges. These properties offer investors opportunities to defer capital gains taxes while diversifying their real estate portfolios.
            </p>
            <p className="text-[#1a1a1a]/70 leading-relaxed mt-4">
              We provide nationwide property identification support to help investors find qualified {propertyType.name} replacement properties within the 45 day identification deadline. Our team coordinates with Qualified Intermediaries and tax advisors throughout the exchange process.
            </p>
          </div>

          {relatedService && (
            <div className="mt-12">
              <Link
                href={relatedService.route}
                className="inline-flex items-center justify-center bg-[#1a1a1a] text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#2a2a2a] transition-all"
              >
                <span>Learn About {relatedService.name}</span>
                <ArrowIcon className="ml-3" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Property Types */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Explore More
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-16">
            Related Property Types
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTypes.map((type) => (
              <Link
                key={type.slug}
                href={type.route}
                className="group block bg-[#2a2a2a] p-8 hover:bg-[#333] transition-all"
              >
                <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-[#c9a962] transition-colors">
                  {type.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/property-types"
              className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
            >
              <span>View All Property Types</span>
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
            Ready to Find {propertyType.name} Properties?
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

      <Script id="breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Property Types",
              item: `${SITE_URL}/property-types`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: propertyType.name,
            },
          ],
        })}
      </Script>
    </div>
  );
}
