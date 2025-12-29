import {
  TriangleAlert,
  Shield,
  FileText,
  HardHat,
  CheckCircle
} from "lucide-react";

const BRAND_GREEN = "#43AA8B";

const HearingScreeningSection = () => {
  return (
    <section className="py-16 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Hearing Screening Matters on Construction Sites
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Card */}
          <div className="bg-white flex flex-col gap-6 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
            <TriangleAlert className="w-10 h-10" style={{ color: BRAND_GREEN }} />
            <div>
              <h3 className="font-semibold mb-2">Exceeds Safe Limits</h3>
              <p className="text-sm text-gray-500">
                Power tools and plant regularly exceed safe noise limits
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-col gap-6 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
            <Shield className="w-10 h-10" style={{ color: BRAND_GREEN }} />
            <div>
              <h3 className="font-semibold mb-2">Safety Critical</h3>
              <p className="text-sm text-gray-500">
                Hearing loss increases accident risk and miscommunication
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-col gap-6 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
            <FileText className="w-10 h-10" style={{ color: BRAND_GREEN }} />
            <div>
              <h3 className="font-semibold mb-2">HSE Compliance</h3>
              <p className="text-sm text-gray-500">
                Demonstrates compliance during HSE inspections
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-col gap-6 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
            <HardHat className="w-10 h-10" style={{ color: BRAND_GREEN }} />
            <div>
              <h3 className="font-semibold mb-2">Safety-Critical Roles</h3>
              <p className="text-sm text-gray-500">
                Protects workers in safety-critical roles
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-col gap-6 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
            <CheckCircle className="w-10 h-10" style={{ color: BRAND_GREEN }} />
            <div>
              <h3 className="font-semibold mb-2">Insurance & Audits</h3>
              <p className="text-sm text-gray-500">
                Supports insurance and audit requirements
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HearingScreeningSection;
