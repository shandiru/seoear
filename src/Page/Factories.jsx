import React from "react";
import { Helmet } from "react-helmet";

import ServiceHero from "../components/Service/Factories/ServiceHero";
import ServiceDescription from "../components/Service/Factories/ServiceDescription";
import WhyHearingScreening from "../components/Service/Factories/WhyHearingScreening";
import OnSiteHearingTests from "../components/Service/Factories/OnSiteHearingTests";
import WhoThisServiceIsFor from "../components/Service/Factories/WhoThisServiceIsFor";
import HearingTestSection from "../components/Service/Factories/HearingTestSection";
import FAQSection from "../components/Service/Factories/FAQSection";
function Factories() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Hearing Screening for Factories & Manufacturing Plants | Workplace Hearing Tests</title>
        <meta 
          name="title" 
          content="Hearing Screening for Factories & Manufacturing Plants | Workplace Hearing Tests" 
        />
        <meta
          name="description"
          content="Protect employees with on-site hearing screening for factories and manufacturing plants. Ensure compliance with UK health & safety regulations and workplace safety."
        />
        <meta
          name="keywords"
          content="factory hearing tests, industrial hearing screening, workplace hearing tests, manufacturing hearing tests"
        />
        <meta name="robots" content="index, follow" />
        <meta 
          name="google-site-verification" 
          content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" 
        />
        <link rel="canonical" href="https://earwego.co.uk/services/factories/" />
      </Helmet>

      {/* ✅ Page Sections */}
      <ServiceHero />
      <ServiceDescription />
      <WhyHearingScreening />
      <OnSiteHearingTests />
      <WhoThisServiceIsFor />
      <FAQSection />
      <HearingTestSection />
    </>
  );
}

export default Factories;
