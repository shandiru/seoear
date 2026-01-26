import React from 'react'
import { Helmet } from 'react-helmet'
import AuthorHeader from '../components/Blog/Rab-newton/AuthorHeader'
import AuthorAbout from '../components/Blog/Rab-newton/AuthorAbout'
import BlogCards from '../components/Blog/Rab-newton/BlogCard'

const Rab = () => {
  return (
    <div>
      <Helmet>
        {/* Meta Data */}
        <title>Rab Newton | Founder and ear care professional at EarWeGo</title>
        <meta name="description" content="Rab Newton is the founder of EarWeGo and an experienced ear care professional with over ten years of hands on experience in ear wax removal, providing trusted home visit care across the Midlands." />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://earwego.co.uk/blog/authors/rab-newton" />

        {/* Google Verification */}
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />

        {/* Hardcoded Schema Markup for Head Tag */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rab Newton",
              "jobTitle": "Founder and ear care professional",
              "worksFor": {
                "@type": "Organization",
                "name": "EarWeGo",
                "url": "https://earwego.co.uk"
              },
              "url": "https://earwego.co.uk/author/rab-newton/",
              "description": "Rab Newton is the founder of EarWeGo and a professional ear care specialist with over ten years of hands on experience in ear wax removal. He provides home visit ear care services and contributes practical advice content based on real client experience.",
              "knowsAbout": [
                "Ear wax build up",
                "Professional ear wax removal",
                "Hearing care support",
                "Home visit ear care services"
              ],
              "sameAs": [
                "https://earwego.co.uk"
              ]
            }
          `}
        </script>
      </Helmet>

      <AuthorHeader />
      <AuthorAbout />
      {/* <BlogCards /> */}
    </div>
  )
}

export default Rab