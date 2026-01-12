import React from "react";
import { Helmet } from "react-helmet";

import ConstructionHero from "../components/Service/Construction/ConstructionHero";
import ConstructionHearingScreening from "../components/Service/Construction/ConstructionHearingScreening";
import HearingScreeningCards from "../components/Service/Construction/HearingScreeningCards";
import WhatHappensDuringTest from "../components/Service/Construction/WhatHappensDuringTest";
import WhoThisServiceIsFor from "../components/Service/Construction/WhoThisServiceIsFor";
import ArrangeHearingScreeningCTA from "../components/Service/Construction/ArrangeHearingScreeningCTA";
import FAQSection from "../components/Service/Construction/FAQSection";
function Construction() { 
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Hearing Screening for Construction Sites | On-Site Workplace Hearing Tests</title>
        <meta 
          name="title" 
          content="Hearing Screening for Construction Sites | On-Site Workplace Hearing Tests" 
        />
        <meta
          name="description"
          content="Protect workers on construction and civil engineering sites with on-site hearing screening. Ensure safety, HSE compliance, and early detection of hearing issues."
        />
        <meta
          name="keywords"
          content="construction hearing tests, site hearing screening, workplace hearing tests, construction safety hearing tests"
        />
        <meta name="robots" content="index, follow" />
        <meta 
          name="google-site-verification" 
          content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" 
        />
        <link rel="canonical" href="https://earwego.co.uk/services/construction/" />
      </Helmet>

      {/* ✅ Page Sections */}
      <ConstructionHero />
      <ConstructionHearingScreening />
      <HearingScreeningCards />
      <WhatHappensDuringTest />
      <WhoThisServiceIsFor />
      <FAQSection />
      <ArrangeHearingScreeningCTA />
    </>
  );
}

export default Construction;
