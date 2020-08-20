  
import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Queue</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/profile' className="btn btn-floating blue lighten-1">RP</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks