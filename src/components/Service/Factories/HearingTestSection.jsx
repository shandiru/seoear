import React from "react";
import { HashLink } from "react-router-hash-link";

const BRAND_GREEN = "#43AA8B";

const HearingTestSection = () => {
  // Smooth scroll function with offset for sticky navbar
  const enhancedScroll = (el) => {
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-20"
      style={{
        background: `linear-gradient(to bottom right, ${BRAND_GREEN}, ${BRAND_GREEN})`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 text-balance">
          Book Industrial Hearing Tests for Your Factory
        </h2>
        <p className="text-xl text-white max-w-2xl mx-auto mb-10 text-pretty">
          Protect your workforce and stay compliant with professional on-site hearing
          screening for factories and manufacturing plants.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Primary CTA - Call Now */}
          <a
            href="tel:+448081371961"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all h-10 rounded-md text-lg px-10"
            style={{
              backgroundColor: "#ffffff",
              color: BRAND_GREEN,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND_GREEN, e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffffff", e.currentTarget.style.color = BRAND_GREEN)}
          >
            Book a Site Visit Today
          </a>

          {/* Secondary CTA - Scroll to Contact */}
          <HashLink
            to="/#contact"
            scroll={enhancedScroll}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all h-10 rounded-md text-lg px-10"
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              border: `1px solid #ffffff`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${BRAND_GREEN}33`)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Request a Tailored Quotation
          </HashLink>

        </div>
      </div>
    </section>
  );
};

export default HearingTestSection;
