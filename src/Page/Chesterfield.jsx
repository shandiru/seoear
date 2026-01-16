import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/Chesterfield/Hero";
import ServingAreasSection from "../components/Service/Chesterfield/ServingAreasSection";
import WhyChooseSection from "../components/Service/Chesterfield/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/Chesterfield/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/Chesterfield/AppointmentSteps";
import PricingSection from "../components/Service/Chesterfield/PricingSection";
import PatientCareSection from "../components/Service/Chesterfield/PatientCareSection";
import FAQSection from "../components/Service/Chesterfield/FAQSection";
import FinalCTASection from "../components/Service/Chesterfield/FinalCTASection";

function Chesterfield() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Chesterfield | Expert Ear Cleaning Specialists</title>
        <meta name="title" content="Ear Wax Removal Chesterfield | Expert Ear Cleaning Specialists"></meta>
        <meta
          name="description"
          content="Choose EarWeGo for mobile ear wax removal in Chesterfield. Expert ear cleaning in the comfort of your home. Request your appointment now."
        />
       
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
      <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-chesterfield/" />
       
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
        "text": "We cover Chesterfield, Brampton, Newbold, Hasland, Wingerworth, Walton and nearby villages across Derbyshire."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the appointment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically around 30 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Can both ears be treated in one session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, both ears can be done together for £60."
      }
    },
    {
      "@type": "Question",
      "name": "Is microsuction safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it’s a clean and gentle method for removing ear wax — widely used by hearing care professionals."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I get an appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Appointments are usually available within a few days across Derbyshire."
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

export default Chesterfield;
