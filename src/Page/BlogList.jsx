import React from "react";
import { Helmet } from "react-helmet";
import BlogHero from "../components/Blog/List/BlogListHero";
import BlogArchive from "../components/Blog/List/BlogArchive";

function BlogList() {
  return (
    <>
      <Helmet>
        {/* ✅ Primary SEO */}
        <title>Blogs & News | EarWeGo</title>
        <meta 
          name="description" 
          content="Keep up to date with expert advice, practical tips, and company news from EarWeGo. Our blog covers everything from earwax build-up and hearing health to micro-suction aftercare and common ear conditions." 
        />

        {/* ✅ Canonical Link added here */}
        <link rel="canonical" href="https://earwego.co.uk/blogs/" />
   <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
       
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "EarWeGo Blogs & News",
            "url": "https://earwego.co.uk/blogs/",
            "description": "Expert advice, practical tips, and company news from EarWeGo regarding ear health and micro-suction.",
            "publisher": {
              "@type": "Organization",
              "name": "EarWeGo",
              "logo": {
                "@type": "ImageObject",
                "url": "https://earwego.co.uk/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      {/* ✅ Page Sections */}
      <BlogHero />
      <BlogArchive />
    </>
  );
}

export default BlogList;