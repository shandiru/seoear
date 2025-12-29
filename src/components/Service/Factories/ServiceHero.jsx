import React from "react";
import { ArrowLeft, Factory } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const ServiceHero = () => {
  // Function to handle smooth scroll with offset
  const enhancedScroll = (el) => {
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('/industrial-factory-workers-wearing-safety-equipmen.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
        
        {/* Back Button */}
        <a
          href="/industrial"
          style={{ color: "#43AA8B" }}
          className="inline-flex items-center gap-3 mb-8 px-2 md:px-4 transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Services</span>
        </a>

        {/* Category Badge */}
        <div
          className="inline-flex items-center gap-3 rounded-full px-5 py-2 mb-8 border"
          style={{
            backgroundColor: "rgba(67, 170, 139, 0.1)",
            borderColor: "rgba(67, 170, 139, 0.25)",
          }}
        >
          <Factory
            className="w-5 h-5"
            style={{ color: "#43AA8B" }}
          />
          <span
            className="text-sm md:text-base font-medium"
            style={{ color: "#43AA8B" }}
          >
            Manufacturing &amp; Production
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Hearing Screening for Factories &amp; Manufacturing Plants
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-8">
          On-Site Workplace Hearing Tests for Manufacturing Environments
        </p>

        {/* CTA Button */}
        <HashLink
          to="/#contact"
          scroll={enhancedScroll}
          style={{ backgroundColor: "#43AA8B" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#368A75")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#43AA8B")
          }
          className="inline-flex items-center justify-center h-12 px-8 text-lg
            font-medium rounded-md text-white transition shadow-md"
        >
          Book a Site Visit Today
        </HashLink>

      </div>
    </section>
  );
};

export default ServiceHero;
