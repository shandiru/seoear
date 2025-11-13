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
