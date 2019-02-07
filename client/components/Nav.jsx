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
            <li className={`${path === '/' ? 'active' : ''}`} onClick={this.collapse}><Link to='/'><span>Home</span></Link></li>
            <li className={`${path === '/WhoWeAre' ? 'active' : ''}`} onClick={this.collapse}><Link to='/WhoWeAre'><span>Who We Are</span></Link></li>
            <li className={`${path === '/WhatWeDo' ? 'active' : ''}`} onClick={this.collapse}><Link to='/WhatWeDo'><span>What We Do</span></Link></li>
            <li className={`${path === '/PersonalNeeds' ? 'active' : ''}`} onClick={this.collapse}><Link to='/PersonalNeeds'><span>Personal Needs</span></Link></li>
            <li className={`${path === '/ChurchServices' ? 'active' : ''}`} onClick={this.collapse}><Link to='/ChurchServices'><span>Church Services</span></Link></li>
            <li className={`${path === '/ParishResources' ? 'active' : ''}`} onClick={this.collapse}><Link to='/ParishResources'><span>Parish Resources</span></Link></li>
            <li className={`${path === '/Gallery' ? 'active' : ''}`} onClick={this.collapse}><Link to='/Gallery'><span>Gallery</span></Link></li>
            <li className={`${path === '/FoodCo-op' ? 'active' : ''}`} onClick={this.collapse}><Link to='/FoodCo-op'><span>Food Co-op</span></Link></li>
            <li className={`${path === '/Contact' ? 'active' : ''}`} onClick={this.collapse}><Link to='/Contact'><span>Contact us</span></Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
