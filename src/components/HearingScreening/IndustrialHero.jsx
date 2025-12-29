import { ArrowLeft, Factory } from "lucide-react";

export default function IndustrialHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/industrial-processing-plant-heavy-industry.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center sm:text-left">
        {/* Back link */}
        <a
          href="/industrial"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 mb-6 text-sm px-5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </a>

        {/* Category tag */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
          <Factory className="w-4 h-4 text-purple-300" />
          <span className="text-sm font-medium text-purple-300">
            Heavy Industry & Processing
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Hearing Screening for Industrial Plants & Processing Facilities
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-purple-50 max-w-3xl mx-auto sm:mx-0 mb-8 text-pretty">
          Large-Scale Hearing Surveillance for Heavy Industry
        </p>

        {/* CTA Button */}
        <button className="h-10 sm:h-12 px-6 sm:px-8 md:px-10 rounded-md bg-purple-500 hover:bg-purple-600 text-white text-base sm:text-lg font-medium transition focus:outline-none focus:ring-4 focus:ring-purple-400/40">
          Contact Us Today
        </button>
      </div>
    </section>
  );
}
