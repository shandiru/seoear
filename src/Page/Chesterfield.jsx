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
        <title>Ear Wax Removal in Burton | EarWeGo</title>
        <meta
          name="description"
          content="Professional ear wax removal in chesterfield using safe micro-suction. Home visits available with trained clinicians. Restore your hearing clarity today."
        />
        <meta
          name="keywords"
          content="ear wax removal chesterfield, microsuction chesterfield, home ear care, EarWeGo, ear cleaning chesterfield"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
          <link rel="canonical" href="https://www.earwego.co.uk/earwax-removal-chesterfield/" />
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
