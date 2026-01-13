import { Volume2 } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function IndustrialHearingHero() {
  const scrollWithOffset = (el) => {
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100; // adjust offset
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
            "url('/industrial-factory-workers-wearing-safety-equipmen.webp')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#43AA8B]/10 border border-[#43AA8B]/20 rounded-full px-4 py-2 mb-6">
          <Volume2 className="w-4 h-4 text-[#43AA8B]" />
          <span className="text-sm font-medium text-[#43AA8B]">
            Workplace Health Surveillance
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Industrial Hearing Screening Tests
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
          Protecting your workforce's hearing isn't just good practice — it's a
          legal and moral responsibility.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <HashLink
            to="/#contact"
            scroll={scrollWithOffset}
            className="px-8 py-3 text-lg font-medium rounded-md bg-[#43AA8B] text-white hover:bg-emerald-600 transition"
          >
            Book On-Site Testing
          </HashLink>

          <HashLink
            to="#learn"
            scroll={scrollWithOffset}
            className="px-8 py-3 text-lg font-medium rounded-md border border-white/20 text-white hover:bg-white/10 transition">
            Learn More
          </HashLink>
        </div>
      </div>
    </section>
  );
}
