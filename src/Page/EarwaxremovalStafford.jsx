import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalStafford/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalStafford/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalStafford/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalStafford/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalStafford/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalStafford/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalStafford/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalStafford/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalStafford/FinalCTASection";

function EarwaxremovalStafford() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal in Stafford | EarWeGo</title>
        <meta
          name="description"
          content="Professional ear wax removal in Stafford using safe micro-suction. Home visits available with trained clinicians. Restore your hearing clarity today."
        />
        <meta
          name="keywords"
          content="ear wax removal Stafford, microsuction Stafford, home ear care, EarWeGo, ear cleaning Stafford"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
          <link rel="canonical" href="https://earwego.co.uk/earwax-removal-Stafford" />
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

export default EarwaxremovalStafford;
