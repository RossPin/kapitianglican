import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

function Nav(props) {
  
  return (
    <div id="menu">
      <ul>
        <li className="active"><a href="http://www.kapitianglican.org.nz/#">Home</a></li>
        <li><a href="http://www.kapitianglican.org.nz/Sunday%20Services.html"><span style={{color: '#F4914E', fontWeight: 'bold'}}>Sunday Services</span></a>
        </li><li><a href="http://www.kapitianglican.org.nz/Values.html"><span style={{color: '#F4914E', fontWeight: 'bold'}}>Parish Values</span></a>
          <ul>
            <ul>
              <li><a href="http://www.kapitianglican.org.nz/Parish%20Groups.html"><span style={{color: '#F4914E', fontWeight: 'bold'}}>Parish Groups</span></a></li>
            </ul>
          </ul>
        </li>
        <li><a href="http://www.kapitianglican.org.nz/Contact.html"><span style={{color: '#F4914E', fontWeight: 'bold'}}>Contacting us</span></a></li>
        {props.auth.isAuthenticated
        ?
        <li><Link to="/login"><span onClick={() => props.dispatch(logoutUser())} style={{color: '#F4914E', fontWeight: 'bold'}}>Logout</span></Link></li>
        :
        <li><Link to="/login"><span style={{color: '#F4914E', fontWeight: 'bold'}}>Login</span></Link></li>
        }
      </ul>    
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Nav)