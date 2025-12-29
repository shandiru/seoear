import { Headphones, Users, CircleCheck, Wrench } from "lucide-react";

export default function HearingScreeningAudience() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/industrial-workers-team-in-safety-gear.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 sm:mb-12">
          Who Should Have Hearing Screening?
        </h2>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto mb-10 sm:mb-12">
          
          <AudienceCard
            icon={Headphones}
            text="Employees exposed to noise above 85 dB"
          />

          <AudienceCard
            icon={Users}
            text="New starters in noisy environments"
          />

          <AudienceCard
            icon={CircleCheck}
            text="Annual or periodic monitoring"
          />

          <AudienceCard
            icon={Wrench}
            text="Heavy machinery operators"
          />

        </div>

        {/* CTA Button */}
        <a
          href="tel:+448081371961"
          className="px-8 sm:px-10 py-2 text-base sm:text-lg font-medium rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition">
          Schedule Your Team&apos;s Screening
        </a>
      </div>
    </section>
  );
}

function AudienceCard({ icon: Icon, text }) {
  return (
    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 shadow-sm text-center">
      <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
      <p className="text-sm sm:text-base text-white">
        {text}
      </p>
    </div>
  );
}
