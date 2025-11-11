import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalWorksop/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalWorksop/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalWorksop/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalWorksop/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalWorksop/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalWorksop/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalWorksop/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalWorksop/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalWorksop/FinalCTASection";

function EarwaxremovalWorksop() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal in Worksop | EarWeGo</title>
        <meta
          name="description"
          content="Professional ear wax removal in Worksop using safe micro-suction. Home visits available with trained clinicians. Restore your hearing clarity today."
        />
        <meta
          name="keywords"
          content="ear wax removal Worksop, microsuction Worksop, home ear care, EarWeGo, ear cleaning Worksop"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
          <link rel="canonical" href="https://earwego.co.uk/earwax-removal-Worksop" />
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

export default EarwaxremovalWorksop;
