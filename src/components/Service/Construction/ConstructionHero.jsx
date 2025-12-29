import React from "react";
import { ArrowLeft, Construction } from "lucide-react";

const ConstructionHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('/construction-site-workers-wearing-safety-equipment.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900 via-amber-900/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
        
        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center gap-3 text-amber-300 hover:text-amber-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5 " />
          <span>Back to Services</span>
        </a>

        {/* Category Badge */}
        <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2 mb-8">
          <Construction className="w-5 h-5 text-amber-300" />
          <span className="text-sm md:text-base font-medium text-amber-300">
            Construction &amp; Civil Engineering
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          Hearing Screening for Construction Sites
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-amber-50 max-w-3xl mb-8 text-pretty">
          On-Site Hearing Testing for Construction &amp; Civil Engineering Projects
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center justify-center h-10 px-8 text-lg font-medium rounded-md bg-amber-500 hover:bg-amber-600 text-white transition">
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default ConstructionHero;
