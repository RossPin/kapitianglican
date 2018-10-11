import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: true
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    let collapsed = this.state.collapsed
    this.setState({collapsed: !collapsed})
  }

  render () {
  const path = this.props.location.pathname  
  return (
    <div id="menu">
      <div id='collapse' onClick={this.toggle}>{this.state.collapsed ? '=' : 'X'}</div>
      <div id='menuList'>
      <ul className={this.state.collapsed ? '' : 'show'}>
        <li className={`${path === '/' ? 'active' : ''}`} onClick={this.toggle}><Link to="/"><span>Home</span></Link></li>
        <li className={`${path === '/Services' ? 'active' : ''}`} onClick={this.toggle}><Link to="/Services"><span>Sunday Services</span></Link></li>
        <li className={`${path === '/Values' ? 'active' : ''}`} onClick={this.toggle}><Link to="/Values"><span>Parish Values</span></Link></li>         
        <li className={`${path === '/Groups' ? 'active' : ''}`} onClick={this.toggle}><Link to="/Groups"><span>Parish Groups</span></Link></li>         
        <li className={`${path === '/Contact' ? 'active' : ''}`} onClick={this.toggle}><Link to="/Contact"><span>Contacting us</span></Link></li>
        {!this.state.collapsed && <li className={`${path === '/Contact' ? 'active' : ''}`} onClick={this.toggle}><Link to="/Links"><span>Links</span></Link></li>}
        {this.props.auth.isAuthenticated
        ?
        <li><Link to="/" onClick={this.toggle}><span onClick={() => this.props.dispatch(logoutUser())}>Logout</span></Link></li>
        :
        <li className={`${path === '/login' ? 'active' : ''}`} onClick={this.toggle}><Link to="/login"><span>Login</span></Link></li>
        }
      </ul>
      </div>    
    </div>
  )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Nav)