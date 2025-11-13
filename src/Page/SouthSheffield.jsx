import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/SouthSheffield/Hero";
import ServingAreasSection from "../components/Service/SouthSheffield/ServingAreasSection";
import WhyChooseSection from "../components/Service/SouthSheffield/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/SouthSheffield/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/SouthSheffield/AppointmentSteps";
import PricingSection from "../components/Service/SouthSheffield/PricingSection";
import PatientCareSection from "../components/Service/SouthSheffield/PatientCareSection";
import FAQSection from "../components/Service/SouthSheffield/FAQSection";
import FinalCTASection from "../components/Service/SouthSheffield/FinalCTASection";

function SouthSheffield() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal South Sheffield | Reliable Ear Cleaning Experts</title>
        <meta name="title" content="Ear Wax Removal South Sheffield | Reliable Ear Cleaning Experts"></meta>
        <meta
          name="description"
          content="EarWeGo offers mobile ear wax removal in South Sheffield. Reliable, expert ear cleaning at your convenience. Book your appointment today."
        />
        <meta
          name="keywords"
          content="ear wax removal Sheffield ,  ear cleaning Sheffield  , ear syringing sheffield"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
          <link rel="canonical" href="https://www.earwego.co.uk/earwax-removal-southsheffield/" />
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

export default SouthSheffield;
