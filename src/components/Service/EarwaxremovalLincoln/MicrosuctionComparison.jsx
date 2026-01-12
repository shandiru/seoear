 
import React from "react";

export default function EarwegoServiceOverview() {
  return (
    <section className="py-16 md:py-24 bg-[linear-gradient(to_bottom,#F8FAFC,white,#EAF7F3)]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1525] mb-4 font-serif">
            Professional Ear Wax Removal Made Simple
          </h2>
          <p className="text-lg md:text-xl text-[#334155] max-w-3xl mx-auto">
            There’s no messy ear syringing in Lincoln — just expert, friendly
            care that fits around your schedule.
          </p>
        </div>

        {/* Grid of Service Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Safe Home Treatment",
              description:
                "Gentle, effective microsuction performed in the comfort of your home — no clinic visit needed.",
              iconColor: "#43AA8B",
            },
            {
              title: "Flexible Appointments",
              description:
                "We arrange visits at a time that suits your schedule for complete convenience and ease.",
              iconColor: "#43AA8B",
            },
            {
              title: "Experienced Clinicians",
              description:
                "Qualified professionals with the right skills and equipment to deliver reliable ear care.",
              iconColor: "#43AA8B",
            },
            {
              title: "Quick Relief & Clear Results",
              description:
                "Enjoy clearer hearing and comfort immediately after your treatment — results you can feel.",
              iconColor: "#43AA8B",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm hover:shadow-[0_0_25px_#43AA8B22] transition-all duration-300 text-center"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: `${item.iconColor}15` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={item.iconColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0D1525] mb-3">
                {item.title}
              </h3>
              <p className="text-[#4B5563] leading-relaxed text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="bg-[linear-gradient(to_right,#43AA8B,#9C79B3)] rounded-2xl p-10 text-center text-white shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
          </div>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            There’s no messy ear cleaning in Lincoln clinics or travel required, just expert care where you’re most comfortable.
          </p>
        </div>
      </div>
    </section>
  );
}
