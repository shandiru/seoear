import React from "react";
import {
  Shield,
  Clock,
  CircleCheck,
  FileText,
  HardHat,
} from "lucide-react";

const WhyHearingScreening = () => {
  return (
    <section className="py-20 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Why Hearing Screening Is Essential in Manufacturing
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <Shield
              className="w-10 h-10 mb-6"
              style={{ color: "#43AA8B" }}
            />
            <h3 className="font-semibold text-lg mb-3">
              Continuous Noise Exposure
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Continuous noise exposure from machinery and equipment
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <Clock
              className="w-10 h-10 mb-6"
              style={{ color: "#43AA8B" }}
            />
            <h3 className="font-semibold text-lg mb-3">
              Long Shift Impact
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Long shifts increase cumulative hearing damage
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <CircleCheck
              className="w-10 h-10 mb-6"
              style={{ color: "#43AA8B" }}
            />
            <h3 className="font-semibold text-lg mb-3">
              Early Detection
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Early detection prevents irreversible hearing loss
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <FileText
              className="w-10 h-10 mb-6"
              style={{ color: "#43AA8B" }}
            />
            <h3 className="font-semibold text-lg mb-3">
              Legal Compliance
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Supports compliance with the Control of Noise at Work Regulations
              2005
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <HardHat
              className="w-10 h-10 mb-6"
              style={{ color: "#43AA8B" }}
            />
            <h3 className="font-semibold text-lg mb-3">
              Duty of Care
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Demonstrates employer duty of care
            </p>
          </div>

          {/* Highlight Card */}
          <div
            className="rounded-2xl p-8 shadow-sm flex flex-col justify-center border"
            style={{
              backgroundColor: "rgba(67, 170, 139, 0.1)",
              borderColor: "rgba(67, 170, 139, 0.25)",
            }}
          >
            <div
              className="text-5xl font-bold mb-4"
              style={{ color: "#43AA8B" }}
            >
              10–15
            </div>
            <p className="text-gray-600 text-sm">
              Minutes per employee
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyHearingScreening;
