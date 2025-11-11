"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WhyChooseCarousel() {
  const benefits = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#43AA8B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        </svg>
      ),
      title: "Convenience",
      description:
        "Home visits across Lincoln and nearby areas — no need to travel or wait in clinics.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#43AA8B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Professionalism",
      description:
        "Trained, well-equipped clinicians providing expert ear care with precision and care.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#43AA8B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Comfort",
      description:
        "A calm, reassuring experience with clear communication and a gentle touch throughout.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#43AA8B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
      title: "Safety",
      description:
        "Gentle, hygienic microsuction methods trusted by clients across Lincolnshire.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[linear-gradient(to_bottom,#F8FAFC,white,#EAF7F3)]">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1525] mb-4 font-serif">
          Why Choose <span className="text-[#43AA8B]">EarWeGo</span>?
        </h2>
        <p className="text-lg md:text-xl text-[#334155] max-w-3xl mx-auto mb-10">
          We’re proud to bring safe, comfortable, and professional ear wax removal
          services directly to your home in Lincoln and surrounding areas.
        </p>

        {/* Carousel */}
        <div className="relative max-w-xl mx-auto">
          {/* Swiper Arrows */}
          <button
            className="swiper-button-prev inline-flex items-center justify-center gap-2 text-sm font-medium transition-all border border-[#43AA8B]/40 shadow-xs hover:bg-[#43AA8B] hover:text-white size-9 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 rounded-full bg-transparent text-[#43AA8B]"
            aria-label="Previous benefit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left w-5 h-5"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>

          <button
            className="swiper-button-next inline-flex items-center justify-center gap-2 text-sm font-medium transition-all border border-[#43AA8B]/40 shadow-xs hover:bg-[#43AA8B] hover:text-white size-9 absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 rounded-full bg-transparent text-[#43AA8B]"
            aria-label="Next benefit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right w-5 h-5"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            className="pb-10"
          >
            {benefits.map((benefit, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-[#43AA8B]/20 rounded-xl shadow-sm p-10 flex flex-col items-center text-center hover:shadow-[0_0_25px_#43AA8B22] transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#43AA8B]/10 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold text-xl text-[#0D1525] mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-[#4B5563] leading-relaxed text-base max-w-xs">
                    {benefit.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
