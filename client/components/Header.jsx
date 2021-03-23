import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'

class Header extends React.Component {
  constructor (props) {
    super(props)    
  }

  componentDidMount () {
    if (this.props.auth.isAuthenticated === false && this.props.location && this.props.location.pathname !== '/password') {
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

export default connect(mapStateToProps)(Header)
