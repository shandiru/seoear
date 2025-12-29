import { CircleCheck } from "lucide-react";

const BRAND_GREEN = "#43AA8B";

const WhatHappensDuringTest = () => {
  return (
    <section className="py-16 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8">
            What Happens During the Test
          </h2>

          {/* Steps */}
          <div className="space-y-4">

            {/* Item 1 */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck
                className="w-6 h-6 flex-shrink-0 mt-1"
                style={{ color: BRAND_GREEN }}
              />
              <div>
                <h3 className="font-semibold mb-1">
                  Noise-Exposure and PPE Usage Questionnaire
                </h3>
                <p className="text-sm text-slate-500">
                  Understanding exposure history and protective equipment use
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck
                className="w-6 h-6 flex-shrink-0 mt-1"
                style={{ color: BRAND_GREEN }}
              />
              <div>
                <h3 className="font-semibold mb-1">
                  Ear Canal Inspection
                </h3>
                <p className="text-sm text-slate-500">
                  Visual check for blockages or conditions
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck
                className="w-6 h-6 flex-shrink-0 mt-1"
                style={{ color: BRAND_GREEN }}
              />
              <div>
                <h3 className="font-semibold mb-1">
                  Audiometric Hearing Assessment
                </h3>
                <p className="text-sm text-slate-500">
                  Comprehensive hearing level testing
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck
                className="w-6 h-6 flex-shrink-0 mt-1"
                style={{ color: BRAND_GREEN }}
              />
              <div>
                <h3 className="font-semibold mb-1">
                  Immediate Results with Guidance
                </h3>
                <p className="text-sm text-slate-500">
                  Clear next-step guidance provided on-site
                </p>
              </div>
            </div>

          </div>

          {/* Highlight Box */}
          <div
            className="mt-8 p-6 border rounded-lg"
            style={{
              backgroundColor: "rgba(67,170,139,0.1)",
              borderColor: "rgba(67,170,139,0.2)",
            }}
          >
            <p className="text-sm">
              All testing is carried out using{" "}
              <span className="font-semibold">
                portable, calibrated equipment suitable for site conditions.
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatHappensDuringTest;
