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
