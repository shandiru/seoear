import React from 'react';

const SustainableText = () => {
  return (
    <section className="py-20 px-4 bg-white">
      {/* Container limited to max-width 3xl (approx 768px) 
        to ensure the text is readable and centered 
      */}
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Title using brand green #43AA8B */}
        <h2 
          className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight"
          style={{ color: '#43AA8B' }}
        >
          Buy once, buy well
        </h2>

        {/* Rich Text Body */}
        <div className="space-y-6 text-gray-600 text-lg md:text-xl font-light leading-relaxed">
          <p>
            Buying durable, long-lasting products is a smart, sustainable choice. 
            When it comes to window dressings, it’s better to get it right first 
            time with products that don’t just fit well but are fit for purpose 
            and designed to stand the test of time.
          </p>

          <p>
            You can learn more about our{' '}
            <a 
              href="/about/quality-standards" 
              className="font-bold underline decoration-2 underline-offset-4 transition-all"
              style={{ 
                color: '#43AA8B', 
                textDecorationColor: 'rgba(67, 170, 139, 0.4)' 
              }}
              onMouseOver={(e) => e.currentTarget.style.textDecorationColor = '#43AA8B'}
              onMouseOut={(e) => e.currentTarget.style.textDecorationColor = 'rgba(67, 170, 139, 0.4)'}
            >
              quality standards
            </a>{' '}
            and why we believe made to measure is best here.
          </p>

         
        </div>
        
      </div>
    </section>
  );
};

export default SustainableText;