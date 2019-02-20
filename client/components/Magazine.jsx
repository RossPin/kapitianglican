import React from 'react'

class Magazine extends React.Component {
  render () {
    return (
      <div className='magazine'>
        <img src='images/widePlaceholder.jpeg' className='fullWidth' />
        <div className='content'>
          <h1>Magazine</h1>
          <h2>Latest</h2>
          <a href='http://kapitianglican.org.nz/contact.pdf' target='_blank'>
            <img src='images/Magazine.png' />
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

export default Magazine
