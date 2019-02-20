import React from 'react'
import { Link } from 'react-router-dom'

class ParishResources extends React.Component {
  render () {
    return (
      <div className='parishResources'>
        <img src='images/widePlaceholder.jpeg' className='fullWidth' />
        <div className='content'>
          <h1>Parish Resources</h1>
          <div className='tile'>
            <Link to='/ParishResources/Newsletter'><img src='images/placeholder.jpeg' /></Link>
            <h4>Weekly Newsletter</h4>
          </div>
          <div className='tile'>
            <Link to='/ParishResources/Magazine'><img src='images/placeholder.jpeg' /></Link>
            <h4>Magazine</h4>
          </div>
          <div className='tile'>
            <Link to='/ParishResources/Sermons'><img src='images/placeholder.jpeg' /></Link>
            <h4>Sermons</h4>
          </div>
          <div className='tile'>
            <Link to='/ParishResources/Calendar'><img src='images/placeholder.jpeg' /></Link>
            <h4>Calender</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default ParishResources
