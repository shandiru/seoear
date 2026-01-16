import React from 'react';
import { Helmet } from 'react-helmet';

import IndustrialHearingHero from '../components/IndustrialHearing/IndustrialHearingHero';
import HearingBenefits from '../components/IndustrialHearing/HearingBenefits';
import IndustrialHearingInfo from '../components/IndustrialHearing/IndustrialHearingInfo';
import HearingTestProcess from '../components/IndustrialHearing/HearingTestProcess';
import HearingScreeningAudience from '../components/IndustrialHearing/HearingScreeningAudience';
import WhatYouReceive from '../components/IndustrialHearing/WhatYouReceive';
import FAQSection from '../components/IndustrialHearing/FAQSection';
import CTASection from '../components/IndustrialHearing/CTASection';

const IndustrialHearing = () => {
  return (
    <div>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Industrial Hearing Screening | Workplace Health & Safety Hearing Tests</title>
        <meta 
          name="title" 
          content="Industrial Hearing Screening | Workplace Health & Safety Hearing Tests" 
        />
        <meta
          name="description"
          content="Protect your workforce with industrial hearing screening. On-site hearing tests for factories, construction sites, warehouses, workshops, and processing facilities."
        />
        
        <meta name="robots" content="index, follow" />
        <meta 
          name="google-site-verification" 
          content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" 
        />
        <link rel="canonical" href="https://earwego.co.uk/industrial/" />
      </Helmet>

      {/* ✅ Page Sections */}
      <IndustrialHearingHero />
      <HearingBenefits />
      <IndustrialHearingInfo />
      <HearingTestProcess />
      <HearingScreeningAudience />
      <WhatYouReceive />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default IndustrialHearing;
