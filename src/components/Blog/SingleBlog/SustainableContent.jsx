import React from 'react';

const SustainableContent = ({ data }) => {
  // Return null if data hasn't loaded yet to prevent errors
  if (!data) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Container with a narrow max-width for that editorial center-aligned look */}
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Dynamic Heading - Using Brand Green #43AA8B */}
        <h2 
          className="text-3xl md:text-4xl font-serif font-bold mb-8"
          style={{ color: '#43AA8B' }}
        >
          {data.title}
        </h2>

        {/* Dynamic Rich Text Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            {data.description}
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default SustainableContent;