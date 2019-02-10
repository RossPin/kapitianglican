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
            <li className={`${path === '/WhoWeAre' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/WhoWeAre' className='menuLink'><span>Who We Are</span></Link>
              <div className='dropdownContent'>
                <Link to={path}>Link 1</Link>
                <Link to={path}>Link 2</Link>
                <Link to={path}>Link 3</Link>
              </div>
            </li>
            <li className={`${path === '/WhatWeDo' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/WhatWeDo' className='menuLink'><span>What We Do</span></Link>
              <div className='dropdownContent'>
                <Link to={path}>Link 1</Link>
                <Link to={path}>Link 2</Link>
                <Link to={path}>Link 3</Link>
              </div>
            </li>
            <li className={`${path === '/PersonalNeeds' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/PersonalNeeds' className='menuLink'><span>Personal Needs</span></Link>
              <div className='dropdownContent'>
                <Link to={path}>Link 1</Link>
                <Link to={path}>Link 2</Link>
                <Link to={path}>Link 3</Link>
              </div>
            </li>
            <li className={`${path === '/ChurchServices' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/ChurchServices' className='menuLink'><span>Church Services</span></Link>
              <div className='dropdownContent'>
                <Link to={path}>Link 1</Link>
                <Link to={path}>Link 2</Link>
                <Link to={path}>Link 3</Link>
              </div>
            </li>
            <li className={`${path === '/ParishResources' ? 'active' : ''} dropdown`} onClick={this.collapse}>
              <Link to='/ParishResources' className='menuLink'><span>Parish Resources</span></Link>
              <div className='dropdownContent'>
                <Link to={path}>Link 1</Link>
                <Link to={path}>Link 2</Link>
                <Link to={path}>Link 3</Link>
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
