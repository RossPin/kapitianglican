import React from 'react'

class Newsletter extends React.Component {
  render () {
    return (
      <div className='newsletter'>
        <div className='content'>
          <h2>Weekly Newsletter</h2>
          <h3>Latest</h3>
          <a href='http://kapitianglican.org.nz/weeklynewssheet.pdf' target='_blank'>
            <img src='images/Newsletter.png' />
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

export default Newsletter
