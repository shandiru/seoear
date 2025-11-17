import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalNuneaton/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalNuneaton/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalNuneaton/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalNuneaton/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalNuneaton/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalNuneaton/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalNuneaton/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalNuneaton/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalNuneaton/FinalCTASection";

function EarwaxremovalNuneaton() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Nuneaton | Gentle & Professional Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Nuneaton | Gentle & Professional Ear Cleaning"></meta>
        <meta
          name="description"
          content="EarWeGo provides mobile ear wax removal in Nuneaton. Gentle, safe ear cleaning by our professional team. Book your appointment today."
        />
        <meta
          name="keywords"
          content="ear wax removal nuneaton , ear syringing nuneaton ,ear cleaning nuneaton"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
       <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-nuneaton/" />


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

export default EarwaxremovalNuneaton;
