import React from 'react'

class Services extends React.Component {
  render () {
    return (
      <div className='services'>
        <img src='images/img03.jpg' className='fullWidth' />
        <div className='content'>
          <h1>Sunday Service Worship Times</h1>
          <div className='section'>
            <p><strong>Every 5th Sunday of any month there is a Combined Parish Service at St Paul’s at 10am. There are no other services in the Parish on these Sundays.</strong></p>
            <h2>St Mark’s Church, Rosetta Road, Raumati</h2>
            <p><strong>9.30am - </strong>Traditional Family service with Holy Communion (with an integrated Children’s programme)</p>
            <p><strong>5pm Every second Sunday of the month - </strong>Choral Evensong</p>
            <h2>St Peter’s Church, Beach Road, Paekakariki</h2>
            <p><strong>10am - </strong>Traditional Family service with Holy Communion</p>
          </div>
          <div className='section'>
            <h2>St Paul’s Church, Kapiti Road, Paraparaumu</h2>
            <p><strong>8am - </strong>Holy Communion: <ul><li>1st & 3rd Sundays—Book of Common Prayer</li><li>2nd & 4th Sundays—New Zealand Prayer Book</li></ul></p>
            <p><strong>9.30am - </strong>Traditional Family service with Holy Communion (with an integrated Children’s programme)</p>
            <p><strong>11am - </strong>Family service with Holy Communion</p>
            <p><strong>7pm First Sunday of the month - </strong>Stillpoint (A Contemplative service)</p>
            <p><strong>4pm Third Sunday of the month - </strong>Messy Church (in the Parish Hall, St Paul’s)</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
