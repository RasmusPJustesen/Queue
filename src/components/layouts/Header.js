import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="nav-wrapper blue-grey darken-2">
      <div className="container">
        <Link to="/" className="brand-logo">Queue</Link>
      </div>
    </nav>
  ) 
}

export default Navbar