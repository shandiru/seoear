import React from 'react'
import AutomotiveHearingScreening from '../components/HearingEngineering/AutomotiveHearingScreening'
import WorkshopHearingInfo from '../components/HearingEngineering/WorkshopHearingInfo'
import WorkshopHearingImportance from '../components/HearingEngineering/WorkshopHearingImportance'
import WorkshopTestProcess from '../components/HearingEngineering/WorkshopTestProcess'
import ServiceForSection from '../components/HearingEngineering/ServiceForSection'
import BookHearingScreening from '../components/HearingEngineering/BookHearingScreening'

const HearingEngineering = () => {
  return (
    <div>
      <AutomotiveHearingScreening />
      <WorkshopHearingInfo />
      <WorkshopHearingImportance />
      <WorkshopTestProcess />
      <ServiceForSection />
      <BookHearingScreening />
    </div>
  )
}

export default HearingEngineering
