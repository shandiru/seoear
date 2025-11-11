import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalLeicester/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalLeicester/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalLeicester/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalLeicester/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalLeicester/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalLeicester/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalLeicester/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalLeicester/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalLeicester/FinalCTASection";

function EarwaxremovalLeicester() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal in Leicester | EarWeGo</title>
        <meta
          name="description"
          content="Professional ear wax removal in Leicester using safe micro-suction. Home visits available with trained clinicians. Restore your hearing clarity today."
        />
        <meta
          name="keywords"
          content="ear wax removal Leicester, microsuction Leicester, home ear care, EarWeGo, ear cleaning Leicester"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
          <link rel="canonical" href="https://earwego.co.uk/earwax-removal-leicester" />
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

export default EarwaxremovalLeicester;
