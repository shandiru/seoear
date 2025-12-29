import React from "react";
import { CircleCheck } from "lucide-react";

const BRAND_GREEN = "#43AA8B";

const OnSiteHearingTests = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <h2 className="text-3xl font-bold mb-8">
            What Our On-Site Hearing Tests Include
          </h2>

          {/* List */}
          <div className="space-y-4">

            {[
              {
                title: "Noise Exposure Questionnaire",
                description: "For each employee",
              },
              {
                title: "Otoscopic Ear Health Check",
                description: "Visual inspection of ear canal",
              },
              {
                title: "Calibrated Audiometry Hearing Test",
                description: "Professional grade equipment",
              },
              {
                title: "Immediate Pass / Refer Results",
                description: "Clear outcomes on the day",
              },
              {
                title: "Employer Summary Report",
                description: "For compliance records",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{ backgroundColor: "#f9f9f9" }}
              >
                <CircleCheck
                  className="w-6 h-6 flex-shrink-0 mt-1"
                  style={{ color: BRAND_GREEN }}
                />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}

          </div>

          {/* Highlight Box */}
          <div
            className="mt-8 p-6 rounded-lg"
            style={{
              backgroundColor: `${BRAND_GREEN}20`,
              border: `1px solid ${BRAND_GREEN}40`,
            }}
          >
            <p
              className="text-sm text-center"
              style={{ color: "#333333" }}
            >
              Tests take{" "}
              <span style={{ fontWeight: "600", color: BRAND_GREEN }}>
                10–15 minutes per employee
              </span>
              , allowing production to continue with minimal disruption.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OnSiteHearingTests;
