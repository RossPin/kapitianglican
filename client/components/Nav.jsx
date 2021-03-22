import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: true,
      expanded: {
        drop1: false,
        drop2: false,
        drop3: false
      }
    }
    this.toggle = this.toggle.bind(this)
    this.collapse = this.collapse.bind(this)
  }

  toggle () {
    let collapsed = this.state.collapsed
    this.setState({ collapsed: !collapsed })
  }

  collapse () {
    this.setState({
      collapsed: true,
      expanded: {
        drop1: false,
        drop2: false,
        drop3: false
      }
    })
  }

  toggleExpand (dropdown) {
    const expanded = this.state.expanded
    this.setState({ expanded: {
      drop1: (dropdown === 1) ? !expanded.drop1 : false,
      drop2: (dropdown === 2) ? !expanded.drop2 : false,
      drop3: (dropdown === 3) ? !expanded.drop3 : false
    } })
  }

  render () {
    const path = this.props.location.pathname
    const expanded = this.state.expanded
    return (
      <div id='menu'>
        <div>
          <div id='collapse' onClick={this.toggle}>{this.state.collapsed ? '=' : 'X'}</div>
          <div >
            <ul className={this.state.collapsed ? '' : 'show'}>
              <li className={`${path === '/' ? 'active' : ''}`} onClick={this.collapse}><Link to='/' className='menuLink'><span>Home</span></Link></li>
              <li className={`${path === '/AboutUs' ? 'active' : ''} dropdown`}>
                <div className='menuLink'><span className='expandButton' onClick={() => this.toggleExpand(1)}>{expanded.drop1 ? '-' : '+'}</span><span>About Us</span></div>
                <div className={`dropdownContent ${expanded.drop1 ? 'dropdownExpand' : ''}`} onClick={this.collapse}>
                  <Link to='/WhatWeAreAbout'>What We Are About</Link>
                  <Link to='/WhosWho'>Who's Who</Link>
                  <Link to='/OurChurches'>Our Churches and Congregations</Link>
                  <Link to='/Gallery'>Picture Gallery</Link>
                  <Link to='/Contact'>Contact Us</Link>
                </div>
              </li>
              <li className={`${path === '/WhatsHappening' ? 'active' : ''} dropdown`}>
                <div className='menuLink'><span className='expandButton' onClick={() => this.toggleExpand(2)}>{expanded.drop2 ? '-' : '+'}</span><span>What's Happening</span></div>
                <div className={`dropdownContent ${expanded.drop2 ? 'dropdownExpand' : ''}`} onClick={this.collapse}>
                  <Link to='/Services'>Service times</Link>
                  <Link to='/ParishPrayer'>Parish Prayer</Link>
                  <Link to='/SpiritualDirection'>Spiritual Direction</Link>
                  <Link to='/SmallGroups'>Small Groups</Link>
                  <Link to='/PastoralCare'>Pastoral Care</Link>
                </div>
              </li>
              <li className={`${path === '/ChildrenAndFamilies' ? 'active' : ''} dropdown`} onClick={this.collapse}>
                <Link to='/ChildrenAndFamilies' className='menuLink'><span>Children and Families</span></Link>
              </li>
              <li className={`${path === '/ServingKapiti' ? 'active' : ''} dropdown`}>
                <div className='menuLink'><span className='expandButton' onClick={() => this.toggleExpand(3)}>{expanded.drop3 ? '-' : '+'}</span><span>Serving Kapiti</span></div>
                <div className={`dropdownContent ${expanded.drop3 ? 'dropdownExpand' : ''}`} onClick={this.collapse}>
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
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default withRouter(connect(mapStateToProps)(Nav))
