import { ArrowLeft, Settings } from "lucide-react";

export default function AutomotiveHearingScreening() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/automotive-workshop-mechanics-engineering.jpg')] bg-cover bg-center opacity-20"></div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center md:text-left">
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
          <Settings className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">
            Automotive &amp; Engineering
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          Hearing Screening for Automotive &amp; Engineering Workshops
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-8 text-pretty">
          Hearing Tests for Mechanical &amp; Engineering Workplaces
        </p>

        {/* Button */}
        <div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 focus:outline-none focus-visible:ring-3 focus-visible:ring-emerald-400">
            Request a Quote Today
          </button>
        </div>
      </div>
    </section>
  );
}
