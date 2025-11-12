import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/Lincoln/Hero";
import ServingAreasSection from "../components/Service/Lincoln/ServingAreasSection";
import WhyChooseSection from "../components/Service/Lincoln/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/Lincoln/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/Lincoln/AppointmentSteps";
import PricingSection from "../components/Service/Lincoln/PricingSection";
import PatientCareSection from "../components/Service/Lincoln/PatientCareSection";
import FAQSection from "../components/Service/Lincoln/FAQSection";
import FinalCTASection from "../components/Service/Lincoln/FinalCTASection";

function Lincoln() {
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
          content="ear wax removal Nottingham, microsuction Lincoln, home ear care, EarWeGo, ear cleaning Nottingham"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
          <link rel="canonical" href="https://www.earwego.co.uk/earwax-removal-lincoln/" />
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

export default Lincoln;
