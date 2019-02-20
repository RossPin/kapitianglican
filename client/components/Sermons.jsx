import React from 'react'

class Sermons extends React.Component {
  render () {
    return (
      <div className='Sermons'>
        <img src='images/Sermons.jpg' className='fullWidth' />
        <div className='content'>
          <h1>Sermons</h1>
          <h2>Latest</h2>
          <a href='sample.mp3' target='_blank'>
            <img src='images/SundaySermon.jpeg' />
          </a>
          <h2>Archive</h2>
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
