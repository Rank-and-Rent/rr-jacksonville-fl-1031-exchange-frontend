"use client";

import { Suspense } from "react";
import Image from "next/image";
import Script from "next/script";
import ContactForm from "@/components/contact-form";

const ADDRESS = "200 W Forsyth St, Jacksonville, FL 32202";
const PHONE = {
  formatted: "(904) 664-9656",
  dial: "+19046649656",
};
const EMAIL = "exchange@1031exchangeofjacksonville.com";
const COMPANY_NAME = "1031 Exchange of Jacksonville";

function ContactPageContent() {
  return (
    <div className="luxury-page">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/locations/san-marco-1031-exchange.jpg"
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
              Get In Touch
            </span>
            <div className="section-divider" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f5f1eb] text-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight mb-8">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-[#1a1a1a]/70 leading-relaxed mb-12">
                Get in touch with our Jacksonville team to discuss your 1031 exchange property identification needs. We&apos;re here to help you navigate the process.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#c9a962] mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${PHONE.dial}`}
                    className="font-display text-2xl text-[#1a1a1a] hover:text-[#c9a962] transition-colors"
                  >
                    {PHONE.formatted}
                  </a>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#c9a962] mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-display text-xl text-[#1a1a1a] hover:text-[#c9a962] transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#c9a962] mb-2">
                    Hours
                  </p>
                  <p className="text-[#1a1a1a]/70">
                    24 hours a day, 7 days a week
                  </p>
                </div>

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#c9a962] mb-2">
                    Address
                  </p>
                  <p className="text-[#1a1a1a]/70">
                    {ADDRESS}
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <div className="aspect-[16/9] w-full rounded-sm overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${ADDRESS}`}
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-lg">
              <h3 className="font-display text-2xl font-light tracking-tight mb-6">
                Send Us a Message
              </h3>
              <ContactForm showTitle={false} className="!border-0 !shadow-none !p-0 !bg-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="luxury-page min-h-screen flex items-center justify-center"><p className="text-white/60">Loading...</p></div>}>
      <ContactPageContent />
      <Script id="contact-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Us",
          description: `Contact ${COMPANY_NAME} for property identification services`,
        })}
      </Script>
    </Suspense>
  );
}
