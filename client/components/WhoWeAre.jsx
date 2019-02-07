import React from 'react'
import { Parallax } from 'react-parallax'

class WhoWeAre extends React.Component {
  render () {
    return (
      <div className='whoWeAre'>
        <Parallax bgImage='images/GroupPhoto.jpeg' strength={500} >
          <div className='parallaxContent' style={{ height: 400 }}>
            <h1>Key People</h1>
          </div>
        </Parallax>
        <div className='content'>
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Key Person</h4>
          </div>
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Key Person</h4>
          </div>
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Key Person</h4>
          </div>
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Key Person</h4>
          </div>
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Key Person</h4>
          </div>
        </div>
        <img src='images/kapiti.jpg' className='fullWidth' />
        <div className='content'>
          <h1>Parish Groups</h1>
          <p>There are many groups operating within the parish on a regular basis and there are many ways for people to be able to contribute to the mission and the ministry of the parish, the giving of 'Talents, Time and Treasure'.</p>
          <p><strong>"Everyone has a place</strong> <strong>and a ministry"</strong></p>
          <p>The groups reflect a multigenerational, multicultural parish. All people of all age groups are important and essential to the life of the parish. The nurturing of our young people is a responsibility of the greatest importance.</p>
          <p><a href='http://www.kapitianglican.org.nz/parishgroups.pdf' target='_blank'>Parish Groups PDF</a></p>
          <p><a href='http://www.kapitianglican.org.nz/playgroupbrochure.pdf' target='_blank'>Preschool music and playgroup PDF</a></p>
          <p><a href='http://www.kapitianglican.org.nz/messychurch.pdf' target='_blank'>Messy Church: What is it? PDF</a></p>
          <p><a href='https://www.facebook.com/messy.churchkapiti?fref=ts' target='_blank'>Messy Church (Facebook)</a></p>
          <p><a href='https://www.facebook.com/groups/111079862270162/' target='_blank'>Kapiti Anglican Youth (facebook)</a></p>
        </div>
      </div>
    )
  }
}

export default WhoWeAre
