import React from 'react'
import IndustrialHearingHero from '../components/IndustrialHearing/IndustrialHearingHero'
import HearingBenefits from '../components/IndustrialHearing/HearingBenefits'
import IndustrialHearingInfo from '../components/IndustrialHearing/IndustrialHearingInfo'
import HearingTestProcess from '../components/IndustrialHearing/HearingTestProcess'
import HearingScreeningAudience from '../components/IndustrialHearing/HearingScreeningAudience'
import WhatYouReceive from '../components/IndustrialHearing/WhatYouReceive'
import FAQSection from '../components/IndustrialHearing/FAQSection'
import CTASection from '../components/IndustrialHearing/CTASection'

const IndustrialHearing = () => {
  return (
    <div>
      <IndustrialHearingHero />
      <HearingBenefits />
      <IndustrialHearingInfo />
      <HearingTestProcess />
      <HearingScreeningAudience />
      <WhatYouReceive />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default IndustrialHearing
