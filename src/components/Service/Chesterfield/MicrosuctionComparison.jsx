 
import React from "react";

export default function MicrosuctionComparison() {
  return (
    <section className="py-16 md:py-24 bg-[linear-gradient(to_bottom,#F8FAFC,white,#EAF7F3)]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1525] mb-4 font-serif">
            Professional Ear Wax Removal Made Simple
          </h2>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto">
            Our Chesterfield specialists provide:
          </p>
        </div>

        {/* Two-column list */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm hover:shadow-[0_0_20px_#9C79B333] transition-all duration-300">
            <ul className="space-y-3 text-[#4B5563]">
              {[
                "Safe microsuction performed at home",
                "Flexible appointment times",
                "Professional and friendly clinicians",
                "Fast, effective treatment",
                "No need to travel to a clinic — just reliable ear care where you feel most comfortable.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#43AA8B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column – Modern Microsuction Highlight */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#43AA8B] shadow-sm hover:shadow-[0_0_25px_#43AA8B33] transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#43AA8B] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0D1525]">
                Modern Microsuction
              </h3>
            </div>

            <ul className="space-y-3 text-[#334155]">
              {[
                "Performed with precision medical equipment",
                "No water used — clean and infection-free",
                "Quick, comfortable, and mess-free process",
                "Carried out by qualified clinicians in your home",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#43AA8B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
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
            <strong>Microsuction</strong> is the safest and most effective method
            for ear wax removal, recommended by hearing professionals across the
            UK. Our Chesterfield team provides quick, comfortable home treatments
            with immediate results — no travel, no waiting rooms, just expert care
            where you feel most at ease.
          </p>
        </div>
      </div>
    </section>
  );
}
