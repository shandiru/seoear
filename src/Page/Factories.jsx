import React from "react";
import { Helmet } from "react-helmet";

import ServiceHero from "../components/Service/Factories/ServiceHero";
import ServiceDescription from "../components/Service/Factories/ServiceDescription";
import WhyHearingScreening from "../components/Service/Factories/WhyHearingScreening";
import OnSiteHearingTests from "../components/Service/Factories/OnSiteHearingTests";
import WhoThisServiceIsFor from "../components/Service/Factories/WhoThisServiceIsFor";
import HearingTestSection from "../components/Service/Factories/HearingTestSection";
function Factories() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Grantham | Trusted Mobile Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Grantham | Trusted Mobile Ear Cleaning"></meta>
        <meta
          name="description"
          content="EarWeGo provides mobile ear wax removal in Grantham. Trusted, effective ear cleaning at your convenience. Schedule your appointment today."
        />
        <meta
          name="keywords"
          content="ear wax removal Grantham"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
    <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-grantham/" />


      </Helmet>

      <ServiceHero />
      <ServiceDescription />
        <WhyHearingScreening />
        <OnSiteHearingTests />
        <WhoThisServiceIsFor />
        <HearingTestSection />

      {/* ✅ Page Sections */}
    
    </>
  );
}

export default Factories;
