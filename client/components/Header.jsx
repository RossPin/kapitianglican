import React from 'react'
import Nav from './Nav'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends React.Component {
  componentDidMount () {
    if (this.props.auth.isAuthenticated === false && this.props.location.pathname !== '/password') {
      this.props.history.push('/password')
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.auth.isAuthenticated === false && this.props.location.pathname !== '/password') {
      this.props.history.push('/password')
    }
  }

  render () {
    return (
      <div>
        {this.props.auth.isAuthenticated &&
        <div className='header'>
          <img className='logo' src='images/Kapiti_Anglicans_WordMark_Colour.svg' />
          <Nav location={this.props.location} />
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default withRouter(connect(mapStateToProps)(Header))
