import React from 'react'
import WhosWho from './sectionComponents/WhosWho'
import ParishGroups from './sectionComponents/ParishGroups'
import MissionVisionValues from './sectionComponents/MissionVisionValues'

class WhoWeAre extends React.Component {
  render () {
    return (
      <div className='whoWeAre'>
        <WhosWho />
        <MissionVisionValues />
        <ParishGroups />
      </div>
    )
  }
}

export default WhoWeAre
