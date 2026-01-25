import React from "react";

const AuthorHeader = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-16 py-12 bg-[#43AA8B]">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Rab Newton
        </h2>
        <p className="text-xl font-medium text-gray-800 mb-4">
          Founder and ear care professional at EarWeGo
        </p>
        <p className="text-gray-900 text-base md:text-lg leading-relaxed">
          Rab Newton is a professional ear care specialist with over ten years of hands-on experience in ear wax removal. He established EarWeGo to make safe, professional ear care more accessible by offering home visit appointments for adults who struggle with ear wax build-up.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/img-right.webp" 
          alt="Rab Newton"
          loading="lazy"
          className="w-full max-w-md rounded-lg shadow-lg object-cover border-4 border-white/20"
        />
      </div>
    </section>
  );
};

export default AuthorHeader;