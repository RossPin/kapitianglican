import React from 'react'
import PlayGroup from './sectionComponents/PlayGroup'
import FoodCoOp from './sectionComponents/FoodCoOp'
import RestHomeMinistry from './sectionComponents/RestHomeMinistry'
import ParishPrayer from './sectionComponents/ParishPrayer'
import SmallGroups from './sectionComponents/SmallGroups'
import Loved4Life from './sectionComponents/Loved4Life'
import PrayersSquares from './sectionComponents/PrayersSquares'

class ServingKapiti extends React.Component {
  render () {
    return (
      <div className='ServingKapiti'>
        <PlayGroup />
        <FoodCoOp />
        <RestHomeMinistry />
        <ParishPrayer />
        <SmallGroups />
        <Loved4Life />
        <PrayersSquares />
      </div>
    )
  }
}

export default ServingKapiti
