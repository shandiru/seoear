import React from 'react';

const SustainableContent = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Container with a narrow max-width for that editorial center-aligned look */}
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Main Heading - Using your Brand Green #43AA8B */}
        <h2 
          className="text-3xl md:text-4xl font-serif font-bold mb-8"
          style={{ color: '#43AA8B' }}
        >
          Buy once, buy well
        </h2>

        {/* Rich Text Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            When it comes to living in a more sustainable way, small, thoughtful 
            changes can make a big difference. From monitoring energy usage 
            to turning the lights off in unused rooms and switching over to 
            long-lasting LED bulbs there’s plenty we can all do to help.
          </p>

        
        </div>
        
      </div>
    </section>
  );
};

export default SustainableContent;