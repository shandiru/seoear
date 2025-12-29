import { CircleCheck } from "lucide-react";

const WhatOurHearingScreeningIncludes = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8">
            What Our Hearing Screening Includes
          </h2>

          {/* List */}
          <div className="space-y-4">

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">
                  Noise-Exposure Questionnaire
                </h3>
                <p className="text-sm text-muted-foreground">
                  Understanding workplace noise exposure
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">
                  Ear Health Inspection
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional otoscopic examination
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">
                  Audiometric Hearing Test
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive hearing assessment
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">
                  Confidential Employee Results
                </h3>
                <p className="text-sm text-muted-foreground">
                  Private results for each worker
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]">
              <CircleCheck className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">
                  Employer Compliance Documentation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Complete records for your business
                </p>
              </div>
            </div>

          </div>

          {/* Highlight Box */}
          <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
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
