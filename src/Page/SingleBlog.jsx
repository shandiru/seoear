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
function SingleBlog() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
      
      </Helmet>
        {/* ✅ Page Sections */}
        <BlogHeroSection />
        <SustainableContent />
        <SeasonalSolutions />
        <SustainableText />
        <LongevitySection />
        <MaintenanceSection />
        <FurnishingsSection />
        <BlogReferences />
        <InspirationCarousel />
       
      
    </>
  );
}

export default SingleBlog;
