import React from 'react'

class Newsletter extends React.Component {
  render () {
    return (
      <div className='newsletter'>
        <img src='images/widePlaceholder.jpeg' className='fullWidth' />
        <div className='content'>
          <h1>Weekly Newsletter</h1>
          <h2>Latest</h2>
          <a href='http://kapitianglican.org.nz/weeklynewssheet.pdf' target='_blank'>
            <img src='images/Newsletter.png' />
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

export default Newsletter
