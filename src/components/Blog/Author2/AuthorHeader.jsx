import React from "react";

const AuthorHeader = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-16  py-12 bg-[#43AA8B]">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Yvonne Keal
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Yvonne is a Product Management specialist with over 20 years’ experience in the interiors industry. Since joining Hillargus in 2003, Yvonne has successfully launched many window dressing collections, including Roller blinds, Vertical blinds, Roman blinds, curtains and Voiles. She is passionate about improving the sustainability of our products, by continually improving the materials we use. Yvonne provides practical advice to help our customers better understand which styles are best for their windows.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/6b1f2173-bda5-4942-913e-9d1d8c95a663.png"
          alt="Yvonne Keal"
          className="w-full max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default AuthorHeader;