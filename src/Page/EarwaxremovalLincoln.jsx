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
        <title>Ear Wax Removal in Lincoln | EarWeGo</title>
        <meta
          name="description"
          content="Professional ear wax removal in Lincoln using safe micro-suction. Home visits available with trained clinicians. Restore your hearing clarity today."
        />
        <meta
          name="keywords"
          content="ear wax removal Lincoln, microsuction Lincoln, home ear care, EarWeGo, ear cleaning Lincoln"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
          <link rel="canonical" href="https://earwego.co.uk/earwax-removal-Lincoln" />
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
