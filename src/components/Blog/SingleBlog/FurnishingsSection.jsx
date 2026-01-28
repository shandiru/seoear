import React from 'react';

const FurnishingsSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
              style={{ color: '#43AA8B' }}
            >
              {data.title}
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg font-light">
              {data.paragraphs.map((text, index) => (
                <p key={index}>
                  {/* Using dangerouslySetInnerHTML allows the strong tags from the JS file to render correctly */}
                  <span dangerouslySetInnerHTML={{ __html: text }} />
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/3]">
              <img 
                src={data.image} 
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FurnishingsSection;