import React from "react";
import { Helmet } from "react-helmet";

import WarehouseLogisticsHero from "../components/Service/Warehouses/WarehouseLogisticsHero";
import WarehouseHearingScreeningIntro from "../components/Service/Warehouses/WarehouseHearingScreeningIntro";
import WhyHearingScreeningWarehousing from "../components/Service/Warehouses/WhyHearingScreeningWarehousing";
import WhatOurHearingScreeningIncludes from "../components/Service/Warehouses/WhatOurHearingScreeningIncludes";
import WhoThisServiceIsForWarehousing from "../components/Service/Warehouses/WhoThisServiceIsForWarehousing";
import WarehouseHearingCTA from "../components/Service/Warehouses/WarehouseHearingCTA";
import FAQSection from "../components/Service/Warehouses/FAQSection";
function Warehouses() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
       <title>Hearing Screening for Warehouses & Logistics | Workplace Hearing Tests</title>
        <meta 
          name="title" 
          content="Hearing Screening for Warehouses & Logistics | Workplace Hearing Tests" 
        />
        <meta
          name="description"
          content="Protect staff wellbeing with hearing screening for warehouses and logistics centres. Workplace hearing tests for operatives, drivers, and supervisors."
        />
        <meta
          name="keywords"
          content="warehouse hearing screening, logistics hearing tests, workplace hearing tests, industrial hearing screening"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
    <link rel="canonical" href="https://earwego.co.uk/services/warehouses/" />


      </Helmet>

      <WarehouseLogisticsHero />
      <WarehouseHearingScreeningIntro />
      <WhyHearingScreeningWarehousing />
        <WhatOurHearingScreeningIncludes />
        <WhoThisServiceIsForWarehousing />
        <FAQSection />
        <WarehouseHearingCTA />
        

      {/* ✅ Page Sections */}
    
    </>
  );
}

export default Warehouses;
