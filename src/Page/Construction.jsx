import React from "react";
import { Helmet } from "react-helmet";

import ConstructionHero from "../components/Service/Construction/ConstructionHero";
import ConstructionHearingScreening from "../components/Service/Construction/ConstructionHearingScreening";
import HearingScreeningCards from "../components/Service/Construction/HearingScreeningCards";
import WhatHappensDuringTest from "../components/Service/Construction/WhatHappensDuringTest";
import WhoThisServiceIsFor from "../components/Service/Construction/WhoThisServiceIsFor";
import ArrangeHearingScreeningCTA from "../components/Service/Construction/ArrangeHearingScreeningCTA";
function Construction() { 
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

      <ConstructionHero/>
    <ConstructionHearingScreening/>
    <HearingScreeningCards/>
    <WhatHappensDuringTest/>
    <WhoThisServiceIsFor/>
    <ArrangeHearingScreeningCTA/>
      

      {/* ✅ Page Sections */}
    
    </>
  );
}

export default Construction;
