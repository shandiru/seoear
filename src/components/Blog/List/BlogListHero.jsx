import React from 'react';

const BlogHero = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs */}
        

        {/* Main Content Container - Left Aligned */}
        <div className="max-w-2xl">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            style={{ color: '#43AA8B' }}
          >
            Blogs and news
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-800">
            Stay informed with the latest news on driving with disabilities 
            from Mobility in Motion and read our blog articles offering 
            insights into all aspects of vehicle adaptations, accessible 
            travel and leading an independent life. Keep in touch for the 
            latest news and updates, including new product launches.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default BlogHero;