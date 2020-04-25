import React from 'react'

class MessyChurch extends React.Component {
  render () {
    return (
      <div className='messyChurch'>
        <img src='images/messyChurch.jpg' className='fullWidth borderHz' />
        <div className='content'>
          <h2>Messy Church</h2>
          <p><strong>4pm Third Sunday of the month - St Paul’s </strong></p>
          <p><strong>Messy Church is:</strong></p>
          <ul>
            <li>About growing and connecting generations in a creative fun loving way, as we explore God’s story together.</li>
            <li>A place for everyone to enjoy from the single elderly person to the youngest member of the family.</li>
            <li>A monthly celebration which includes, creative games craft, laughter, eating and a time of creative celebration through story interactive prayer, song and being family.</li>
          </ul>
          <p>From a parent <em>“Messy gives our family a time to be family, learning God’s story together”.</em></p>
          <p>From a 5 year old on his first experience <em>“This is soooo… cool!”.</em></p>
          <p>From a 70+ single person <em>“Messy is great because it gave me the opportunity to be with younger people and share some of the things I have done in my life and she (a 12 year old) was actually interested”.</em></p>
          <p>From a 90+ single woman <em>“Messy is very special, and I don’t like missing it”.</em></p>
          <p><strong>For more information contact Carrole on 04 904 7300. </strong><a href='https://www.facebook.com/messy.churchkapiti' target='_blank'>Facebook</a></p>
        </div>
      </div>
    )
  }
}

export default MessyChurch
