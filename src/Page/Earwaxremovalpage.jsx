import React from "react";
import { Helmet } from "react-helmet";

import HeroMicroSuction from "../components/Service/Earwaxremovalpage/HeroMicroSuction";
import MicroSuctionInfo from "../components/Service/Earwaxremovalpage/MicroSuctionInfo";
import WaxBuildUpReasons from "../components/Service/Earwaxremovalpage/WaxBuildUpReasons";
import ProcessSection from "../components/Service/Earwaxremovalpage/ProcessSection";
import SafetySection from "../components/Service/Earwaxremovalpage/SafetySection";
import AppointmentExpectations from "../components/Service/Earwaxremovalpage/AppointmentExpectations";

function Earwax() {
  return (
    <>
      {/* ✅ Basic SEO meta tags for Ear Wax Removal page */}
      <Helmet>
        <title>Micro-Suction Ear Wax Removal | EarWeGo</title>
        <meta
          name="description"
          content="Experience safe and professional micro-suction ear wax removal with EarWeGo. Our trained clinicians use modern techniques for quick, pain-free ear care at home."
        />
        <meta
          name="keywords"
          content="ear wax removal, micro suction, ear cleaning, home ear care, safe ear treatment, EarWeGo"
        />
        <meta name="robots" content="index, follow" />
         <link rel="canonical" href="https://earwego.co.uk/earwaxremovalpage/" />
         <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
      </Helmet>

      {/* ✅ Page content sections */}
      <HeroMicroSuction />
      <MicroSuctionInfo />
      <WaxBuildUpReasons />
      <ProcessSection />
      <SafetySection />
      <AppointmentExpectations />
    </>
  );
}

export default Earwax;
