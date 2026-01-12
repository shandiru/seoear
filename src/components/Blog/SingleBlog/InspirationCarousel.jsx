import React from 'react';

const InspirationCarousel = () => {
  const cards = [
    {
      id: 1,
      title: "Sustainable style",
      description: "Discover our growing range of naturally sustainable options for blinds.",
      linkText: "Take a look at our sustainable styles",
      image: "https://images.prismic.io/hillarys/Z77zJZ7c43Q3gP7k_hil-24-poodle-and-blonde-curtain-food-babies-ivory-living-room-02.jpg?auto=format%2Ccompress"
    },
    {
      id: 2,
      title: "6 considerations for painting and upcycling furniture",
      description: "Upcycling furniture is a fantastic way to give your home a new lease of life, reducing waste.",
      linkText: "Learn about upcycling",
      image: "https://images.prismic.io/hillarys/aBtVLCdWJ-7kRtPD_HIL_2018_ABIGAILAHERN_PR_LANDSCAPE_Cadillac-Noir_Roman_blinds_and_Wolfe-Smoulder_cushion_with_Colette-Vixen_fringing.jpg?auto=format,compress"
    },
    {
      id: 3,
      title: "Sustainable design with Oliver Heath",
      description: "Learn more about how to make sustainable style choices at home with Oliver Heath.",
      linkText: "Discover sustainable designs",
      image: "https://images.prismic.io/hillarys/Z-MB-HdAxsiBv5hC_tatum_beige_roller_blinds-oliver-heath.jpg?auto=format%2Ccompress"
    }
  ];

  return (
    <section className="py-20 bg-[#F9FBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="mb-12">
          <h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: '#43AA8B' }}
          >
            Looking for more inspiration?
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Read more about how we can help you make sustainable choices at home
          </p>
        </header>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <article 
              key={card.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Media Container */}
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-[#43AA8B] transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 font-light mb-8 flex-1">
                  {card.description}
                </p>

                {/* Styled Link using your Brand Green */}
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all border-b-2 py-1 self-start"
                  style={{ 
                    color: '#43AA8B',
                    borderColor: 'rgba(67, 170, 139, 0.2)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = '#43AA8B'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(67, 170, 139, 0.2)'}
                >
                  {card.linkText}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationCarousel;