import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="Header nav-wrapper blue-grey darken-2">
      <div className="container">
        <Link to="/" className="brand-logo center">Queue</Link>
      </div>
    </nav>
  ) 
}

export default Header