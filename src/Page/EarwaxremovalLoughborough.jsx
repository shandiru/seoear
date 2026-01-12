import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalLoughborough/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalLoughborough/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalLoughborough/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalLoughborough/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalLoughborough/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalLoughborough/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalLoughborough/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalLoughborough/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalLoughborough/FinalCTASection";

function EarwaxremovalLoughborough() {
    return (
        <>
            {/* ✅ SEO Metadata */}
            <Helmet>
                <title>Ear Wax Removal Loughborough | Trusted Ear Cleaning Service</title>
                <meta name="title" content="Ear Wax Removal Loughborough | Trusted Ear Cleaning Service"></meta>
                <meta
                    name="description"
                    content="Book mobile ear wax removal in Loughborough with EarWeGo. Trusted, effective ear cleaning where you are. Request your appointment now."
                />
                <meta
                    name="keywords"
                    content="ear wax removal Loughborough , ear cleaning Loughborough , ear syringing loughborough"
                />
                <meta name="robots" content="index, follow" />
                <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
           <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-loughborough/" />

             <script type="application/ld+json">
          {`
                
 {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you cover nearby areas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we visit Shelthorpe, Quorn, Hathern, Barrow upon Soar, Mountsorrel, Sileby and other nearby villages across Leicestershire."
      }
    },
    {
      "@type": "Question",
      "name": "How long does treatment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Around 30 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Is microsuction safe for hearing aid users?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it’s clean and safe for people who wear hearing aids."
      }
    },
    {
      "@type": "Question",
      "name": "Can both ears be done at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, both can be treated during a single visit for £60."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I get an appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually within a few days in Loughborough and nearby areas."
      }
    }
  ]
}

        `}
        </script>
            </Helmet>

            {/* ✅ Page Sections */}
            <EarWaxHero />
            <ServingAreasSection />
            <WhyChooseSection />
            <MicrosuctionComparison />
            <AppointmentSteps />
            <PricingSection />
            <PatientCareSection />
            <FAQSection />
            <FinalCTASection />
        </>
    );
}

export default EarwaxremovalLoughborough;
