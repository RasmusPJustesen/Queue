import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (loggedin) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Queue</Link>
        {loggedin? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  )
}

export default Navbar