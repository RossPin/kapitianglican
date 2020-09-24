import React from 'react'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import Notices from './Notices'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Parallax bgImage='images/Kapiti_island.jpg' strength={500} >
          <div className='parallaxContent' style={{ height: 400 }}>
            <h2>Welcome to the Home page for Kapiti Anglicans.</h2>
          </div>
        </Parallax>
        <div className='about'>
          <p>We are a worshipping community of three churches, eight congregations and 100’s of people, who are looking to welcome, grow and transform themselves and their local community here on the beautiful Kapiti Coast. We love Jesus and are growing to become more like him in every aspect, as we do life together. Our size means we have some diversity in expressions of worship, discipleship and mission, so there is bound to be something that will help you belong in the way that best suits you. This website will give you a taster of who we are and what we do. So why not get to know us and give us opportunity to get to know you by joining us for worship or one of the many activities we run in or for the community- we would love to meet you and your family!</p>
          <div className='tileBoard'>
            <Link className='parishTile' to={'/location/stPauls'}><h4>St Paul's</h4><img src='images/stPauls.jpeg' /></Link>
            <Link className='parishTile mid' to={'/location/stMarks'}><h4>St Mark's</h4><img src='images/stMarks.jpeg' /></Link>
            <Link className='parishTile' to={'/location/stPeters'}><h4>St Peters</h4><img src='images/stPeters.jpeg' /></Link>
          </div>
        </div>
        <Parallax bgImage='images/Raumati-Dune.jpg' strength={500} >
          <div className='parallaxContent' style={{ height: 400 }}>
            <h2>Notices</h2>
          </div>
        </Parallax>
        <Notices history={this.props.history} />
      </div>
    )
  }
}

export default Home
