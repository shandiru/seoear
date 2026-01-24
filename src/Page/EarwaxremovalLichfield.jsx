import React from "react";
import { Helmet } from "react-helmet";

// Note: Ensure these component paths exist or update them to your Lichfield directory
import EarWaxHero from "../components/Service/EarwaxremovalLichfield/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalLichfield/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalLichfield/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalLichfield/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalLichfield/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalLichfield/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalLichfield/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalLichfield/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalLichfield/FinalCTASection";

function EarwaxremovalLichfield() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Lichfield | Expert & Safe Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Lichfield | Expert & Safe Ear Cleaning"></meta>
        <meta
          name="description"
          content="Trust EarWeGo for mobile ear wax removal in Lichfield. Expert, gentle ear cleaning in the comfort of your home. Book your appointment today."
        />
        
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
        <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-lichfield/" />
        
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
            "text": "We serve Lichfield city centre, Darwin Park, Boley Park, and surrounding villages like Shenstone, Whittington, and Fradley."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can I book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We usually offer appointments within a few days across Lichfield and the surrounding Staffordshire areas."
          }
        },
        {
          "@type": "Question",
          "name": "Is microsuction painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, it’s gentle and comfortable with immediate improvement in most cases."
          }
        },
        {
          "@type": "Question",
          "name": "Can I have both ears done in one visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our pricing includes £60 for both ears in a single session."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide aftercare advice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, your clinician will explain how to keep your ears healthy between visits."
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

export default EarwaxremovalLichfield;