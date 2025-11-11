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
      title: "Convenience",
      description:
        "Home visits across Chesterfield and nearby villages — we come to you for safe, stress-free ear care.",
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
          <path d="M21 10V6a2 2 0 0 0-2-2h-5.586a1 1 0 0 1-.707-.293l-1.414-1.414A1 1 0 0 0 10.586 2H5a2 2 0 0 0-2 2v6"></path>
          <path d="M3 14v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4"></path>
          <path d="M8 10h8"></path>
        </svg>
      ),
    },
    {
      title: "Professionalism",
      description:
        "Trained clinicians use medical-grade equipment and proven techniques for reliable results every time.",
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
          <circle cx="12" cy="7" r="4"></circle>
          <path d="M6 21v-2a6 6 0 0 1 12 0v2"></path>
        </svg>
      ),
    },
    {
      title: "Comfort",
      description:
        "We ensure clear communication and a calm, polite service so you feel relaxed throughout your appointment.",
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
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "Safety",
      description:
        "We use the trusted microsuction technique across Derbyshire — safe, clean, and highly effective.",
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
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
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
          Our mission is to make ear wax removal in Chesterfield as safe,
          convenient, and comfortable as possible — right from your own home.
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
