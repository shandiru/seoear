import React from "react";
import { Helmet } from "react-helmet";
import BlogHero from "../components/Blog/List/BlogListHero";
import BlogArchive from "../components/Blog/List/BlogArchive";

function BlogList() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
      
      </Helmet>
        {/* ✅ Page Sections */}
        <BlogHero />
        <BlogArchive />
      
    </>
  );
}

export default BlogList;
