import React from 'react'
import { Link } from 'react-router-dom'
import Services from './Services'

class WhatsHappening extends React.Component {
  render () {
    return (
      <div className='WhatsHappening'>
        <div className='content'>
          <h2>What's Happening</h2>
          <Services />
        </div>
      </div>
    )
  }
}

export default WhatsHappening
