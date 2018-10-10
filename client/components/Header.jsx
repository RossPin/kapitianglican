import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  
  return (
    <div id="header">
      <div id="logo">
        <h1><Link to="/">Anglican Parish of Kapiti</Link></h1>
        <h2>Website</h2>
      </div>    
    </div>
  )
}

export default Header