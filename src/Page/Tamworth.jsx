import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalTamworth/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalTamworth/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalTamworth/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalTamworth/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalTamworth/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalTamworth/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalTamworth/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalTamworth/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalTamworth/FinalCTASection";

function EarwaxremovalTamworth() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Tamworth | Safe & Reliable Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Tamworth | Safe & Reliable Ear Cleaning"></meta>
        <meta
          name="description"
          content="Book mobile ear wax removal in Tamworth with EarWeGo. Safe, reliable ear cleaning in your home or office. Schedule your appointment today."
        />
       
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
        <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-tamworth/" />
        
        <script type="application/ld+json">
          {`
                
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which areas of Tamworth do you visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover all areas including Amington, Glascote, Wilnecote, Two Gates, Dosthill and nearby villages like Polesworth."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Appointments are usually available within a few days in Tamworth."
      }
    },
    {
      "@type": "Question",
      "name": "Is the procedure safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, microsuction is considered the safest method for ear wax removal."
      }
    },
    {
      "@type": "Question",
      "name": "Can both ears be treated in one session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and the cost is £60 for both ears."
      }
    },
    {
      "@type": "Question",
      "name": "How long does treatment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually 30 minutes from start to finish."
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

export default EarwaxremovalTamworth;
