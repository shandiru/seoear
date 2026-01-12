import React from 'react';

const SeasonalSolutions = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src={data.image} 
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
              style={{ color: '#43AA8B' }}
            >
              {data.title}
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              {data.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {/* Dynamic Link */}
              <p className="pt-4">
                Learn more about the benefits of our{' '}
                <a 
                  href="#" 
                  className="font-bold border-b-2 transition-all"
                  style={{ 
                    color: '#43AA8B', 
                    borderColor: 'rgba(67, 170, 139, 0.3)' 
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = '#43AA8B'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(67, 170, 139, 0.3)'}
                >
                  {data.linkText}
                </a>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SeasonalSolutions;