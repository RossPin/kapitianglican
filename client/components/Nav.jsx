import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

function Nav(props) {
  
  return (
    <div id="menu">
      <ul>
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to="/Services"><span style={{color: '#F4914E', fontWeight: 'bold'}}>Sunday Services</span></Link>
        </li><li><Link to="/Values"><span style={{color: '#F4914E', fontWeight: 'bold'}}>Parish Values</span></Link>
          <ul>
            <ul>
              <li><Link to="/Parish"><span style={{color: '#F4914E', fontWeight: 'bold'}}>Parish Groups</span></Link></li>
            </ul>
          </ul>
        </li>
        <li><Link to="/Contact"><span style={{color: '#F4914E', fontWeight: 'bold'}}>Contacting us</span></Link></li>
        {props.auth.isAuthenticated
        ?
        <li><Link to="/"><span onClick={() => props.dispatch(logoutUser())} style={{color: '#F4914E', fontWeight: 'bold'}}>Logout</span></Link></li>
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