import { Settings, Activity, Shield, FileText } from "lucide-react";

export default function WorkshopHearingImportance() {
  const cards = [
    {
      icon: Settings,
      color: "text-emerald-500",
      title: "Mechanical Noise Exposure",
      desc: "Prolonged exposure to mechanical noise",
    },
    {
      icon: Activity,
      color: "text-blue-500",
      title: "Diagnostic Essential",
      desc: "Hearing is essential for diagnostics and safety",
    },
    {
      icon: Shield,
      color: "text-amber-500",
      title: "Protect Skilled Workers",
      desc: "Protects long-term skilled employees",
    },
    {
      icon: FileText,
      color: "text-purple-500",
      title: "Compliance Support",
      desc: "Supports insurance and compliance requirements",
    },
  ];

  return (
    <section className="py-16 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Hearing Screening Matters in Workshops
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm p-6 border-2 border-gray-200 hover:border-emerald-500 transition-colors"
              >
                <Icon className={`w-10 h-10 ${card.color} mb-4`} />
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
