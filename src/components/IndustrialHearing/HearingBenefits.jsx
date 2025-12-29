import {
  Shield,
  FileText,
  CircleCheck,
  TrendingUp,
} from "lucide-react";

export default function HearingBenefits() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1 */}
          <div className="bg-card text-card-foreground flex flex-col rounded-xl shadow-sm p-6 border-2 hover:border-emerald-500 transition-colors">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Protect Employee Health
            </h3>
            <p className="text-sm text-muted-foreground">
              Early detection prevents irreversible hearing damage from
              workplace noise exposure.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-card text-card-foreground flex flex-col rounded-xl shadow-sm p-6 border-2 hover:border-emerald-500 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Meet Legal Obligations
            </h3>
            <p className="text-sm text-muted-foreground">
              Comply with The Control of Noise at Work Regulations 2005
              requirements.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-card text-card-foreground flex flex-col rounded-xl shadow-sm p-6 border-2 hover:border-emerald-500 transition-colors">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
              <CircleCheck className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Reduce Risk &amp; Liability
            </h3>
            <p className="text-sm text-muted-foreground">
              Demonstrate duty of care and reduce risk of claims or
              enforcement action.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-card text-card-foreground flex flex-col rounded-xl shadow-sm p-6 border-2 hover:border-emerald-500 transition-colors">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Improve Productivity
            </h3>
            <p className="text-sm text-muted-foreground">
              Healthy hearing ensures better communication and safer,
              more effective work.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
