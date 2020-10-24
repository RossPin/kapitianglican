import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Footer extends React.Component {
  constructor (props) {
    super(props)    
  }

  render () {
    return (
      <div>
        {this.props.auth.isAuthenticated &&
        <div className='footer'>
          <div className='rightLink'>
            <Link to='/ParishResources/Calendar'>Calendar</Link>
          </div>
          <ul>
            <li><a href='https://www.facebook.com/Anglican-Parish-of-Kapiti-112319898809569/' target='_blank'>Kapiti Anglican Facebook Page</a></li>
            <li><a href='http://movementonline.org.nz/' target='_blank'>Movement Online</a></li>
          </ul>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Footer)
