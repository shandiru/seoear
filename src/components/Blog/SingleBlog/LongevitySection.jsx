import React from 'react';

const LongevitySection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* flex-col-reverse ensures text stays on top of image on mobile */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
              style={{ color: '#43AA8B' }}
            >
              1. Will I like the same style in years to come?
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg font-light">
              <p>
                Flash in the pan fashions are best avoided when buying for the long term. 
                Look for classic styles, such as{' '}
                <a href="#" className="font-medium underline decoration-1 underline-offset-4 hover:text-black transition-colors" style={{ color: '#43AA8B' }}>shutters</a>
                {' '}or simple{' '}
                <a href="#" className="font-medium underline decoration-1 underline-offset-4 hover:text-black transition-colors" style={{ color: '#43AA8B' }}>wooden blinds</a>.
              </p>
              
              <p>
                Or opt for neutral tones, or timeless patterns such as florals, stripes and checks. 
                Velvets, linens and cottons all have longevity in interior design.
              </p>
              
              <p>
                Painting walls is relatively cheap and easy and can transform a room around 
                the window dressings you’ve chosen for a brand-new lease of life.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2]">
              <img 
                src="https://images.prismic.io/hillarys/aBtTSidWJ-7kRtNF_CRAFTWOOD-PURE-WHITE-LEADGEN-BED-76-RT.jpg?auto=format,compress" 
                alt="Neutral bedroom with white shutters"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LongevitySection;