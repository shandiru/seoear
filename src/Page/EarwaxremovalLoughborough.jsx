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
                <title>Ear Wax Removal in Loughborough | EarWeGo</title>
                <meta
                    name="description"
                    content="Professional ear wax removal in Loughborough using safe micro-suction. Home visits available with trained clinicians. Restore your hearing clarity today."
                />
                <meta
                    name="keywords"
                    content="ear wax removal Loughborough, microsuction Loughborough, home ear care, EarWeGo, ear cleaning Loughborough"
                />
                <meta name="robots" content="index, follow" />
                <meta name="google-site-verification" content="ZSdPnc9hEmCcaSGgqWkfB-xJaSEbqzxr3k99I19tV8I" />
                <link rel="canonical" href="https://www.earwego.co.uk/earwax-removal-loughborough/" />
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
