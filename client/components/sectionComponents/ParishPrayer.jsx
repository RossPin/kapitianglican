import React from 'react'

class ParishPrayer extends React.Component {
  render () {
    return (
      <div className='parishPrayer'>
        <img src='images/widePlaceholder.jpeg' className='fullWidth' />
        <div className='content'>
          <h2>Prayer</h2>
          <p>We are a prayerful church with many opportunities for growth in individual and corporate prayer on offer through the year. We encourage a variety of creative approaches to prayer and connecting with God.</p>
          <p><strong>Friday Parish Prayer Group</strong><br />
          Every Friday in the Parish Lounge, 1 Langdale Ave at 11am
          </p>
          <p><strong>Sunday Personal Prayer Ministry during or after Services</strong><br />
          We value the opportunity to pray with people and offer opportunity during communion and after our Sunday services as well as by appointment with one of our clergy team. If you have need please 
          </p>
          <p><strong>The Parish Prayer Chain</strong><br />
          We have a group of people who pray for needs in their own homes as part of chain. When a confidential prayer request is received it goes out to members of the chain who pray for that need. Prayer often continues for need over long periods and we appreciate updates so our prayers remain fresh and relevant. Contact office for details of coordinator.
          </p>
          <p><strong>The Upper Room</strong><br />
          A dedicated prayer space at St Paul’s on the mezzanine, set up with prayer stations to facilitate your prayer. Available for private prayer 9-2pm tues-Friday or by arrangement with the office.
          </p>
        </div>
      </div>
    )
  }
}

export default ParishPrayer
