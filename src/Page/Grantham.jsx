import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/Grantham/Hero";
import ServingAreasSection from "../components/Service/Grantham/ServingAreasSection";
import WhyChooseSection from "../components/Service/Grantham/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/Grantham/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/Grantham/AppointmentSteps";
import PricingSection from "../components/Service/Grantham/PricingSection";
import PatientCareSection from "../components/Service/Grantham/PatientCareSection";
import FAQSection from "../components/Service/Grantham/FAQSection";
import FinalCTASection from "../components/Service/Grantham/FinalCTASection";

function Grantham() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal in Grantham | EarWeGo</title>
        <meta
          name="description"
          content="Professional ear wax removal in Nottingham using safe micro-suction. Home visits available with trained clinicians. Restore your hearing clarity today."
        />
        <meta
          name="keywords"
          content="ear wax removal Nottingham, microsuction Nottingham, home ear care, EarWeGo, ear cleaning Nottingham"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
          <link rel="canonical" href="https://www.earwego.co.uk/earwax-removal-grantham/" />
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

export default Grantham;
