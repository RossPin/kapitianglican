import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

function Nav(props) {
  const path = props.location.pathname
  return (
    <div id="menu">
      <ul>
        <li className={path === '/' ? 'active' : ''}><Link to="/"><span>Home</span></Link></li>
        <li className={path === '/Services' ? 'active' : ''}><Link to="/Services"><span>Sunday Services</span></Link></li>
        <li className={path === '/Values' ? 'active' : ''}><Link to="/Values"><span>Parish Values</span></Link></li>         
        <li className={path === '/Groups' ? 'active' : ''}><Link to="/Groups"><span>Parish Groups</span></Link></li>         
        <li className={path === '/Contact' ? 'active' : ''}><Link to="/Contact"><span>Contacting us</span></Link></li>
        {props.auth.isAuthenticated
        ?
        <li><Link to="/"><span onClick={() => props.dispatch(logoutUser())}>Logout</span></Link></li>
        :
        <li className={path === '/login' ? 'active' : ''}><Link to="/login"><span>Login</span></Link></li>
        }
      </ul>    
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Nav)