import React from 'react'
import Nav from './Nav'

class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <img className='logo' src='images/Kapiti_Anglicans_WordMark_Colour.svg' />
        <Nav location={this.props.location} />
      </div>
    )
  }
}

export default Header
