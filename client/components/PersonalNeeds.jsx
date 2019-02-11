import React from 'react'
import FuneralMarriageBaptism from './sectionComponents/FuneralMarriageBaptism'
import PastoralCare from './sectionComponents/PastoralCare'
import ParishPrayer from './sectionComponents/ParishPrayer'
import Loved4Life from './sectionComponents/Loved4Life'
import PrayersSquares from './sectionComponents/PrayersSquares'

class PersonalNeeds extends React.Component {
  render () {
    return (
      <div className='personalNeeds'>
        <FuneralMarriageBaptism />
        <PastoralCare />
        <ParishPrayer />
        <Loved4Life />
        <PrayersSquares />
      </div>
    )
  }
}

export default PersonalNeeds
