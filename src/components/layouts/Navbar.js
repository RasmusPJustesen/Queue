import React from 'react'

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Queue</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">item1</a></li>
        <li><a href="#">item2</a></li>
        <li><a href="#">item3</a></li>
      </ul>
    </div>
  ) 
}

export default Navbar