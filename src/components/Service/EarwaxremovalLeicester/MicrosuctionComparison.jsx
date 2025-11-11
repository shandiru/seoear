"use client";
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
            There’s no messy ear syringing in Leicester — just expert, friendly
            care that fits around your schedule.
          </p>
        </div>

        {/* Grid of Service Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Professional Microsuction",
              description:
                "Safe, effective ear wax removal using advanced medical equipment for clear results.",
              iconColor: "#43AA8B",
            },
            {
              title: "Fully Mobile Service",
              description:
                "We bring our clinic to you — enjoy comfortable, at-home treatment across Leicester.",
              iconColor: "#43AA8B",
            },
            {
              title: "Skilled & Polite Clinicians",
              description:
                "Experienced professionals who ensure your comfort and confidence throughout your visit.",
              iconColor: "#43AA8B",
            },
            {
              title: "Fast Results & Lasting Comfort",
              description:
                "Enjoy clearer hearing in minutes with treatment designed for immediate relief.",
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
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
          </div>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            There’s no messy ear syringing in Leicester, just expert, friendly care that fits around your schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
