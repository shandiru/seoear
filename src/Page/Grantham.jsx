import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/Grantham/Hero";
import ServingAreasSection from "../components/Service/Grantham/ServingAreasSection";
import WhyChooseSection from "../components/Service/Grantham/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/Grantham/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/Grantham/AppointmentSteps";
import PricingSection from "../components/Service/Grantham/PricingSection";
import PatientCareSection from "../components/Service/Grantham/PatientCareSection";
import FAQSection from "../components/Service/Grantham/FAQSection";
import FinalCTASection from "../components/Service/Grantham/FinalCTASection";

function Grantham() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Grantham | Trusted Mobile Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Grantham | Trusted Mobile Ear Cleaning"></meta>
        <meta
          name="description"
          content="EarWeGo provides mobile ear wax removal in Grantham. Trusted, effective ear cleaning at your convenience. Schedule your appointment today."
        />
        <meta
          name="keywords"
          content="ear wax removal Grantham"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
    <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-grantham/" />

      <script type="application/ld+json">
          {`
                
     {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you visit areas outside Grantham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we cover Barrowby, Great Gonerby, Harlaxton, Belton and nearby villages across Lincolnshire."
      }
    },
    {
      "@type": "Question",
      "name": "Is microsuction suitable for older clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it’s gentle and ideal for clients of all ages."
      }
    },
    {
      "@type": "Question",
      "name": "How long will it take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most appointments last around 30 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Is ear wax removal safe for hearing aid users?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and it can even improve hearing aid performance by reducing blockage and feedback."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Appointments are usually available within a few days in Grantham and nearby areas."
      }
    }
  ]
}


        `}
        </script>

      </Helmet>

      {/* ✅ Page Sections */}
      <EarWaxHero />
      <ServingAreasSection />
      <WhyChooseSection />
      <MicrosuctionComparison />
      <AppointmentSteps />
      <PricingSection />
      <PatientCareSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}

export default Grantham;
