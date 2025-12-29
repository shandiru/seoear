import React from 'react'
import IndustrialHero from '../components/HearingScreening/IndustrialHero'
import IndustrialDescription from '../components/HearingScreening/IndustrialDescription'
import WhyScreening from '../components/HearingScreening/WhyScreening'
import HearingProgramme from '../components/HearingScreening/HearingProgramme'
import ServiceFor from '../components/HearingScreening/ServiceFor'
import HearingScreeningCTA from '../components/HearingScreening/HearingScreeningCTA'

const HearingScreening = () => {
  return (
    <div>
      <IndustrialHero />
      <IndustrialDescription />
      <WhyScreening />
      <HearingProgramme />
      <ServiceFor />
      <HearingScreeningCTA />
    </div>
  )
}

export default HearingScreening
