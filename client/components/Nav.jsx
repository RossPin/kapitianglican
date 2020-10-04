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
                <Link to='/OurChurches'>Our Churches and Congregations</Link>
                <Link to='/VenueHire'>Venue Hire</Link>
                <Link to='/Gallery'>Picture Gallery</Link>
              </div>
            </li>
            <li className={`${path === '/WhatsHappening' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/WhatsHappening' className='menuLink'><span>What's Happening</span></Link>
              <div className='dropdownContent'>
                <Link to='/Services'>Service times</Link>                
                <Link to='/ParishPrayer'>Parish Prayer</Link>
                <Link to='/SmallGroups'>Small Groups</Link>
                <Link to='/PastoralCare'>Pastoral Care</Link>
                <Link to='/WhatsHappening/Sermons'>Sermons</Link>
                <Link to='/WhatsHappening/Newsletter'>Newsletter</Link>
                <Link to='/WhatsHappening/Calendar'>Calendar</Link>
              </div>
            </li>
            <li className={`${path === '/ChildrenAndFamilies' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/ChildrenAndFamilies' className='menuLink'><span>Children and Families</span></Link>
              <div className='dropdownContent'>
                <Link to='/Sundays'>Sundays</Link>
                <Link to='/FourPlusMore'>4+More</Link>
                <Link to='/SchoolsSupport'>SchoolsSupport</Link>
                <Link to='/PlayGroup'>Play Group</Link>
              </div>
            </li>
            <li className={`${path === '/ServingKapiti' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/ServingKapiti' className='menuLink'><span>Serving Kapiti</span></Link>
              <div className='dropdownContent'>
                <Link to='/PlayGroup'>Play Group</Link>
                <Link to='/Loved4Life'>Loved 4 Life</Link>
                <Link to='/FoodCo-op'>Kapiti Fruit and Vege Coop</Link>
                <Link to='/RestHomeMinistry'>Rest Home Ministry</Link>
                <Link to='/GamesAfternoon'>Games Afternoon</Link>
                <Link to='/ALphaCourses'>Alpha and Alpha Marriage Courses</Link>
                <Link to='/VenueHire'>Venue Hire</Link>
              </div>
            </li>            
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
