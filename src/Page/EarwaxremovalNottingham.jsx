import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalNottingham/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalNottingham/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalNottingham/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalNottingham/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalNottingham/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalNottingham/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalNottingham/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalNottingham/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalNottingham/FinalCTASection";

function EarwaxremovalNottingham() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Nottingham | Expert Mobile Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Nottingham | Expert Mobile Ear Cleaning"></meta>
        <meta
          name="description"
          content="EarWeGo offers mobile ear wax removal across Nottingham. Expert, safe ear cleaning in your home or workplace. Book your appointment now."
        />
        <meta
          name="keywords"
          content="ear wax removal Nottingham ,ear cleaning Nottingham ,ear syringing Nottingham ,ear suction Nottingham"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
        <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-nottingham/" />


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

export default EarwaxremovalNottingham;
