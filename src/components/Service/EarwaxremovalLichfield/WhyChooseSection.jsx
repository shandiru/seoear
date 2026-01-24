 
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
          <path d="M3 12h18"></path>
          <path d="M3 6h18"></path>
          <path d="M3 18h18"></path>
        </svg>
      ),
      title: "Convenience",
      description:
        "Home visits across Lichfield and surrounding villages — professional ear care delivered at your door.",
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
          <path d="M12 8v4l2 2"></path>
        </svg>
      ),
      title: "Professionalism",
      description:
        "Experienced clinicians with a deep understanding of ear health to ensure safe and effective treatment.",
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
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      title: "Comfort",
      description:
        "Friendly service with clear explanations, keeping every appointment calm and reassuring.",
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
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Safety",
      description:
        "Proven microsuction technique ensures a clean, safe, and effective ear wax removal experience.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[linear-gradient(to_bottom,#F8FAFC,white,#EAF7F3)]">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1525] mb-4 font-serif">
          Why Choose <span className="text-[#43AA8B]">Earwego</span>?
        </h2>
        <p className="text-lg md:text-xl text-[#334155] max-w-3xl mx-auto mb-10">
          Professional ear care in Lichfield — convenient, comfortable, and safe home visits by experienced specialists.
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
              className="w-5 h-5"
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
              className="w-5 h-5"
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
