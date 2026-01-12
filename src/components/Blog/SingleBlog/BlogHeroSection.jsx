import React from 'react';

const BlogHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Container for the split layout */}
      <div className="flex flex-col md:flex-row min-h-[500px]">
        
        {/* Left Side: Content Area */}
        <div 
          className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24"
          style={{ backgroundColor: '#43AA8B' }}
        >
          <div className="max-w-md w-full text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8">
              How to make your home a more sustainable space
            </h1>
            
            {/* Author Card */}
            <div className="flex items-center gap-4 mt-12">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                <img 
                  src="https://images.prismic.io/hillarys/Z-Lw3HdAxsiBv5Qk_hill_22_yvonne_ww-look-book_007-author-bio.jpg?auto=format%2Ccompress" 
                  alt="Yvonne Keal"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col text-sm">
                <p className="opacity-90">
                  Author <span className="font-bold border-b border-white/40 ml-1 cursor-pointer">Yvonne Keal</span>
                </p>
                <p className="opacity-80 font-light">Product Management Specialist</p>
                <p className="opacity-80 font-light mt-1">Written 07/05/2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image Area */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
          <img 
            src="https://images.prismic.io/hillarys/aNVNYp5xUNkB1Gxj_HIL-25-CALMLIVINGCOLLECTION-ROLLERBLINDS-ALTHEALINEN-LIVINGROOM-01.jpg?auto=format,compress" 
            alt="Sustainable living room"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default BlogHeroSection;