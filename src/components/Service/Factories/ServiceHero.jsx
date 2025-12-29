import React from "react";
import { ArrowLeft, Factory } from "lucide-react";

const ServiceHero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      
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
          className="inline-flex items-center gap-3 text-emerald-400 hover:text-emerald-300 mb-8 px-2 md:px-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Services</span>
        </a>

        {/* Category Badge */}
        <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 mb-8">
          <Factory className="w-5 h-5 text-emerald-400" />
          <span className="text-sm md:text-base font-medium text-emerald-400">
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
        <button className="inline-flex items-center justify-center h-12 px-8 text-lg font-medium rounded-md bg-emerald-500 hover:bg-emerald-600 text-white transition">
          Book a Site Visit Today
        </button>
      </div>
    </section>
  );
};

export default ServiceHero;
