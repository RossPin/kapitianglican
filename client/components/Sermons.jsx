import React from 'react'

class Sermons extends React.Component {
  render () {
    return (
      <div className='Sermons'>
        <img src='images/Sermons.jpg' className='fullWidth' />
        <div className='content'>
          <h2>Sermons</h2>
          <h3>Latest</h3>
          <a href='sample.mp3' target='_blank'>
            <img src='images/SundaySermon.jpeg' />
          </a>
          <h3>Archive</h3>
          <ul>
            <li>DD/MM/YY</li>
            <li>DD/MM/YY</li>
            <li>DD/MM/YY</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sermons
