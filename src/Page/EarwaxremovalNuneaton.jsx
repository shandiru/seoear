import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalNuneaton/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalNuneaton/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalNuneaton/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalNuneaton/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalNuneaton/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalNuneaton/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalNuneaton/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalNuneaton/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalNuneaton/FinalCTASection";

function EarwaxremovalNuneaton() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Nuneaton | Gentle & Professional Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Nuneaton | Gentle & Professional Ear Cleaning"></meta>
        <meta
          name="description"
          content="EarWeGo provides mobile ear wax removal in Nuneaton. Gentle, safe ear cleaning by our professional team. Book your appointment today."
        />
       
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
       <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-nuneaton/" />
       
        <script type="application/ld+json">
          {`
                
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you cover nearby villages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we cover Nuneaton, Bulkington, Hartshill, Ansley and nearby parts of Warwickshire."
      }
    },
    {
      "@type": "Question",
      "name": "Can you remove wax from both ears in one session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the cost is £60 for both ears during a single appointment."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the treatment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Around 30 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Is microsuction safe for everyone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it’s the safest and most effective method available."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I book an appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Appointments are usually available within a few days across Warwickshire."
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

export default EarwaxremovalNuneaton;
