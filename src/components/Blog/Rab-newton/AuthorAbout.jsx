import React from "react";

const AuthorAbout = () => {
  return (
    /* Changed px-16 to px-6 (mobile) and md:px-16 (desktop) */
    <div className="px-6 py-10 md:px-20 md:py-12 bg-white rounded-xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
      
      {/* Left Content */}
      <div className="flex-1 w-full space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Professional Experience & Approach
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Rab has worked with thousands of clients across the Midlands, supporting people of all ages, including hearing aid users and those dealing with recurring blockages. His experience comes from daily, practical work rather than theory, giving him a clear understanding of when ear wax needs professional attention.
          </p>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#43AA8B]">
          <p className="text-gray-700 italic">
            "Clients often describe Rab as calm, patient, and reassuring. He takes time to explain each step of the process and understands that many people feel nervous before an ear procedure."
          </p>
          <p className="text-sm text-gray-500 mt-2">— Building long-term trust through care</p>
        </div>

        <p className="text-gray-700">
          Unlike many founders, Rab remains actively involved in appointments and service delivery. This allows him to stay closely connected to client needs and ensures EarWeGo’s standards are shaped by real experiences.
        </p>

        <div className="space-y-3">
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Family Business:</span> Rab works alongside his son as part of the family-run EarWeGo team, sharing a commitment to professional care, clear advice, and patient comfort.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Education:</span> He also contributes to EarWeGo’s educational content, helping readers understand ear wax build-up, prevention, and when to seek professional support.
          </p>
        </div>

        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">Expertise:</span>{" "}
          <span className="text-[#43AA8B] font-medium">Ear Wax Removal</span>,{" "}
          <span className="text-[#43AA8B] font-medium">Home Care</span>,{" "}
          <span className="text-[#43AA8B] font-medium">Patient Education</span>
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:flex-1">
        <img
          src="/img-right.webp" 
          alt="EarWeGo Professional Service"
          loading="lazy"
          className="rounded-lg w-full h-auto object-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default AuthorAbout;