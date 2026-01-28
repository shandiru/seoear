import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Import your data
import { blogPosts } from "../components/Blog/SingleBlog/blogData";

// Import your sub-components
import BlogHeroSection from "../components/Blog/SingleBlog/BlogHeroSection";
import SustainableContent from "../components/Blog/SingleBlog/SustainableContent";
import SeasonalSolutions from "../components/Blog/SingleBlog/SeasonalSolutions";
import LongevitySection from "../components/Blog/SingleBlog/LongevitySection";
import MaintenanceSection from "../components/Blog/SingleBlog/MaintenanceSection";
import FurnishingsSection from "../components/Blog/SingleBlog/FurnishingsSection";
import BlogReferences from "../components/Blog/SingleBlog/BlogReferences";
import InspirationCarousel from "../components/Blog/SingleBlog/InspirationCarousel";

function SingleBlog() {
    const { id } = useParams(); // URL looks like: /blog/sustainable-home
    
    // Find the post in your blogData object
    const currentPost = blogPosts[id];

    // Scroll to top whenever the ID changes (useful for "Read More" links)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Error handling if ID is wrong
    if (!currentPost) {
        return (
            <div className="py-20 text-center min-h-screen">
                <h2 className="text-2xl font-bold text-gray-800">Blog post not found.</h2>
                <p className="mt-4 text-gray-600">The article you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="single-blog-page">
            <Helmet>
                <title>{currentPost.hero.title} | Your Website</title>
                <meta name="description" content={currentPost.intro.description} />
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