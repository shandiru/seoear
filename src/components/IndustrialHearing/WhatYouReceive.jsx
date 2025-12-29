import { CircleCheck } from "lucide-react";

export default function WhatYouReceive() {
  const items = [
    "On-site industrial hearing screening",
    "Fully trained screening professionals",
    "Clear pass / refer results",
    "Employer compliance documentation",
    "Confidential employee records",
    "Practical recommendations for noise control or PPE",
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            What You Receive
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Comprehensive service with full documentation
          </p>
        </div>

        {/* List */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg hover:bg-[rgba(0,0,0,0.03)] transition-colors"
            >
              <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#43AA8B] flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
