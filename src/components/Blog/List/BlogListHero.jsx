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
            Blogs & News
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-800">
            Stay informed about ear health, hearing care, and the latest updates from EarWeGo
description- Keep up to date with expert advice, practical tips, and company news from EarWeGo. Our blog covers everything from earwax build-up and hearing health to micro-suction aftercare and common ear conditions. We also share service updates, new coverage areas, and important announcements—so you’re always informed and confident about your ear care.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default BlogHero;