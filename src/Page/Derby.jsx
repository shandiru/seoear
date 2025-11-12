import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/Derby/Hero";
import ServingAreasSection from "../components/Service/Derby/ServingAreasSection";
import WhyChooseSection from "../components/Service/Derby/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/Derby/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/Derby/AppointmentSteps";
import PricingSection from "../components/Service/Derby/PricingSection";
import PatientCareSection from "../components/Service/Derby/PatientCareSection";
import FAQSection from "../components/Service/Derby/FAQSection";
import FinalCTASection from "../components/Service/Derby/FinalCTASection";

function EarwaxremovalDerby() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal in Derby | EarWeGo</title>
        <meta
          name="description"
          content="Professional ear wax removal in Derby using safe micro-suction. Home visits available with trained clinicians. Restore your hearing clarity today."
        />
        <meta
          name="keywords"
          content="ear wax removal Derby, microsuction Derby, home ear care, EarWeGo, ear cleaning Derby"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
        <link rel="canonical" href="https://earwego.co.uk/earwax-removal-derby/" />

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

export default EarwaxremovalDerby;
