"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PRIMARY_CITY = "Jacksonville";
const PRIMARY_STATE_ABBR = "FL";

const propertyTypes = [
  {
    name: "Triple Net (NNN)",
    slug: "triple-net",
    description: "Premium NNN investments with creditworthy corporate tenants who cover all property expenses, providing stable passive income.",
    image: "/inventory/retail-1031-exchange.jpg",
  },
  {
    name: "Land & Agricultural",
    slug: "land",
    description: "Raw land, agricultural properties, timber tracts, and development parcels across Northeast Florida.",
    image: "/inventory/land-agricultural-1031-exchange.jpg",
  },
  {
    name: "Residential Investment",
    slug: "residential",
    description: "Single-family rentals, vacation properties, and residential portfolios in desirable Jacksonville neighborhoods.",
    image: "/inventory/multifamily-1031-exchange.jpg",
  },
  {
    name: "Commercial Office",
    slug: "commercial",
    description: "Office buildings, mixed-use developments, and professional properties in prime Jacksonville locations.",
    image: "/inventory/medical-office-1031-exchange.jpg",
  },
  {
    name: "Retail Properties",
    slug: "retail",
    description: "Shopping centers, strip malls, and freestanding retail properties in high-traffic corridors.",
    image: "/inventory/retail-1031-exchange.jpg",
  },
  {
    name: "Industrial & Logistics",
    slug: "industrial",
    description: "Warehouses, distribution centers, and flex spaces supporting JAXPORT and major logistics corridors.",
    image: "/inventory/industrial-1031-exchange.jpg",
  },
  {
    name: "Hospitality & Resort",
    slug: "hospitality",
    description: "Hotels, boutique resorts, and marinas in Florida's premier coastal markets.",
    image: "/inventory/hospitality-resort-1031-exchange.jpg",
  },
  {
    name: "Multifamily Communities",
    slug: "multifamily",
    description: "Garden, mid-rise, and mixed-income apartment properties across Duval, Clay, and St. Johns counties.",
    image: "/inventory/multifamily-1031-exchange.jpg",
  },
  {
    name: "Medical Office",
    slug: "medical-office",
    description: "Health campuses, surgery centers, and professional condos with long-term credit tenants.",
    image: "/inventory/medical-office-1031-exchange.jpg",
  },
  {
    name: "Self Storage",
    slug: "self-storage",
    description: "Climate-controlled and drive-up self storage facilities across Jacksonville and surrounding markets.",
    image: "/inventory/industrial-1031-exchange.jpg",
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

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

export default function PropertyTypesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredTypes = searchQuery
    ? propertyTypes.filter((type) =>
        type.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        type.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : propertyTypes;

  return (
    <div className="luxury-page">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/jacksonville-beach-fl-1031-exchange.jpg"
          alt="Florida Property"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Investment Categories
            </span>
            <div className="section-divider" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Property Types
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            Explore property types available for 1031 exchange replacement properties in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-[#1a1a1a] py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-md mx-auto relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search property types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#2a2a2a] border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a962] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Property Types Grid */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          {filteredTypes.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="font-display text-3xl text-white mb-4">
                We can help with &quot;{searchQuery}&quot;
              </h2>
              <p className="text-white/60 mb-8">
                Contact us to discuss property identification for this property type.
              </p>
              <Link
                href={`/contact/?projectType=${encodeURIComponent(searchQuery)}`}
                className="btn-luxury inline-flex"
              >
                <span>Contact Us</span>
                <ArrowIcon />
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTypes.map((type) => (
                <Link
                  key={type.slug}
                  href={`/property-types/${type.slug}`}
                  className="neighborhood-card group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="font-display text-2xl text-white group-hover:text-[#c9a962] transition-colors mb-3">
                    {type.name}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs text-[#c9a962] tracking-[0.15em] uppercase">
                    View Properties
                    <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight mb-6">
            Looking for Something Specific?
          </h2>
          <p className="text-[#1a1a1a]/70 mb-8 max-w-2xl mx-auto">
            Our team specializes in identifying unique investment opportunities. Contact us to discuss your specific property requirements.
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
    </div>
  );
}
