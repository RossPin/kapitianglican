import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      width: window.window.innerWidth
    }
  }

  componentDidMount() {    
    window.addEventListener('resize', () => this.setState({width: window.window.innerWidth}))
  }

  render () {
    return (
      <div id="header">
        <div id="logo">
          <h1><Link to="/">Anglican Parish of Kapiti</Link></h1>        
        </div>
        {this.state.width < 768 && <img src="/images/img03.jpg" alt="" />} 
      </div>
    )
  }
}

export default Header