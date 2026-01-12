import React from 'react';
import { Helmet } from 'react-helmet';

import AutomotiveHearingScreening from '../components/HearingEngineering/AutomotiveHearingScreening';
import WorkshopHearingInfo from '../components/HearingEngineering/WorkshopHearingInfo';
import WorkshopHearingImportance from '../components/HearingEngineering/WorkshopHearingImportance';
import WorkshopTestProcess from '../components/HearingEngineering/WorkshopTestProcess';
import ServiceForSection from '../components/HearingEngineering/ServiceForSection';
import BookHearingScreening from '../components/HearingEngineering/BookHearingScreening';
import FAQSection from '../components/HearingEngineering/FAQSection';

const HearingEngineering = () => {
  return (
    <div>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Hearing Screening for Automotive & Engineering Workshops | Workplace Hearing Tests</title>
        <meta 
          name="title" 
          content="Hearing Screening for Automotive & Engineering Workshops | Workplace Hearing Tests" 
        />
        <meta
          name="description"
          content="Protect your technicians and engineers with professional hearing screening for automotive and engineering workshops. Ensure safety and legal compliance."
        />
        <meta
          name="keywords"
          content="workshop hearing tests, automotive hearing screening, engineering hearing screening, industrial hearing tests"
        />
        <meta name="robots" content="index, follow" />
        <meta 
          name="google-site-verification" 
          content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" 
        />
        <link rel="canonical" href="https://earwego.co.uk/services/workshops/" />
      </Helmet>

      {/* ✅ Page Sections */}
      <AutomotiveHearingScreening />
      <WorkshopHearingInfo />
      <WorkshopHearingImportance />
      <WorkshopTestProcess />
      <ServiceForSection />
      <FAQSection />
      <BookHearingScreening />
    </div>
  );
};

export default HearingEngineering;
