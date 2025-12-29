import {
  Truck,
  Bell,
  Shield,
  FileText,
} from "lucide-react";

const BRAND_GREEN = "#43AA8B";

const WhyHearingScreeningWarehousing = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Hearing Screening Is Important in Warehousing
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Card 1 */}
          <div className="flex flex-col gap-6 rounded-xl p-6 border shadow-sm" style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}>
            <Truck className="w-10 h-10" style={{ color: BRAND_GREEN }} />
            <div>
              <h3 className="font-semibold mb-2">Background Noise</h3>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Constant background noise from forklifts and machinery
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-6 rounded-xl p-6 border shadow-sm" style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}>
            <Bell className="w-10 h-10" style={{ color: BRAND_GREEN }} />
            <div>
              <h3 className="font-semibold mb-2">Safety Critical</h3>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Clear hearing is critical for safety signals and alarms
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-6 rounded-xl p-6 border shadow-sm" style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}>
            <Shield className="w-10 h-10" style={{ color: BRAND_GREEN }} />
            <div>
              <h3 className="font-semibold mb-2">Accident Prevention</h3>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Prevents accidents caused by reduced awareness
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-6 rounded-xl p-6 border shadow-sm" style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}>
            <FileText className="w-10 h-10" style={{ color: BRAND_GREEN }} />
            <div>
              <h3 className="font-semibold mb-2">Proactive Surveillance</h3>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Supports proactive health surveillance programmes
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyHearingScreeningWarehousing;
