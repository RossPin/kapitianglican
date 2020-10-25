import React from 'react'

class AlphaCourses extends React.Component {
  render () {
    return (
      <div className='alphaCourses'>
        <img src='images/widePlaceholder.jpeg' className='fullWidth' />
        <div className='content'>
          <h2>Alpha Course</h2>
          <p>ALPHA is a great way to ask the big questions of life in a safe, hospitable environment, with food to boot. Kapiti Anglicans run regular ALPHA courses. Contact the office for details of our next course.</p>
        </div>
        <img src='images/widePlaceholder.jpeg' className='fullWidth' />
        <div className='content'>
          <h2>Alpha Marriage Course</h2>
          <p>Here at Kapiti Anglicans we love to see people flourish in every aspect of their lives including their personal relationships. In the Anglican Marriage service, attendees often say they will support a couple now and in the years ahead. We do this practically by offering pastoral support through our clergy team and we regularly run the Alpha Marriage course to invest in strengthening marriages. Contact the Office for details of the next Marriage course.</p>
        </div>
      </div>
    )
  }
}

export default AlphaCourses