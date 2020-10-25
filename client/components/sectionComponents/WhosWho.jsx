import React from 'react'
import { Parallax } from 'react-parallax'

class WhosWho extends React.Component {
  render () {
    return (
      <div className='WhosWho'>
        <Parallax bgImage='images/GroupPhoto.jpeg' strength={500} >
          <div className='parallaxContent' style={{ height: 400 }}>
            <h2>Who’s who</h2>
          </div>
        </Parallax>
        <div className='content'>          
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Parish Wardens- Sheridan David and Mary Cropp</h4>
          </div>
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Parish Administrator- Vickie Riceman</h4>
          </div>
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Archdeacon Julie Rokotakala, vicar</h4>
          </div>
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Reverend Lynda Wards,  Associate Priest, Responsible for St Peter’s, Parish Prayer and Parish wide pastoral care</h4>
          </div>
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Reverends Barbara and John Bonifant, Priest Assistants, Responsible for St Mark’s</h4>
          </div>
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Reverend Fee Thomson,  Associate Priest, Children and Families Minister</h4>
          </div>
          <div className='tile'>
            <img src='images/Character_Placeholder.png' alt='images/Character_Placeholder.png' />
            <h4>Reverend Willie Brown, Priest Assistant, responsible for Parish Evensong Service</h4>
          </div>          
          <div className='clearLeft'>
            <h2>Ministry leaders</h2>
              <ul>
                <li>Small groups/Rest Home ministry: Kathleen Fleck</li>
                <li>Playgroup: Katie Lewis</li>
                <li>Kapiti Fruit and Vege Coop: Christine Bull</li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default WhosWho
