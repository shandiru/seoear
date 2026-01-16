import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/Derby/Hero";
import ServingAreasSection from "../components/Service/Derby/ServingAreasSection";
import WhyChooseSection from "../components/Service/Derby/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/Derby/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/Derby/AppointmentSteps";
import PricingSection from "../components/Service/Derby/PricingSection";
import PatientCareSection from "../components/Service/Derby/PatientCareSection";
import FAQSection from "../components/Service/Derby/FAQSection";
import FinalCTASection from "../components/Service/Derby/FinalCTASection";

function EarwaxremovalDerby() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Derby | Gentle & Professional Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Derby | Gentle & Professional Ear Cleaning"></meta>
        <meta
          name="description"
          content="Book mobile ear wax removal in Derby with EarWeGo. Gentle, professional ear cleaning at your convenience. Schedule your appointment today."
        />
        
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
        <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-derby/" />

        <script type="application/ld+json">
          {`
                 {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you cover all areas of Derby?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, including Allestree, Littleover, Mickleover and nearby villages such as Duffield and Quarndon."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We usually have same-week or next-day availability in Derbyshire."
      }
    },
    {
      "@type": "Question",
      "name": "Is microsuction better than ear syringing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it’s cleaner, safer and avoids water-related risks."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help if I use hearing aids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, regular wax removal can improve hearing aid performance."
      }
    },
    {
      "@type": "Question",
      "name": "How long does treatment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually about 30 minutes from start to finish."
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

export default EarwaxremovalDerby;
