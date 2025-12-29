import React from "react";
import { CircleCheck } from "lucide-react";

const OnSiteHearingTests = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <h2 className="text-3xl font-bold mb-8">
            What Our On-Site Hearing Tests Include
          </h2>

          {/* List */}
          <div className="space-y-4">

            {/* Item */}
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <CircleCheck className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">
                  Noise Exposure Questionnaire
                </h3>
                <p className="text-gray-600 text-sm">
                  For each employee
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <CircleCheck className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">
                  Otoscopic Ear Health Check
                </h3>
                <p className="text-gray-600 text-sm">
                  Visual inspection of ear canal
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <CircleCheck className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">
                  Calibrated Audiometry Hearing Test
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional grade equipment
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <CircleCheck className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">
                  Immediate Pass / Refer Results
                </h3>
                <p className="text-gray-600 text-sm">
                  Clear outcomes on the day
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
              <CircleCheck className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">
                  Employer Summary Report
                </h3>
                <p className="text-gray-600 text-sm">
                  For compliance records
                </p>
              </div>
            </div>

          </div>

          {/* Highlight Box */}
          <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-sm text-center text-gray-700">
              Tests take{" "}
              <span className="font-semibold text-emerald-600">
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
