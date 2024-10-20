import React from 'react'
import './Navbar.css'
import NavbarBelt from './NavbarBelt/NavbarBelt'
import NavbarBanner from './NavbarBanner/NavbarBanner'
import SideNav from './SideNav/SideNav'

const Navbar = () => {
  return (
    <nav className='navbar'>
<NavbarBelt/>
<NavbarBanner/>


    </nav>
  )
}

export default Navbar
