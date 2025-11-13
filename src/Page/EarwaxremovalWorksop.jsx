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
        <title>Ear Wax Removal Worksop | Safe & Gentle Ear Cleaning </title>
        <meta name="title" content="Ear Wax Removal Worksop | Safe & Gentle Ear Cleaning "></meta>
        <meta
          name="description"
          content="Service	Book mobile ear wax removal in Worksop with EarWeGo. Safe, gentle ear cleaning wherever you are. Schedule your appointment today."
        />
        <meta
          name="keywords"
          content="ear wax removal worksop"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
         <link rel="canonical" href="https://www.earwego.co.uk/areas-we-cover/ear-wax-removal-worksop/" />

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
