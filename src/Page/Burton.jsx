import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/Burton/Hero";
import ServingAreasSection from "../components/Service/Burton/ServingAreasSection";
import WhyChooseSection from "../components/Service/Burton/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/Burton/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/Burton/AppointmentSteps";
import PricingSection from "../components/Service/Burton/PricingSection";
import PatientCareSection from "../components/Service/Burton/PatientCareSection";
import FAQSection from "../components/Service/Burton/FAQSection";
import FinalCTASection from "../components/Service/Burton/FinalCTASection";

function Burton() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Burton | Trusted & Effective Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Burton | Trusted & Effective Ear Cleaning"></meta>
        <meta
          name="description"
          content="Book mobile ear wax removal in Burton with EarWeGo. Trusted, effective ear cleaning at your convenience. Request your appointment today."
        />
        <meta
          name="keywords"
          content="ear wax removal burton , ear cleaning burton"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
       <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-burton/" />
      
      <script type="application/ld+json">
          {`
                
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas of Burton do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover Burton upon Trent, Stretton, Branston, Horninglow and nearby villages like Rolleston on Dove and Tatenhill."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to prepare my ears before treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Using olive oil drops for a few days can help soften the wax, but it isn’t required before your appointment."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the appointment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most appointments last around 30 minutes, and many clients notice clearer hearing immediately after treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I have both ears treated at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, both ears can be treated in one visit for £60 — efficient and convenient."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Appointments are usually available within just a few days across Staffordshire, including Burton and surrounding areas."
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

export default Burton;
