import React from "react";
import { HashLink } from "react-router-hash-link";

const HearingTestSection = () => {
  // Smooth scroll function with offset for sticky navbar
  const enhancedScroll = (el) => {
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 text-balance">
          Book Industrial Hearing Tests for Your Factory
        </h2>
        <p className="text-xl text-emerald-50 max-w-2xl mx-auto mb-10 text-pretty">
          Protect your workforce and stay compliant with professional on-site hearing
          screening for factories and manufacturing plants.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* Primary CTA - Call Now */}
          <a
            href="tel:+448081371961"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50
              [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0
              outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
              aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
              h-10 rounded-md has-[>svg]:px-4 bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-10"
          >
            Book a Site Visit Today
          </a>

          {/* Secondary CTA - Scroll to Contact */}
          <HashLink
            to="/#contact"
            scroll={enhancedScroll}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50
              [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0
              outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
              aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
              border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50
              h-10 rounded-md has-[>svg]:px-4 border-white text-white hover:bg-white/10 text-lg px-10 bg-transparent"
          >
            Request a Tailored Quotation
          </HashLink>

        </div>
      </div>
    </section>
  );
};

export default HearingTestSection;
