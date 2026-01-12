import React from 'react';

const FurnishingsSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* lg:flex-row places the image on the right for desktop screens */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
              style={{ color: '#43AA8B' }}
            >
              Thoughtful furnishings
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg font-light">
              <p>
                Upcycling is a great way to repurpose furniture. A lick of paint can transform 
                an old chest of drawers or a chair, and it means you won’t need to throw your 
                old furniture away or go out and spend money on new items.
              </p>
              
              <p>
                We can also look for recycled materials when we’re buying new items for our home. 
                Recycling has come a long way, and there are increasingly more options to choose 
                from when it comes to window dressings.
              </p>
              
              <p>
                Modern technology means recycled polyester fabrics like faux linens and silks 
                look just as good as the real thing. Initiatives such as <strong>Better Cotton</strong> and 
                <strong> FSC®</strong> show a long-term commitment to sustainability.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2]">
              <img 
                src="https://images.prismic.io/hillarys/aBtUDSdWJ-7kRtNT_HIL_2022_WOODVENETIANS_HOUSEBEAUTIFUL_NATURALBAMBOO_HONEY_PORTRAIT01.jpg?auto=format,compress" 
                alt="Living room with natural bamboo honey venetian blinds"
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