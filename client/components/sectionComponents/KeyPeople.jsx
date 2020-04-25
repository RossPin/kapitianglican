import React from 'react'
import { Parallax } from 'react-parallax'

class KeyPeople extends React.Component {
  render () {
    return (
      <div className='keyPeople'>
        <Parallax bgImage='images/GroupPhoto.jpeg' strength={500} >
          <div className='parallaxContent' style={{ height: 400 }}>
            <h2>Key People</h2>
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
      </div>
    )
  }
}

export default KeyPeople
