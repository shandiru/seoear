import React from 'react';

const BlogHeroSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[500px]">
        
        {/* Left Side: Content Area */}
        <div 
          className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24"
          style={{ backgroundColor: '#43AA8B' }}
        >
          <div className="max-w-md w-full text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8">
              {data.title}
            </h1>
            
            {/* Author Card */}
            <div className="flex items-center gap-4 mt-12">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                <img 
                  src={data.authorImg} 
                  alt={data.author}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col text-sm">
               <p className="opacity-90">
  Author{" "}
  <a
    href={`/blog/authors/${data.author
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}`}
    className="font-bold border-b border-white/40 ml-1 
               hover:text-white
               hover:border-[#43AA8B] 
               transition 
               bg-transparent"
  >
    {data.author}
  </a>
</p>

                <p className="opacity-80 font-light">{data.authorRole}</p>
                <p className="opacity-80 font-light mt-1 text-[10px] uppercase tracking-wider">Written {data.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image Area */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
          <img 
            src={data.bgImage} 
            alt="Hero Header"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default BlogHeroSection;