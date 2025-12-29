import React from 'react';
import { Helmet } from 'react-helmet';

import IndustrialHero from '../components/HearingScreening/IndustrialHero';
import IndustrialDescription from '../components/HearingScreening/IndustrialDescription';
import WhyScreening from '../components/HearingScreening/WhyScreening';
import HearingProgramme from '../components/HearingScreening/HearingProgramme';
import ServiceFor from '../components/HearingScreening/ServiceFor';
import HearingScreeningCTA from '../components/HearingScreening/HearingScreeningCTA';

const HearingScreening = () => {
  return (
    <div>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Hearing Screening for Industrial Plants & Processing Facilities | Large-Scale Hearing Tests</title>
        <meta 
          name="title" 
          content="Hearing Screening for Industrial Plants & Processing Facilities | Large-Scale Hearing Tests" 
        />
        <meta
          name="description"
          content="Protect employees in industrial plants and processing facilities with professional on-site hearing screening. Ensure compliance and safeguard workforce health."
        />
        <meta
          name="keywords"
          content="industrial hearing tests, plant hearing screening, processing facility hearing tests, large-scale hearing surveillance"
        />
        <meta name="robots" content="index, follow" />
        <meta 
          name="google-site-verification" 
          content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" 
        />
        <link rel="canonical" href="https://earwego.co.uk/services/industrial-plants" />
      </Helmet>

      {/* ✅ Page Sections */}
      <IndustrialHero />
      <IndustrialDescription />
      <WhyScreening />
      <HearingProgramme />
      <ServiceFor />
      <HearingScreeningCTA />
    </div>
  )
}

export default HearingScreening;
