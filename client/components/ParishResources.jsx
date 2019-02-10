import React from 'react'

class ParishResources extends React.Component {
  render () {
    return (
      <div className='parishResources'>
        <img src='images/widePlaceholder.jpeg' className='fullWidth' />
        <div className='content'>
          <h1>Parish Resources</h1>
          <div className='tile'>
            <img src='images/placeholder.jpeg' />
            <h4>Weekly Newsletter</h4>
          </div>
          <div className='tile'>
            <img src='images/placeholder.jpeg' />
            <h4>Magazine</h4>
          </div>
          <div className='tile'>
            <img src='images/placeholder.jpeg' />
            <h4>Sermons</h4>
          </div>
          <div className='tile'>
            <img src='images/placeholder.jpeg' />
            <h4>Calender</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default ParishResources
