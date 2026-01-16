import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/SouthSheffield/Hero";
import ServingAreasSection from "../components/Service/SouthSheffield/ServingAreasSection";
import WhyChooseSection from "../components/Service/SouthSheffield/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/SouthSheffield/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/SouthSheffield/AppointmentSteps";
import PricingSection from "../components/Service/SouthSheffield/PricingSection";
import PatientCareSection from "../components/Service/SouthSheffield/PatientCareSection";
import FAQSection from "../components/Service/SouthSheffield/FAQSection";
import FinalCTASection from "../components/Service/SouthSheffield/FinalCTASection";

function SouthSheffield() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal South Sheffield | Reliable Ear Cleaning Experts</title>
        <meta name="title" content="Ear Wax Removal South Sheffield | Reliable Ear Cleaning Experts"></meta>
        <meta
          name="description"
          content="EarWeGo offers mobile ear wax removal in South Sheffield. Reliable, expert ear cleaning at your convenience. Book your appointment today."
        />
        
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
     <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-south-sheffield/" />
      
       <script type="application/ld+json">
          {`
                
 {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which areas do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover Woodseats, Meersbrook, Heeley, Norton Lees, Totley, Dronfield and surrounding parts of South Yorkshire."
      }
    },
    {
      "@type": "Question",
      "name": "Is microsuction safe for children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it’s gentle and suitable for most age groups, though parental consent is required for minors."
      }
    },
    {
      "@type": "Question",
      "name": "How long does an appointment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically about 30 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Can both ears be done in one visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, both can be treated in one appointment for £60."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Appointments are normally available within a few days across South Yorkshire."
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

export default SouthSheffield;
