import React from 'react';

const InspirationCarousel = ({ data }) => {
  // If data is missing, the component won't show anything
  if (!data || !data.cards) {
    console.warn("InspirationCarousel: No data provided");
    return null;
  }

  return (
    <section className="py-20 bg-[#F9FBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#43AA8B' }}>
            {data.title}
          </h2>
          <p className="text-gray-600 text-lg font-light">
            {data.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.cards.map((card) => (
            <article key={card.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#43AA8B] transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-light mb-8 flex-1">{card.description}</p>
                <a 
                  href={card.linkUrl} 
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider border-b-2 py-1 self-start transition-all"
                  style={{ color: '#43AA8B', borderColor: 'rgba(67, 170, 139, 0.2)' }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = '#43AA8B'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(67, 170, 139, 0.2)'}
                >
                  {card.linkText} <span>→</span>
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