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
        <title>Ear Wax Removal Chesterfield | Expert Ear Cleaning Specialists</title>
        <meta name="title" content="Ear Wax Removal Chesterfield | Expert Ear Cleaning Specialists"></meta>
        <meta
          name="description"
          content="Choose EarWeGo for mobile ear wax removal in Chesterfield. Expert ear cleaning in the comfort of your home. Request your appointment now."
        />
        <meta
          name="keywords"
          content="ear wax removal chesterfield , ear cleaning chesterfield"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
      <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-chesterfield/" />

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
