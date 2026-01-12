import React from 'react';

const BlogReferences = ({ data }) => {
  // If no data or empty array, don't render the section
  if (!data || data.length === 0) return null;

  return (
    <section className="py-12 px-4 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        
        <header className="mb-6">
          <h2 
            className="text-2xl md:text-3xl font-serif font-bold mb-6"
            style={{ color: '#43AA8B' }}
          >
            References:
          </h2>
        </header>

        <div className="space-y-4 text-gray-500 text-sm md:text-base leading-relaxed font-light italic">
          {data.map((reference, index) => (
            <p key={index}>
              {reference}
            </p>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default BlogReferences;