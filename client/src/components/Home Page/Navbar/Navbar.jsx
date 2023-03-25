import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-container'>
        <NavLink id='nav-link' to='/Home'>Home</NavLink>
        <NavLink id='nav-link' to='/AddNote'>Add Note</NavLink>
        <NavLink id='nav-link'>Delete All</NavLink>
        <NavLink id='nav-link'>Export</NavLink>
    </div>
  )
}

export default Navbar