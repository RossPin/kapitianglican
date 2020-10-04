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
          <div className='tile'>
            <Link to='/WhatsHappening/Newsletter'><img src='images/placeholder.jpeg' /></Link>
            <h4>Weekly Newsletter</h4>
          </div>          
          <div className='tile'>
            <Link to='/WhatsHappening/Sermons'><img src='images/placeholder.jpeg' /></Link>
            <h4>Sermons</h4>
          </div>
          <div className='tile'>
            <Link to='/WhatsHappening/Calendar'><img src='images/placeholder.jpeg' /></Link>
            <h4>Calender</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default WhatsHappening
