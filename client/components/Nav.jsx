import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: true
    }
    this.toggle = this.toggle.bind(this)
    this.collapse = this.collapse.bind(this)
  }

  toggle () {
    let collapsed = this.state.collapsed
    this.setState({ collapsed: !collapsed })
  }

  collapse () {
    this.setState({ collapsed: true })
  }

  render () {
    const path = this.props.location.pathname
    return (

      <div id='menu'>
        <div id='collapse' onClick={this.toggle}>{this.state.collapsed ? '=' : 'X'}</div>
        <div >
          <ul className={this.state.collapsed ? '' : 'show'}>
            <li className={`${path === '/' ? 'active' : ''}`} onClick={this.collapse}><Link to='/' className='menuLink'><span>Home</span></Link></li>
            <li className={`${path === '/AboutUs' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/AboutUs' className='menuLink'><span>About Us</span></Link>
              <div className='dropdownContent'>
                <Link to='/WhatWeAreAbout'>What We Are About</Link>
                <Link to='/WhosWho'>Who's Who</Link>
                <Link to='/ParishGroups'>Parish Groups</Link>
              </div>
            </li>
            <li className={`${path === '/WhatWeDo' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/WhatWeDo' className='menuLink'><span>What We Do</span></Link>
              <div className='dropdownContent'>
                <Link to='/PlayGroup'>Play Group</Link>
                <Link to='/FoodCo-op'>Food Co-op</Link>
                <Link to='/RestHomeMinistry'>Rest Home Ministry</Link>
                <Link to='/ParishPrayer'>Parish Prayer</Link>
                <Link to='/SpecialEvents'>Special Events</Link>
                <Link to='/Loved4Life'>Loved 4 Life</Link>
                <Link to='/PrayersSquares'>Prayers & Squares</Link>
              </div>
            </li>
            <li className={`${path === '/PersonalNeeds' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/PersonalNeeds' className='menuLink'><span>Personal Needs</span></Link>
              <div className='dropdownContent'>
                <Link to='/FuneralMarriageBaptism'>Funeral Marriage Baptism</Link>
                <Link to='/PastoralCare'>Pastoral Care</Link>
                <Link to='/ParishPrayer'>Parish Prayer</Link>
                <Link to='/Loved4Life'>Loved 4 Life</Link>
                <Link to='/PrayersSquares'>Prayers & Squares</Link>
              </div>
            </li>
            <li className={`${path === '/ChurchServices' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/ChurchServices' className='menuLink'><span>Church Services</span></Link>
              <div className='dropdownContent'>
                <Link to='/location/stPauls'>St Paul's</Link>
                <Link to='/location/stMarks'>St Mark's</Link>
                <Link to='/location/stPeters'>St Peter's</Link>
                <Link to='/MessyChurch'>MessyChurch</Link>
                <Link to='/Stillpoint'>Stillpoint</Link>
                <Link to='/Evensong'>Evensong</Link>
              </div>
            </li>
            <li className={`${path === '/ParishResources' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/ParishResources' className='menuLink'><span>Parish Resources</span></Link>
              <div className='dropdownContent'>
                <Link to='/ParishResources/Newsletter'>Newsletter</Link>
                <Link to='/ParishResources/Magazine'>Magazine</Link>
                <Link to='/ParishResources/Sermons'>Sermons</Link>
                <Link to='/ParishResources/Calendar'>Calendar</Link>
              </div>
            </li>
            <li className={`${path === '/Gallery' ? 'active' : ''}`} onClick={this.collapse}><Link to='/Gallery' className='menuLink'><span>Gallery</span></Link></li>
            <li className={`${path === '/FoodCo-op' ? 'active' : ''}`} onClick={this.collapse}><Link to='/FoodCo-op' className='menuLink'><span>Food Co-op</span></Link></li>
            <li className={`${path === '/Contact' ? 'active' : ''}`} onClick={this.collapse}><Link to='/Contact' className='menuLink'><span>Contact us</span></Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
