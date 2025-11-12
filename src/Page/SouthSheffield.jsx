import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/SouthSheffield/Hero";
import ServingAreasSection from "../components/Service/SouthSheffield/ServingAreasSection";
import WhyChooseSection from "../components/Service/SouthSheffield/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/SouthSheffield/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/SouthSheffield/AppointmentSteps";
import PricingSection from "../components/Service/SouthSheffield/PricingSection";
import PatientCareSection from "../components/Service/SouthSheffield/PatientCareSection";
import FAQSection from "../components/Service/SouthSheffield/FAQSection";
import FinalCTASection from "../components/Service/SouthSheffield/FinalCTASection";

function SouthSheffield() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal in SouthSheffield | EarWeGo</title>
        <meta
          name="description"
          content="Professional ear wax removal in SouthSheffield using safe micro-suction. Home visits available with trained clinicians. Restore your hearing clarity today."
        />
        <meta
          name="keywords"
          content="ear wax removal Nottingham, microsuction SouthSheffield, home ear care, EarWeGo, ear cleaning Nottingham"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
          <link rel="canonical" href="https://www.earwego.co.uk/earwax-removal-southsheffield/" />
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

export default SouthSheffield;
