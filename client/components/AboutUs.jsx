import React from 'react'
import WhosWho from './sectionComponents/WhosWho'
import ParishGroups from './sectionComponents/ParishGroups'
import WhatWeAreAbout from './sectionComponents/WhatWeAreAbout'

class AboutUs extends React.Component {
  render () {
    return (
      <div className='aboutUs'>
        <WhosWho />
        <WhatWeAreAbout />
        <ParishGroups />
      </div>
    )
  }
}

export default AboutUs
