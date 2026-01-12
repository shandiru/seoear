import React from 'react';

const BlogReferences = () => {
  return (
    <section className="py-12 px-4 bg-gray-50/50 border-t border-gray-100">
      {/* Centered container with narrow max-width for readability */}
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Header using brand green #43AA8B */}
        <header className="mb-6">
          <h2 
            className="text-2xl md:text-3xl font-serif font-bold mb-6"
            style={{ color: '#43AA8B' }}
          >
            References:
          </h2>
        </header>

        {/* Reference Content with light font weight for a clean look */}
        <div className="space-y-4 text-gray-500 text-sm md:text-base leading-relaxed font-light italic">
          <p>
            Salford Energy House Thermal Performance of Window Coverings Testing. 
            University of Salford: Grant Henshaw, David Farmer, Bill George. March 2023
          </p>
          
          <p>
            Research into the Thermal Performance of Traditional Windows by 
            Chris Wood, Bill Bardass and Paul Baker, English Heritage Research Report, 
            October 2009
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default BlogReferences;