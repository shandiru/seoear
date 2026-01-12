import React from "react";

const AuthorAbout = () => {
  return (
    <div className="px-16  py-12 bg-white rounded-xl flex flex-col md:flex-row items-center md:items-start gap-8">
      
      {/* Left Content */}
      <div className="flex-1 w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Product Management specialist
        </h2>

        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Expertise:</span>{" "}
          <a href="#" className="text-[#43AA8B] hover:underline">Blinds</a>,{" "}
          <a href="#" className="text-[#43AA8B] hover:underline">Shutters</a>,{" "}
          <a href="#" className="text-[#43AA8B] hover:underline">Curtains</a>, Outdoor Products, Sustainability
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Education:</span> HND Business Studies, Nottingham Trent University
        </p>

        <div className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Quoted in the press:</span>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Homes & Gardens:{" "}
              <a href="#" className="text-[#43AA8B] hover:underline">
                How to clean blinds: expert ways to make them pristine
              </a>
            </li>
            <li>
              Good Homes:{" "}
              <a href="#" className="text-[#43AA8B] hover:underline">
                Curtain and blind trends
              </a>
            </li>
            <li>
              Ideal Home:{" "}
              <a href="#" className="text-[#43AA8B] hover:underline">
                Bedroom Ideas for Renters
              </a>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Connect with Yvonne:</span>{" "}
          <a href="#" className="text-[#43AA8B] hover:underline">Yvonne Keal | LinkedIn</a>
        </p>
      </div>

      {/* Right Image */}
      <div className="flex-1 w-full md:w-1/2">
        <img
          src="/mnt/data/773cff88-0d62-4833-906d-9e628c3cb7c1.png"
          alt="Yvonne"
          className="rounded-lg w-full h-auto object-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default AuthorAbout;