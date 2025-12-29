import { ArrowLeft, Warehouse } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const WarehouseLogisticsHero = () => {
  // Smooth scroll function with offset for sticky navbar
  const enhancedScroll = (el) => {
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/industrial-processing-plant-heavy-industry.jpg')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      />

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Back Link */}
        <a
          href="/industrial"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-6 px-5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </a>

        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
          <Warehouse className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">
            Heavy Industry & Processing
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          Hearing Screening for Industrial Plants & Processing Facilities
        </h1>

        {/* Subheading */}
        <p className="text-xl text-slate-300 max-w-3xl mb-8 text-pretty">
          Large-Scale Hearing Surveillance for Heavy Industry
        </p>

        {/* CTA Button */}
        <HashLink
          to="/#contact"
          scroll={enhancedScroll}
          className="inline-flex items-center justify-center h-12 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-medium px-8 transition"
        >
          Contact Us Today
        </HashLink>

      </div>
    </section>
  );
};

export default WarehouseLogisticsHero;
