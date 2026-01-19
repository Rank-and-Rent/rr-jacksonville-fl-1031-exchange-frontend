"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const propertyTypes = [
  {
    name: "Triple Net",
    slug: "triple-net",
    description: "Premium NNN investments with creditworthy corporate tenants who cover all property expenses.",
    image: "/inventory/retail-1031-exchange.jpg",
  },
  {
    name: "Land",
    slug: "land",
    description: "Raw land, agricultural properties, and development parcels across Northeast Florida.",
    image: "/inventory/land-agricultural-1031-exchange.jpg",
  },
  {
    name: "Residential",
    slug: "residential",
    description: "Single-family rentals, vacation properties, and residential portfolios in desirable neighborhoods.",
    image: "/inventory/multifamily-1031-exchange.jpg",
  },
  {
    name: "Commercial",
    slug: "commercial",
    description: "Office buildings, mixed-use developments, and professional properties in prime locations.",
    image: "/inventory/medical-office-1031-exchange.jpg",
  },
  {
    name: "Retail",
    slug: "retail",
    description: "Shopping centers, strip malls, and freestanding retail properties in high-traffic corridors.",
    image: "/inventory/retail-1031-exchange.jpg",
  },
  {
    name: "Industrial",
    slug: "industrial",
    description: "Warehouses, distribution centers, and flex spaces supporting major logistics corridors.",
    image: "/inventory/industrial-1031-exchange.jpg",
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    description: "Hotels, boutique resorts, and marinas in Florida's premier coastal markets.",
    image: "/inventory/hospitality-resort-1031-exchange.jpg",
  },
];

function ChevronLeft() {
  return (
    <svg
      width="20"
      height="20"
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
      width="20"
      height="20"
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
    }, 400);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + propertyTypes.length) % propertyTypes.length);
      setIsAnimating(false);
    }, 400);
  }, [isAnimating]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const getPrevIndex = () => (currentIndex - 1 + propertyTypes.length) % propertyTypes.length;
  const getNextIndex = () => (currentIndex + 1) % propertyTypes.length;

  const currentType = propertyTypes[currentIndex];
  const prevType = propertyTypes[getPrevIndex()];
  const nextType = propertyTypes[getNextIndex()];

  return (
    <section className="bg-[#1a1a1a] h-screen min-h-[600px] max-h-[900px] overflow-hidden flex items-center">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 w-full">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="section-divider" />
          <span className="text-xs tracking-[0.3em] uppercase text-[#c9a962]">
            Investment Categories
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-12">
          Property Types
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Main Carousel Content */}
          <div className="flex items-end justify-center gap-4 md:gap-8 lg:gap-12">
            {/* Previous Slide */}
            <div className="hidden md:block w-[140px] lg:w-[180px] xl:w-[220px] flex-shrink-0">
              <div className="relative aspect-[4/5] overflow-hidden opacity-60">
                <Image
                  src={prevType.image}
                  alt={prevType.name}
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              {/* Previous Title & Description - Always Visible */}
              <div className="mt-3">
                <h3 className="font-display text-lg lg:text-xl text-white/50 italic">
                  {prevType.name}
                </h3>
                <p className="text-xs text-white/30 mt-1 line-clamp-2">
                  {prevType.description}
                </p>
              </div>
            </div>

            {/* Navigation Button - Left */}
            <button
              onClick={goToPrev}
              className="carousel-btn absolute left-2 md:relative z-20 flex-shrink-0"
              aria-label="Previous property type"
            >
              <ChevronLeft />
            </button>

            {/* Current Slide (Center) */}
            <div className="w-full max-w-[280px] md:max-w-[300px] lg:max-w-[340px] flex-shrink-0">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={currentType.image}
                  alt={currentType.name}
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 768px) 280px, 340px"
                  priority
                />
              </div>

              {/* Title and Description with flip animation - grouped together */}
              <div className="mt-4 h-[80px] md:h-[75px] overflow-hidden perspective-[1000px]">
                <div
                  className={`transition-all duration-400 transform-gpu ${
                    isAnimating
                      ? direction === "next"
                        ? "-translate-y-full rotateX-90 opacity-0"
                        : "translate-y-full rotateX-90-neg opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isAnimating
                      ? direction === "next"
                        ? "translateY(-100%) rotateX(90deg)"
                        : "translateY(100%) rotateX(-90deg)"
                      : "translateY(0) rotateX(0deg)",
                    transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s ease",
                  }}
                >
                  <h3 className="font-display text-2xl md:text-3xl text-white italic text-center">
                    {currentType.name}
                  </h3>
                  <p className="text-sm text-white/60 text-center mt-2 line-clamp-2 px-4">
                    {currentType.description}
                  </p>
                </div>
              </div>

              {/* View Link */}
              <div className="text-center mt-3">
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
              className="carousel-btn absolute right-2 md:relative z-20 flex-shrink-0"
              aria-label="Next property type"
            >
              <ChevronRight />
            </button>

            {/* Next Slide */}
            <div className="hidden md:block w-[140px] lg:w-[180px] xl:w-[220px] flex-shrink-0">
              <div className="relative aspect-[4/5] overflow-hidden opacity-60">
                <Image
                  src={nextType.image}
                  alt={nextType.name}
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              {/* Next Title & Description - Always Visible */}
              <div className="mt-3">
                <h3 className="font-display text-lg lg:text-xl text-white/50 italic">
                  {nextType.name}
                </h3>
                <p className="text-xs text-white/30 mt-1 line-clamp-2">
                  {nextType.description}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
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
                  }, 400);
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
