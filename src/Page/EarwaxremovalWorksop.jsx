import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalWorksop/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalWorksop/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalWorksop/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalWorksop/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalWorksop/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalWorksop/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalWorksop/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalWorksop/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalWorksop/FinalCTASection";

function EarwaxremovalWorksop() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Worksop | Safe & Gentle Ear Cleaning </title>
        <meta name="title" content="Ear Wax Removal Worksop | Safe & Gentle Ear Cleaning "></meta>
        <meta
          name="description"
          content="Service	Book mobile ear wax removal in Worksop with EarWeGo. Safe, gentle ear cleaning wherever you are. Schedule your appointment today."
        />
        
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
      <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-worksop/" />
      
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
        "text": "We cover Worksop, Gateford, Kilton, Manton, Carlton in Lindrick, Whitwell, Shireoaks and nearby parts of Nottinghamshire."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the treatment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most appointments take around 30 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to use ear drops before treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s optional, but a few drops of olive oil can help soften the wax."
      }
    },
    {
      "@type": "Question",
      "name": "Is microsuction suitable for sensitive ears?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it’s gentle and safe for most people."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We usually have availability within a few days across Nottinghamshire."
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

export default EarwaxremovalWorksop;
