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
            <li className={`${path === '/Services' ? 'active' : ''}`} onClick={this.collapse}><Link to='/Services'><span>Sunday Services</span></Link></li>
            <li className={`${path === '/Groups' ? 'active' : ''}`} onClick={this.collapse}><Link to='/Groups'><span>Parish Groups</span></Link></li>
            <li className={`${path === '/Contact' ? 'active' : ''}`} onClick={this.collapse}><Link to='/Contact'><span>Contacting us</span></Link></li>
            {!this.state.collapsed && <li className={`${path === '/Links' ? 'active' : ''}`} onClick={this.collapse}><Link to='/Links'><span>Links</span></Link></li>}
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
