import React from 'react'
import KeyPeople from './sectionComponents/KeyPeople'
import ParishGroups from './sectionComponents/ParishGroups'
import MissionVisionValues from './sectionComponents/MissionVisionValues'

class WhoWeAre extends React.Component {
  render () {
    return (
      <div className='whoWeAre'>
        <KeyPeople />
        <MissionVisionValues />
        <ParishGroups />
      </div>
    )
  }
}

export default WhoWeAre
