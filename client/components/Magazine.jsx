import React from 'react'

class Magazine extends React.Component {
  render () {
    return (
      <div className='magazine'>
        <img src='images/widePlaceholder.jpeg' className='fullWidth' />
        <div className='content'>
          <h2>Magazine</h2>
          <h3>Latest</h3>
          <a href='http://kapitianglican.org.nz/contact.pdf' target='_blank'>
            <img src='images/Magazine.png' />
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

export default Magazine
