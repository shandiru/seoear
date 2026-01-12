import React from 'react';

const SeasonalSolutions = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src="https://images.prismic.io/hillarys/aBtS7CdWJ-7kRtM__HIL_2023_CHALLENGEHILLARYS_BEATAYLOR_DUETTE_SILKCHARCOAL_DINING_24.jpg?auto=format%2Ccompress&width=768" 
                alt="Modern kitchen with honeycomb thermal blinds"
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
              Seasonal solutions
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p>
                According to research by English Heritage, 18% of a home’s heat loss is 
                through the windows. So choosing the right window dressing can have 
                a big impact on helping to keep your home insulated. Finding a window 
                dressing that can tackle both heat loss and summer heat gain will 
                maintain a comfortable temperature all year round.
              </p>
              
              <p>
                <strong>Fully lined curtains</strong> are a great way to tackle heat loss. 
                Close them to reduce draughts and block the heat of the sun on sunny days.
              </p>
              
              <p>
                <strong>Shutters</strong> offer a little more flexibility. They’re effective 
                at reducing draughts and filtering sunlight without blocking views 
                and light completely.
              </p>
              
              <p>
                <strong>Specialist blinds</strong> with a honeycomb structure trap heat 
                in shaped cells to create a barrier. Duette® blinds reduce heat loss 
                by up to 55% according to 2023 laboratory tests.
              </p>

              {/* Styled Link */}
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
                  Thermal blinds
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