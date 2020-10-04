import React from 'react'
import PlayGroup from './sectionComponents/PlayGroup'
import FoodCoOp from './sectionComponents/FoodCoOp'
import RestHomeMinistry from './sectionComponents/RestHomeMinistry'
import Loved4Life from './sectionComponents/Loved4Life'
import GamesAfternoon from './sectionComponents/GamesAfternoon'
import AlphaCourses from './sectionComponents/AlphaCourses'
import VenueHire from './sectionComponents/VenueHire'

class ServingKapiti extends React.Component {
  render () {
    return (
      <div className='ServingKapiti'>
        <PlayGroup />
        <Loved4Life />
        <FoodCoOp />
        <RestHomeMinistry />
        <GamesAfternoon />
        <AlphaCourses />
        <VenueHire />
      </div>
    )
  }
}

export default ServingKapiti
