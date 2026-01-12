import React from 'react';

const MaintenanceSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2]">
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
            
            <p className="text-gray-700 text-lg mb-6">
              {data.introText}
            </p>

            {/* Custom Green List */}
            <ul className="space-y-4 mb-8">
              {data.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span 
                    className="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center rounded-full border-2"
                    style={{ borderColor: '#43AA8B', color: '#43AA8B' }}
                  >
                    {/* FIXED: Removed backslashes from attributes below */}
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-600 font-light leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700">
              We’ve more detailed{' '}
              <a 
                href={data.link.url} 
                className="font-bold border-b-2 transition-all"
                style={{ 
                  color: '#43AA8B', 
                  borderColor: 'rgba(67, 170, 139, 0.3)' 
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = '#43AA8B'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(67, 170, 139, 0.3)'}
              >
                {data.link.text}
              </a>{' '}
              for our different blinds, curtains and shutters.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;