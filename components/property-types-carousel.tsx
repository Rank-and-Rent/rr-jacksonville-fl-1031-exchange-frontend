"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const propertyTypes = [
  {
    name: "Triple Net",
    slug: "triple-net",
    description: "Premium NNN investments with creditworthy corporate tenants who cover all property expenses, providing stable passive income with minimal landlord responsibilities.",
    image: "/inventory/retail-1031-exchange.jpg",
  },
  {
    name: "Land",
    slug: "land",
    description: "Raw land, agricultural properties, and development parcels across Northeast Florida. Ideal for long-term appreciation and portfolio diversification.",
    image: "/inventory/land-agricultural-1031-exchange.jpg",
  },
  {
    name: "Residential",
    slug: "residential",
    description: "Single-family rentals, vacation properties, and residential portfolios in Jacksonville's most desirable neighborhoods and beach communities.",
    image: "/inventory/multifamily-1031-exchange.jpg",
  },
  {
    name: "Commercial",
    slug: "commercial",
    description: "Office buildings, mixed-use developments, and professional properties in prime Jacksonville locations with strong tenant demand.",
    image: "/inventory/medical-office-1031-exchange.jpg",
  },
  {
    name: "Retail",
    slug: "retail",
    description: "Shopping centers, strip malls, and freestanding retail properties positioned in high-traffic corridors throughout Northeast Florida.",
    image: "/inventory/retail-1031-exchange.jpg",
  },
  {
    name: "Industrial",
    slug: "industrial",
    description: "Warehouses, distribution centers, and flex spaces supporting JAXPORT, Cecil Commerce, and major interstate corridors.",
    image: "/inventory/industrial-1031-exchange.jpg",
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    description: "Hotels, boutique resorts, and marinas balancing leisure demand with operational controls in Florida's premier coastal markets.",
    image: "/inventory/hospitality-resort-1031-exchange.jpg",
  },
];

function ChevronLeft() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function PropertyTypesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setDirection("next");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % propertyTypes.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + propertyTypes.length) % propertyTypes.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const getPrevIndex = () => (currentIndex - 1 + propertyTypes.length) % propertyTypes.length;
  const getNextIndex = () => (currentIndex + 1) % propertyTypes.length;

  const currentType = propertyTypes[currentIndex];
  const prevType = propertyTypes[getPrevIndex()];
  const nextType = propertyTypes[getNextIndex()];

  return (
    <section className="bg-[#1a1a1a] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="section-divider" />
          <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
            Investment Categories
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-16">
          Property Types
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Main Carousel Content */}
          <div className="flex items-center justify-center gap-0 md:gap-4 lg:gap-8">
            {/* Previous Slide (Partial) */}
            <div className="hidden lg:block w-[200px] xl:w-[280px] opacity-50 relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={prevType.image}
                  alt={prevType.name}
                  fill
                  className="object-cover blur-[2px]"
                  sizes="280px"
                />
              </div>
              <div className="mt-4 overflow-hidden">
                <h3 className="font-display text-2xl xl:text-3xl text-white/50 italic truncate">
                  {prevType.name}
                </h3>
              </div>
            </div>

            {/* Navigation Button - Left */}
            <button
              onClick={goToPrev}
              className="carousel-btn absolute left-0 lg:relative z-20 flex-shrink-0"
              aria-label="Previous property type"
            >
              <ChevronLeft />
            </button>

            {/* Current Slide (Center) */}
            <div className="flex-1 max-w-xl lg:max-w-lg xl:max-w-xl mx-4 md:mx-8">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={currentType.image}
                  alt={currentType.name}
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>

              {/* Title with flip animation */}
              <div className="mt-6 overflow-hidden h-[120px] md:h-[80px]">
                <div
                  className={`transition-all duration-500 transform ${
                    isAnimating
                      ? direction === "next"
                        ? "-translate-y-full opacity-0"
                        : "translate-y-full opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  <h3 className="font-display text-4xl md:text-5xl text-white italic text-center">
                    {currentType.name}
                  </h3>
                  <p className="text-sm text-white/60 text-center mt-2 line-clamp-2">
                    {currentType.description}
                  </p>
                </div>
              </div>

              {/* View Link */}
              <div className="text-center mt-4">
                <Link
                  href={`/property-types/${currentType.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-[#c9a962] hover:text-white transition-colors tracking-[0.15em] uppercase"
                >
                  <span>View Properties</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Navigation Button - Right */}
            <button
              onClick={goToNext}
              className="carousel-btn absolute right-0 lg:relative z-20 flex-shrink-0"
              aria-label="Next property type"
            >
              <ChevronRight />
            </button>

            {/* Next Slide (Partial) */}
            <div className="hidden lg:block w-[200px] xl:w-[280px] opacity-50 relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={nextType.image}
                  alt={nextType.name}
                  fill
                  className="object-cover blur-[2px]"
                  sizes="280px"
                />
              </div>
              <div className="mt-4 overflow-hidden">
                <h3 className="font-display text-2xl xl:text-3xl text-white/50 italic truncate">
                  {nextType.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {propertyTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setDirection(index > currentIndex ? "next" : "prev");
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#c9a962] w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to ${propertyTypes[index].name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
