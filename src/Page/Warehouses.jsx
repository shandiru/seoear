import React from "react";
import { Helmet } from "react-helmet";

import WarehouseLogisticsHero from "../components/Service/Warehouses/WarehouseLogisticsHero";
import WarehouseHearingScreeningIntro from "../components/Service/Warehouses/WarehouseHearingScreeningIntro";
import WhyHearingScreeningWarehousing from "../components/Service/Warehouses/WhyHearingScreeningWarehousing";
import WhatOurHearingScreeningIncludes from "../components/Service/Warehouses/WhatOurHearingScreeningIncludes";
import WhoThisServiceIsForWarehousing from "../components/Service/Warehouses/WhoThisServiceIsForWarehousing";
import WarehouseHearingCTA from "../components/Service/Warehouses/WarehouseHearingCTA";
function Warehouses() {
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

      <WarehouseLogisticsHero />
      <WarehouseHearingScreeningIntro />
      <WhyHearingScreeningWarehousing />
        <WhatOurHearingScreeningIncludes />
        <WhoThisServiceIsForWarehousing />
        <WarehouseHearingCTA />
        

      {/* ✅ Page Sections */}
    
    </>
  );
}

export default Warehouses;
