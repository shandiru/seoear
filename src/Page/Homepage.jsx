// src/App.jsx  OR  src/Page/Home.jsx
import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";

// Lazy-load homepage sections
import Hero from "../components/Homepage/Hero";
const WhyChoose = lazy(() => import("../components/Homepage/WhyChoose"));
const Pricing = lazy(() => import("../components/Homepage/Pricing"));
const TeamSection = lazy(() => import("../components/Homepage/TeamSection"));
const Reviews = lazy(() => import("../components/Homepage/Reviews"));
const FAQSection = lazy(() => import("../components/Homepage/FAQSection"));
const ContactSection = lazy(() => import("../components/Homepage/ContactSection"));
const FindUs = lazy(() => import("../components/Homepage/FindUs"));

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
      {/* Homepage Sections with Image Fallback */}
 <Hero />

<Suspense
  fallback={
    <div className="flex justify-center items-center my-8">
      <img
        src="http://localhost:5173/LOGO2-removebg-preview.png"
        alt="Loading..."
        className="w-32 h-32 animate-spin"
      />
    </div>
  }
>
  <WhyChoose />
</Suspense>

<Suspense
  fallback={
    <div className="flex justify-center items-center my-8">
      <img
        src="http://localhost:5173/LOGO2-removebg-preview.png"
        alt="Loading..."
        className="w-32 h-32 animate-spin"
      />
    </div>
  }
>
  <Pricing />
</Suspense>

<Suspense
  fallback={
    <div className="flex justify-center items-center my-8">
      <img
        src="http://localhost:5173/LOGO2-removebg-preview.png"
        alt="Loading..."
        className="w-32 h-32 animate-spin"
      />
    </div>
  }
>
  <TeamSection />
</Suspense>

<Suspense
  fallback={
    <div className="flex justify-center items-center my-8">
      <img
        src="http://localhost:5173/LOGO2-removebg-preview.png"
        alt="Loading..."
        className="w-32 h-32 animate-spin"
      />
    </div>
  }
>
  <Reviews />
</Suspense>

<Suspense
  fallback={
    <div className="flex justify-center items-center my-8">
      <img
        src="http://localhost:5173/LOGO2-removebg-preview.png"
        alt="Loading..."
        className="w-32 h-32 animate-spin"
      />
    </div>
  }
>
  <FAQSection />
</Suspense>

<Suspense
  fallback={
    <div className="flex justify-center items-center my-8">
      <img
        src="http://localhost:5173/LOGO2-removebg-preview.png"
        alt="Loading..."
        className="w-32 h-32 animate-spin"
      />
    </div>
  }
>
  <ContactSection />
</Suspense>

<Suspense
  fallback={
    <div className="flex justify-center items-center my-8">
      <img
        src="http://localhost:5173/LOGO2-removebg-preview.png"
        alt="Loading..."
        className="w-32 h-32 animate-spin"
      />
    </div>
  }
>
  <FindUs />
</Suspense>

    </>
  );
}

export default Home;
