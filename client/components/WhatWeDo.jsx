import React from 'react'
import PlayGroup from './sectionComponents/PlayGroup'
import FoodCoOp from './sectionComponents/FoodCoOp'
import RestHomeMinistry from './sectionComponents/RestHomeMinistry'
import ParishPrayer from './sectionComponents/ParishPrayer'
import SpecialEvents from './sectionComponents/SpecialEvents'
import Loved4Life from './sectionComponents/Loved4Life'
import PrayersSquares from './sectionComponents/PrayersSquares'

class WhatWeDo extends React.Component {
  render () {
    return (
      <div className='whatWeDo'>
        <PlayGroup />
        <FoodCoOp />
        <RestHomeMinistry />
        <ParishPrayer />
        <SpecialEvents />
        <Loved4Life />
        <PrayersSquares />
      </div>
    )
  }
}

export default WhatWeDo