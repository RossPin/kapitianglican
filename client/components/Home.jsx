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
            <h1>Welcome to our community</h1>
          </div>
        </Parallax>
        <div className='about'>
          <h2 >Changes to Services During COVID-19</h2>
          <div >
            <p>All church services are currently suspended until a return to level 2 on the Coved-19 alert scale. In the meantime we are hosting church@home.</p>
            <h4>Morning Prayer - 8.30am Mon to Fri</h4>
            <p><a target='_blank' href='https://us04web.zoom.us/j/703543297'>https://us04web.zoom.us/j/703543297</a> or <a target='_blank' href='https://www.zoom.us/'>https://www.zoom.us</a>. Please click on JOIN A MEETING (top right). The Meeting ID is 703 543 297.</p>
            <h4>Night prayer - 8pm Mon to Fri</h4>
            <p><a target='_blank' href='https://us04web.zoom.us/j/162960012'>https://us04web.zoom.us/j/162960012</a> or <a target='_blank' href='https://www.zoom.us/'>https://www.zoom.us</a>. Please click on JOIN A MEETING (top right). The Meeting ID is 162 960 012.</p> 
            <h4>Short Communion Service- Sunday 8.30am</h4>
            <p><a target='_blank' href='https://us04web.zoom.us/j/163441912'>https://us04web.zoom.us/j/163441912</a> or <a target='_blank' href='https://www.zoom.us/'>https://www.zoom.us</a>. Please click on JOIN A MEETING (top right). The Meeting ID is 163 441 912.</p> 
            <h4>Wider Church Online Service - Sunday 10am</h4>
            <p>Live stream on <a target='_blank' href='https://movementonline.org.nz/'>Anglican Movement</a> or Freeview channel 200.</p>
          </div>
          <h2>Who we are</h2>
          <p>We are a growing, mission shaped, multigenerational, multicultural parish that is open to a mixture of expressions of being Church. We aim to bring Christ into the community and the community to Christ. The love of Christ comes before all else. We strive to reflect a life style that is distinctive, counter cultural, authentic and attractive.</p>
          <div>
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
