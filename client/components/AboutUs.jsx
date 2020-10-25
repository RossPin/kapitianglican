import React from 'react'
import WhosWho from './sectionComponents/WhosWho'
import VenueHire from './sectionComponents/VenueHire'
import WhatWeAreAbout from './sectionComponents/WhatWeAreAbout'

class AboutUs extends React.Component {
  render () {
    return (
      <div className='aboutUs'>
        <WhosWho />
        <WhatWeAreAbout />
        <VenueHire />
      </div>
    )
  }
}

export default AboutUs
