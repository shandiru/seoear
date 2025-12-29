import {
  Truck,
  Bell,
  Shield,
  FileText,
} from "lucide-react";

const WhyHearingScreeningWarehousing = () => {
  return (
    <section className="py-16 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Hearing Screening Is Important in Warehousing
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white flex flex-col gap-6 rounded-xl p-6 border border-gray-200 shadow-sm">
            <Truck className="w-10 h-10 text-blue-500" />
            <div>
              <h3 className="font-semibold mb-2">Background Noise</h3>
              <p className="text-sm text-gray-500">
                Constant background noise from forklifts and machinery
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white flex flex-col gap-6 rounded-xl p-6 border border-gray-200 shadow-sm">
            <Bell className="w-10 h-10 text-amber-500" />
            <div>
              <h3 className="font-semibold mb-2">Safety Critical</h3>
              <p className="text-sm text-gray-500">
                Clear hearing is critical for safety signals and alarms
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white flex flex-col gap-6 rounded-xl p-6 border border-gray-200 shadow-sm">
            <Shield className="w-10 h-10 text-emerald-500" />
            <div>
              <h3 className="font-semibold mb-2">Accident Prevention</h3>
              <p className="text-sm text-gray-500">
                Prevents accidents caused by reduced awareness
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white flex flex-col gap-6 rounded-xl p-6 border border-gray-200 shadow-sm">
            <FileText className="w-10 h-10 text-purple-500" />
            <div>
              <h3 className="font-semibold mb-2">Proactive Surveillance</h3>
              <p className="text-sm text-gray-500">
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
