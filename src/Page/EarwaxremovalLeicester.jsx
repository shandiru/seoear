import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalLeicester/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalLeicester/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalLeicester/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalLeicester/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalLeicester/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalLeicester/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalLeicester/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalLeicester/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalLeicester/FinalCTASection";

function EarwaxremovalLeicester() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Leicester | Trusted Ear Cleaning Specialists</title>
          <meta name="title" content="Ear Wax Removal Leicester | Trusted Ear Cleaning Specialists"></meta>
        <meta
          name="description"
          content="Choose EarWeGo for mobile ear wax removal in Leicester. Trusted, professional ear cleaning wherever you are. Book your appointment today."
        />
       
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
        <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-leicester/" />
         <script type="application/ld+json">
          {`
                
       {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas of Leicester do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Oadby, Wigston, Glenfield, Braunstone, Birstall and nearby villages like Thurmaston."
      }
    },
    {
      "@type": "Question",
      "name": "Is microsuction suitable for everyone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it’s safe for most people, including those with hearing aids."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I book an appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We usually have appointments available within a few days across Leicestershire."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to prepare my ears before treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Using olive oil drops for a few days can help soften wax but isn’t essential."
      }
    },
    {
      "@type": "Question",
      "name": "Will it hurt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, microsuction is gentle and pain-free."
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

export default EarwaxremovalLeicester;
