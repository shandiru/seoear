import React from "react";

const AuthorHeader = () => {
  return (
    <section className="bg-[#43AA8B] px-6 py-12 md:px-12 md:py-20 lg:px-24">
      {/* Container to keep content centered on very wide screens */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Text Content (Order 1 on Mobile) */}
        <div className="w-full md:w-3/5 text-center md:text-left order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Rab Newton
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-teal-100 mb-6">
            Founder & Ear Care Professional
          </p>
          <div className="w-20 h-1 bg-white/30 mb-6 mx-auto md:mx-0 rounded-full"></div>
          <p className="text-white/95 text-lg md:text-xl leading-relaxed max-w-2xl">
            Rab Newton is a professional ear care specialist with over ten years of hands-on experience. 
            He established <span className="font-bold text-white">EarWeGo</span> to provide safe, 
            professional home-visit ear wax removal for those who need expert care in the comfort of their own home.
          </p>
        </div>

        {/* Right Side: Image (Order 2 on Mobile) */}
        <div className="w-full md:w-2/5 flex justify-center order-2">
          <div className="relative">
            {/* Decorative background shape for Desktop */}
            <div className="absolute -inset-4 bg-white/10 rounded-3xl rotate-3 hidden md:block"></div>
            
            <img
              src="/img-right.webp" 
              alt="Rab Newton - Ear Care Specialist"
              loading="lazy"
              className="relative w-full max-w-[280px] md:max-w-sm rounded-2xl shadow-2xl object-cover border-4 border-white/40 transform md:-rotate-2 transition-transform hover:rotate-0 duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuthorHeader;