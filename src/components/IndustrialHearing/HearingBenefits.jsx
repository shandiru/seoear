import { Shield, FileText, CircleCheck, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    iconBg: "bg-[#43AA8B]/10",
    iconColor: "text-[#43AA8B]",
    title: "Protect Employee Health",
    description:
      "Early detection prevents irreversible hearing damage from workplace noise exposure.",
  },
  {
    icon: FileText,
    iconBg: "bg-[#43AA8B]/10",
    iconColor: "text-[#43AA8B]",
    title: "Meet Legal Obligations",
    description:
      "Comply with The Control of Noise at Work Regulations 2005 requirements.",
  },
  {
    icon: CircleCheck,
    iconBg: "bg-[#43AA8B]/10",
    iconColor: "text-[#43AA8B]",
    title: "Reduce Risk & Liability",
    description:
      "Demonstrate duty of care and reduce risk of claims or enforcement action.",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-[#43AA8B]/10",
    iconColor: "text-[#43AA8B]",
    title: "Improve Productivity",
    description:
      "Healthy hearing ensures better communication and safer, more effective work.",
  },
];

export default function HearingBenefits() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card text-card-foreground flex flex-col rounded-xl shadow-sm p-6 border-gray-200 border-2 hover:border-[#43AA8B] transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-full ${benefit.iconBg} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
