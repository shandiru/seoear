import { Volume2 } from "lucide-react";

export default function IndustrialHearingHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('/industrial-factory-workers-wearing-safety-equipmen.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
          <Volume2 className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">
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
          <button className="px-8 py-3 text-lg font-medium rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition">
            Book On-Site Testing
          </button>

          <button className="px-8 py-3 text-lg font-medium rounded-md border border-white/20 text-white hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
