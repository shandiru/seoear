import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalLincoln/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalLincoln/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalLincoln/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalLincoln/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalLincoln/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalLincoln/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalLincoln/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalLincoln/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalLincoln/FinalCTASection";

function EarwaxremovalLincoln() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Lincoln | Safe & Gentle Ear Cleaning Service</title>
        <meta name="title" content="Ear Wax Removal Lincoln | Safe & Gentle Ear Cleaning Service"></meta>
        <meta
          name="description"
          content="Book ear wax removal in Lincoln with EarWeGo’s mobile team. Safe, gentle ear cleaning at your home or office. Request your appointment now."
        />
        <meta
          name="keywords"
          content="ear wax removal Lincoln , ear cleaning Lincoln"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
       <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-lincoln/" />
       


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
        "text": "We cover Lincoln city, North Hykeham, Washingborough, Bracebridge Heath and nearby villages such as Nettleham and Skellingthorpe."
      }
    },
    {
      "@type": "Question",
      "name": "How long will the appointment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually 30 minutes, depending on the amount of wax."
      }
    },
    {
      "@type": "Question",
      "name": "Can children be treated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, from age 5 and above with parental consent."
      }
    },
    {
      "@type": "Question",
      "name": "Is microsuction safe if I’ve had ear problems before?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it’s a controlled and gentle procedure ideal for sensitive ears."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I get an appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We usually have availability within a few days in Lincolnshire."
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

export default EarwaxremovalLincoln;
