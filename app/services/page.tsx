"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { servicesData } from "@/data/services";

const PRIMARY_CITY = "Jacksonville";
const PRIMARY_STATE_ABBR = "FL";

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

// Group services by category
const servicesByCategory = servicesData.reduce((acc, service) => {
  const category = service.category || "Other";
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(service);
  return acc;
}, {} as Record<string, typeof servicesData>);

const categoryOrder = ["Property Paths", "Structures", "Timelines", "Execution", "Tax", "Reporting"];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredServices = searchQuery
    ? servicesData.filter((service) =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.short.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : servicesData;

  const handleNoResults = (query: string) => {
    router.push(`/contact/?projectType=${encodeURIComponent(query)}`);
  };

  return (
    <div className="luxury-page">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/downtown-jacksonville-1031-exchange.jpg"
          alt="Jacksonville Downtown"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Expert Guidance
            </span>
            <div className="section-divider" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Our Services
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            Comprehensive 1031 exchange property identification and coordination services for investors in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
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
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#2a2a2a] border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a962] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="font-display text-3xl text-white mb-4">
                We can help with &quot;{searchQuery}&quot;
              </h2>
              <p className="text-white/60 mb-8">
                Contact us to discuss your specific 1031 exchange needs.
              </p>
              <Link
                href={`/contact/?projectType=${encodeURIComponent(searchQuery)}`}
                className="btn-luxury inline-flex"
              >
                <span>Contact Us</span>
                <ArrowIcon />
              </Link>
            </div>
          ) : searchQuery ? (
            // Show filtered results without categories
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.route}
                  className="service-card group block p-8 rounded-sm"
                >
                  <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-[#c9a962] transition-colors mb-4">
                    {service.name}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    {service.short}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs text-[#c9a962] tracking-[0.15em] uppercase">
                    Learn More
                    <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            // Show by category
            <div className="space-y-20">
              {categoryOrder.map((category) => {
                const services = servicesByCategory[category];
                if (!services) return null;
                
                return (
                  <div key={category}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="section-divider" />
                      <h2 className="font-display text-2xl md:text-3xl text-white">
                        {category}
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.route}
                          className="service-card group block p-8 rounded-sm"
                        >
                          <h3 className="font-display text-xl text-white group-hover:text-[#c9a962] transition-colors mb-4">
                            {service.name}
                          </h3>
                          <p className="text-sm text-white/60 leading-relaxed mb-6">
                            {service.short}
                          </p>
                          <span className="inline-flex items-center gap-2 text-xs text-[#c9a962] tracking-[0.15em] uppercase">
                            Learn More
                            <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight mb-6">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-[#1a1a1a]/70 mb-8 max-w-2xl mx-auto">
            Our team specializes in custom 1031 exchange solutions. Contact us to discuss your specific requirements.
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
