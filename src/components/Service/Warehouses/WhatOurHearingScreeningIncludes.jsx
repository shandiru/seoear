import { CircleCheck } from "lucide-react";

const WhatOurHearingScreeningIncludes = () => {
  return (
    <section className="py-16 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8">
            What Our Hearing Screening Includes
          </h2>

          {/* List */}
          <div className="space-y-4">

            {/* Item 1 */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck
                className="w-6 h-6 flex-shrink-0 mt-1"
                style={{ color: "#43AA8B" }}
              />
              <div>
                <h3 className="font-semibold mb-1">
                  Noise-Exposure Questionnaire
                </h3>
                <p className="text-sm text-slate-500">
                  Understanding workplace noise exposure
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck
                className="w-6 h-6 flex-shrink-0 mt-1"
                style={{ color: "#43AA8B" }}
              />
              <div>
                <h3 className="font-semibold mb-1">
                  Ear Health Inspection
                </h3>
                <p className="text-sm text-slate-500">
                  Professional otoscopic examination
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck
                className="w-6 h-6 flex-shrink-0 mt-1"
                style={{ color: "#43AA8B" }}
              />
              <div>
                <h3 className="font-semibold mb-1">
                  Audiometric Hearing Test
                </h3>
                <p className="text-sm text-slate-500">
                  Comprehensive hearing assessment
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck
                className="w-6 h-6 flex-shrink-0 mt-1"
                style={{ color: "#43AA8B" }}
              />
              <div>
                <h3 className="font-semibold mb-1">
                  Confidential Employee Results
                </h3>
                <p className="text-sm text-slate-500">
                  Private results for each worker
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck
                className="w-6 h-6 flex-shrink-0 mt-1"
                style={{ color: "#43AA8B" }}
              />
              <div>
                <h3 className="font-semibold mb-1">
                  Employer Compliance Documentation
                </h3>
                <p className="text-sm text-slate-500">
                  Complete records for your business
                </p>
              </div>
            </div>

          </div>

          {/* Highlight Box */}
          <div
            className="mt-8 p-6 rounded-lg border"
            style={{
              backgroundColor: "rgba(67, 170, 139, 0.1)",
              borderColor: "rgba(67, 170, 139, 0.25)",
            }}
          >
            <p className="text-sm">
              Testing is{" "}
              <span className="font-semibold">
                efficient, discreet, and designed to work around shift patterns.
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatOurHearingScreeningIncludes;
