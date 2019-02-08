import React from 'react'
import { Parallax } from 'react-parallax'
import KeyPeople from './KeyPeople'
import ParishGroups from './ParishGroups'
import MissionVisionValues from './MissionVisionValues'

class WhoWeAre extends React.Component {
  render () {
    return (
      <div className='whoWeAre'>
        <Parallax bgImage='images/GroupPhoto.jpeg' strength={500} >
          <div className='parallaxContent' style={{ height: 400 }}>
            <h1>Key People</h1>
          </div>
        </Parallax>
        <KeyPeople />
        <img src='images/missionVision.jpg' className='fullWidth' />
        <MissionVisionValues />
        <img src='images/kapiti.jpg' className='fullWidth' />
        <ParishGroups />
      </div>
    )
  }
}

export default WhoWeAre
