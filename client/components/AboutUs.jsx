import React from 'react'
import WhosWho from './sectionComponents/WhosWho'
import ParishGroups from './sectionComponents/ParishGroups'
import MissionVisionValues from './sectionComponents/MissionVisionValues'

class AboutUs extends React.Component {
  render () {
    return (
      <div className='aboutUs'>
        <WhosWho />
        <MissionVisionValues />
        <ParishGroups />
      </div>
    )
  }
}

export default AboutUs
