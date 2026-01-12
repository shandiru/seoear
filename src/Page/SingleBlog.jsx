import React from "react";
import { Helmet } from "react-helmet";
import BlogHeroSection from "../components/Blog/SingleBlog/BlogHeroSection";
import SustainableContent from "../components/Blog/SingleBlog/SustainableContent";
import SeasonalSolutions from "../components/Blog/SingleBlog/SeasonalSolutions";
import SustainableText from "../components/Blog/SingleBlog/SustainableText";
import LongevitySection from "../components/Blog/SingleBlog/LongevitySection";
import MaintenanceSection from "../components/Blog/SingleBlog/MaintenanceSection";
import FurnishingsSection from "../components/Blog/SingleBlog/FurnishingsSection";
import BlogReferences from "../components/Blog/SingleBlog/BlogReferences";
import InspirationCarousel from "../components/Blog/SingleBlog/InspirationCarousel";

import { blogPosts } from "../components/Blog/SingleBlog/blogData"
function SingleBlog() {
    const currentPost = blogPosts["sustainable-home"];
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
      
      </Helmet>
        {/* ✅ Page Sections */}
        <BlogHeroSection data={currentPost.hero} />
        <SustainableContent data={currentPost.intro} />
      <SeasonalSolutions data={currentPost.seasonal} />
        {/* <SustainableText  /> */}
        <LongevitySection data ={currentPost.longevity}/>
        <MaintenanceSection data={currentPost.maintenance} />
        <FurnishingsSection data={currentPost.furnishings}/>
        <BlogReferences data={currentPost.references}/>
        <InspirationCarousel data={currentPost.carousel}/>
       
      
    </>
  );
}

export default SingleBlog;
