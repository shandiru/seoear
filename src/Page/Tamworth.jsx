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
        <title>Ear Wax Removal in Tamworth | EarWeGo</title>
        <meta
          name="description"
          content="Professional ear wax removal in Tamworth using safe micro-suction. Home visits available with trained clinicians. Restore your hearing clarity today."
        />
        <meta
          name="keywords"
          content="ear wax removal Tamworth, microsuction Tamworth, home ear care, EarWeGo, ear cleaning Tamworth"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
          <link rel="canonical" href="https://www.earwego.co.uk/earwax-removal-tamworth/" />
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
