// src/App.jsx  OR  src/Page/Home.jsx
import React from "react";
import { Helmet } from "react-helmet";

import Hero from "../components/Homepage/Hero";
import WhyChoose from "../components/Homepage/WhyChoose";
import Pricing from "../components/Homepage/Pricing";
import TeamSection from "../components/Homepage/TeamSection";
import Reviews from "../components/Homepage/Reviews";
import FAQSection from "../components/Homepage/FAQSection";
import ContactSection from "../components/Homepage/ContactSection";
import FindUs from "../components/Homepage/FindUs";

function Home() {
  return (
    <>
      <Helmet>
        {/* ============================
            BASIC SEO
        ============================ */}
        <title>EarWeGo | Professional Ear Wax Removal at Home</title>

        <meta
          name="description"
          content="EarWeGo offers safe and professional ear wax removal in Nottingham and nearby areas. Our trained clinicians provide micro-suction ear cleaning right at your home."
        />
        <meta
          name="keywords"
          content="ear wax removal, ear cleaning Nottingham, micro suction, home ear care, professional ear cleaning, EarWeGo"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://earwego.co.uk/" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />

        {/* ============================
            SOCIAL SHARE (OG TAGS)
        ============================ */}
        <meta property="og:title" content="EarWeGo | Professional Ear Wax Removal at Home" />
        <meta
          property="og:description"
          content="Experience safe and professional ear wax removal at home with EarWeGo. Book your appointment with our trained clinicians today."
        />
        <meta property="og:url" content="https://earwego.co.uk/" />
        <meta property="og:type" content="website" />

        {/* IMPORTANT: Using YOUR image name exactly */}
        <meta property="og:image" content="https://earwego.co.uk/LOGO2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ============================
            TWITTER CARD
        ============================ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="EarWeGo | Professional Ear Wax Removal at Home"
        />
        <meta
          name="twitter:description"
          content="Safe and professional mobile micro-suction ear wax removal service at your home."
        />
        <meta name="twitter:image" content="https://earwego.co.uk/LOGO2.png" />

        {/* ✅ Organization, LocalBusiness & Service Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://earwego.co.uk#organization",
                  "name": "Earwego",
                  "url": "https://earwego.co.uk",
                  "logo": "https://earwego.co.uk",
                  "email": "earwegosales@gmail.com",
                  "telephone": "08081371961",
                  "description": "Earwego is a professional and experienced provider of mobile earwax removal services. With over 10 years of expertise, we serve Derbyshire, Nottinghamshire, and Leicestershire with safe and effective micro-suction earwax removal through convenient home visits.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Great Northern Road",
                    "addressLocality": "Derby",
                    "postalCode": "DE1 1LR",
                    "addressCountry": "GB"
                  },
                  "foundingDate": "2014",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "08081371961",
                    "contactType": "customer service",
                    "areaServed": ["Derbyshire", "Nottinghamshire", "Leicestershire"],
                    "availableLanguage": "English"
                  },
                  "sameAs": []
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://earwego.co.uk#localbusiness",
                  "name": "Earwego",
                  "url": "https://earwego.co.uk",
                  "image": "https://earwego.co.uk",
                  "telephone": "08081371961",
                  "email": "earwegosales@gmail.com",
                  "description": "Professional earwax removal service with over 10 years of experience. Providing mobile micro-suction earwax removal across Derbyshire, Nottinghamshire, and Leicestershire with convenient home visits.",
                  "priceRange": "£50 to £60",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Great Northern Road",
                    "addressLocality": "Derby",
                    "postalCode": "DE1 1LR",
                    "addressCountry": "GB"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "09:30",
                      "closes": "17:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": "Saturday",
                      "opens": "10:00",
                      "closes": "14:00"
                    }
                  ],
                  "serviceArea": [
                    { "@type": "Place", "name": "Derby" },
                    { "@type": "Place", "name": "Nottingham" },
                    { "@type": "Place", "name": "Leicester" },
                    { "@type": "Place", "name": "Lincoln" },
                    { "@type": "Place", "name": "Grantham" },
                    { "@type": "Place", "name": "Stafford" },
                    { "@type": "Place", "name": "Tamworth" },
                    { "@type": "Place", "name": "Burton" },
                    { "@type": "Place", "name": "Chesterfield" },
                    { "@type": "Place", "name": "Nuneaton" },
                    { "@type": "Place", "name": "South Sheffield" },
                    { "@type": "Place", "name": "Worksop" },
                    { "@type": "Place", "name": "Loughborough" }
                  ],
                  "areaServed": ["Derbyshire", "Nottinghamshire", "Leicestershire"],
                  "parentOrganization": {
                    "@id": "https://earwego.co.uk#organization"
                  },
                  "makesOffer": {
                    "@id": "https://earwego.co.uk#service"
                  },
                  "slogan": "Mobile Ear Wax Removal Across Derbyshire, Nottinghamshire & Leicestershire"
                },
                {
                  "@type": "Service",
                  "@id": "https://earwego.co.uk#service",
                  "serviceType": "Ear Wax Removal by Micro-Suction",
                  "name": "Mobile Ear Wax Removal (Micro-Suction)",
                  "description": "Safe, professional micro-suction earwax removal delivered through home visits across Derbyshire, Nottinghamshire, and Leicestershire.",
                  "provider": {
                    "@id": "https://earwego.co.uk#localbusiness"
                  },
                  "areaServed": ["Derbyshire", "Nottinghamshire", "Leicestershire"],
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "GBP",
                    "price": "50-60",
                    "description": "£50 for one ear, £60 for both ears."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Homepage Sections */}
      <Hero />
      <WhyChoose />
      <Pricing />
      <TeamSection />
      <Reviews />
      <FAQSection />
      <ContactSection />
      <FindUs />
    </>
  );
}

export default Home;
