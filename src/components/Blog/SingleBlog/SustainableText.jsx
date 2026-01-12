import React from 'react';

const SustainableText = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 
          className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight"
          style={{ color: '#43AA8B' }}
        >
          {data.title}
        </h2>

        <div className="space-y-6 text-gray-600 text-lg md:text-xl font-light leading-relaxed">
          <p>{data.paragraphs[0]}</p>

          <p>
            You can learn more about our{' '}
            <a 
              href={data.link.url} 
              className="font-bold underline decoration-2 underline-offset-4 transition-all"
              style={{ 
                color: '#43AA8B', 
                textDecorationColor: 'rgba(67, 170, 139, 0.4)' 
              }}
              onMouseOver={(e) => e.currentTarget.style.textDecorationColor = '#43AA8B'}
              onMouseOut={(e) => e.currentTarget.style.textDecorationColor = 'rgba(67, 170, 139, 0.4)'}
            >
              {data.link.text}
            </a>{' '}
            {data.paragraphs[1]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SustainableText;