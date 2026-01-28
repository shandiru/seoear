import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Import your data and sub-components
import { blogPosts } from "../components/Blog/SingleBlog/blogData";
import BlogHeroSection from "../components/Blog/SingleBlog/BlogHeroSection";
import SustainableContent from "../components/Blog/SingleBlog/SustainableContent";
import SeasonalSolutions from "../components/Blog/SingleBlog/SeasonalSolutions";
import LongevitySection from "../components/Blog/SingleBlog/LongevitySection";
import MaintenanceSection from "../components/Blog/SingleBlog/MaintenanceSection";
import FurnishingsSection from "../components/Blog/SingleBlog/FurnishingsSection";
import BlogReferences from "../components/Blog/SingleBlog/BlogReferences";

function SingleBlog() {
    const { id } = useParams();
    const currentPost = blogPosts[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!currentPost) {
        return (
            <div className="py-20 text-center min-h-screen">
                <h2 className="text-2xl font-bold text-gray-800">Blog post not found.</h2>
            </div>
        );
    }

    // Define the specific URL for this post
    const canonicalUrl = `https://earwego.co.uk/blog/micro-suction-ear-wax-removal`;
 
    return (
        <div className="single-blog-page">
            <Helmet>
                {/* ✅ Primary SEO */}
                <title>{currentPost.hero.title} | EarWeGo</title>
                <meta name="description" content={currentPost.intro.description} />
                  <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
                {/* ✅ Canonical Link */}
                <link rel="canonical" href={id} />

                {/* ✅ Article Schema */}
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": currentPost.hero.title,
                    "description": currentPost.intro.description,
                    "author": {
                      "@type": "Organization",
                      "name": "EarWeGo"
                    },
                    "publisher": {
                      "@type": "Organization",
                      "name": "EarWeGo",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://earwego.co.uk/logo.png"
                      }
                    },
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": canonicalUrl
                    }
                  })}
                </script>
            </Helmet>

            <BlogHeroSection data={currentPost.hero} />
            
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <SustainableContent data={currentPost.intro} />
                <SeasonalSolutions data={currentPost.seasonal} />
                <LongevitySection data={currentPost.longevity} />
                <MaintenanceSection data={currentPost.maintenance} />
                <FurnishingsSection data={currentPost.furnishings} />
                <BlogReferences data={currentPost.references} />
            </main>
        </div>
    );
}

export default SingleBlog;