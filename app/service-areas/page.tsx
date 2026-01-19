"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { locationsData } from "@/data/locations";

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

// Group locations by type
const locationsByType = locationsData.reduce((acc, location) => {
  const type = location.type || "other";
  if (!acc[type]) {
    acc[type] = [];
  }
  acc[type].push(location);
  return acc;
}, {} as Record<string, typeof locationsData>);

const typeLabels: Record<string, string> = {
  city: "Cities",
  neighborhood: "Neighborhoods",
  suburb: "Suburbs",
  district: "Districts",
  remote: "Remote Services",
};

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredLocations = searchQuery
    ? locationsData.filter((location) =>
        location.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : locationsData;

  return (
    <div className="luxury-page">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/riverside-1031-exchange.jpg"
          alt="Jacksonville Area"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
              Northeast Florida
            </span>
            <div className="section-divider" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Service Areas
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            We help investors identify 1031 exchange replacement properties throughout Jacksonville, {PRIMARY_STATE_ABBR} and surrounding communities.
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
              placeholder="Search locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#2a2a2a] border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a962] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="bg-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          {filteredLocations.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="font-display text-3xl text-white mb-4">
                We can help with &quot;{searchQuery}&quot;
              </h2>
              <p className="text-white/60 mb-8">
                Contact us to discuss property identification in your area.
              </p>
              <Link
                href={`/contact/?projectType=${encodeURIComponent(`Other - ${searchQuery}`)}`}
                className="btn-luxury inline-flex"
              >
                <span>Contact Us</span>
                <ArrowIcon />
              </Link>
            </div>
          ) : searchQuery ? (
            // Show filtered results without grouping
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocations.map((location) => {
                const locationImage = location.heroImage || `/locations/${location.slug}-1031-exchange.jpg`;
                return (
                  <Link
                    key={location.slug}
                    href={location.route}
                    className="neighborhood-card group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden mb-4">
                      <Image
                        src={locationImage}
                        alt={`${location.name} 1031 Exchange`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-[#c9a962] transition-colors">
                      {location.name}
                    </h3>
                  </Link>
                );
              })}
            </div>
          ) : (
            // Show by type
            <div className="space-y-20">
              {Object.entries(locationsByType).map(([type, locations]) => {
                if (locations.length === 0) return null;
                
                return (
                  <div key={type}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="section-divider" />
                      <h2 className="font-display text-2xl md:text-3xl text-white">
                        {typeLabels[type] || type}
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {locations.map((location) => {
                        const locationImage = location.heroImage || `/locations/${location.slug}-1031-exchange.jpg`;
                        return (
                          <Link
                            key={location.slug}
                            href={location.route}
                            className="neighborhood-card group block"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden mb-4">
                              <Image
                                src={locationImage}
                                alt={`${location.name} 1031 Exchange`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              />
                            </div>
                            <h3 className="font-display text-lg text-white group-hover:text-[#c9a962] transition-colors">
                              {location.name}
                            </h3>
                          </Link>
                        );
                      })}
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
            Don&apos;t See Your Area?
          </h2>
          <p className="text-[#1a1a1a]/70 mb-8 max-w-2xl mx-auto">
            We serve investors nationwide. Contact us to discuss property identification in your market.
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
