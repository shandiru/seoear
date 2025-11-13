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
        <title>Ear Wax Removal Stafford | Expert & Safe Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Stafford | Expert & Safe Ear Cleaning"></meta>
        <meta
          name="description"
          content="Trust EarWeGo for mobile ear wax removal in Stafford. Expert, gentle ear cleaning in the comfort of your home. Book your appointment today."
        />
        <meta
          name="keywords"
          content="ear wax removal Stafford , ear syringing Stafford ,ear cleaning Stafford"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
         <link rel="canonical" href="https://www.earwego.co.uk/areas-we-cover/ear-wax-removal-stafford/" />

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
