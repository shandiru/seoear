import React from "react";
import { Helmet } from "react-helmet";

import EarWaxHero from "../components/Service/EarwaxremovalNottingham/Hero";
import ServingAreasSection from "../components/Service/EarwaxremovalNottingham/ServingAreasSection";
import WhyChooseSection from "../components/Service/EarwaxremovalNottingham/WhyChooseSection";
import MicrosuctionComparison from "../components/Service/EarwaxremovalNottingham/MicrosuctionComparison";
import AppointmentSteps from "../components/Service/EarwaxremovalNottingham/AppointmentSteps";
import PricingSection from "../components/Service/EarwaxremovalNottingham/PricingSection";
import PatientCareSection from "../components/Service/EarwaxremovalNottingham/PatientCareSection";
import FAQSection from "../components/Service/EarwaxremovalNottingham/FAQSection";
import FinalCTASection from "../components/Service/EarwaxremovalNottingham/FinalCTASection";

function EarwaxremovalNottingham() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Ear Wax Removal Nottingham | Expert Mobile Ear Cleaning</title>
        <meta name="title" content="Ear Wax Removal Nottingham | Expert Mobile Ear Cleaning"></meta>
        <meta
          name="description"
          content="EarWeGo offers mobile ear wax removal across Nottingham. Expert, safe ear cleaning in your home or workplace. Book your appointment now."
        />
        <meta
          name="keywords"
          content="ear wax removal Nottingham ,ear cleaning Nottingham ,ear syringing Nottingham ,ear suction Nottingham"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
        <link rel="canonical" href="https://earwego.co.uk/areas-we-cover/ear-wax-removal-nottingham/" />

       <script type="application/ld+json">
          {`
                  {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is microsuction safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. It is considered the safest and most effective method for ear wax removal, widely used by hearing professionals and clinics."
            }
          },
          {
            "@type": "Question",
            "name": "How often should I have wax removed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It varies from person to person, but most people benefit from treatment once or twice a year."
            }
          },
          {
            "@type": "Question",
            "name": "Can you remove wax from children's ears?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, for children aged six and over, as long as they can stay comfortable and still during the procedure."
            }
          },
          {
            "@type": "Question",
            "name": "Do you charge extra for home visits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, home visits within the Nottingham area are included in your price. Travel charges may apply outside the area."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the appointment take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Appointments typically last around 30 minutes, and most clients notice clearer hearing immediately after treatment."
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

export default EarwaxremovalNottingham;
