import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <h1>LOGO</h1>
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
      </ul>
    </nav>
  )
}

export default Nav
