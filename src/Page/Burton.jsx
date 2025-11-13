import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/Burton/Hero";
import ServingAreasSection from "../components/Service/Burton/ServingAreasSection";
import WhyChooseSection from "../components/Service/Burton/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/Burton/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/Burton/AppointmentSteps";
import PricingSection from "../components/Service/Burton/PricingSection";
import PatientCareSection from "../components/Service/Burton/PatientCareSection";
import FAQSection from "../components/Service/Burton/FAQSection";
import FinalCTASection from "../components/Service/Burton/FinalCTASection";

function Burton() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Burton | Trusted & Effective Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Burton | Trusted & Effective Ear Cleaning"></meta>
        <meta
          name="description"
          content="Book mobile ear wax removal in Burton with EarWeGo. Trusted, effective ear cleaning at your convenience. Request your appointment today."
        />
        <meta
          name="keywords"
          content="ear wax removal burton , ear cleaning burton"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
          <link rel="canonical" href="https://www.earwego.co.uk/earwax-removal-burton/" />
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

export default Burton;
