

import React from 'react'
import { Link } from 'react-router-dom';
import './SideNav.css'
import { FaUserAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";



const SideNav = ({ isOpen, toggleSideNav }) => {

  if (!isOpen) return null;

  
  return (
    
      
      <div className='sidebar-container-navigation '  >

        <div className='sidebar-left-part'>


          <Link to={'/Login'}   className='sidebar-top' >
            <div className='sidebar-topicon'><FaUserAlt /></div>
            <div className='sidebar-toptext'><h2>Hello,<span> Sign in</span></h2></div>

          </Link>

          


          <div className='scroll'>
<div className='sidebar-item'>
            <h2>Trending</h2>
           <p>Best Sellers </p>
            <p>New Releases</p>
            <p> Movers & Shakers</p>
          </div>

          <div className='sidebar-item'>
            <h2>Digital content and devices</h2>
            <p>AMazon Kindle E-reads </p>
          
          </div>

          <div className='sidebar-item'>
            <h2>Shop by Category</h2>
      
            <p>Clothes</p>
            <p >Electronics</p>
            <p >Furniture</p>
            <p >shooses</p>
           
          </div>

          <div className='sidebar-item'>
            <h2>Programs & Features</h2>
            <p>Today's Deals</p>
            <p>Amazon Outlet</p>
            <p>Sell on Amazon</p>

          </div>

</div>


        </div>


        <button id='sidebar-close' onClick={toggleSideNav}>
          <IoClose />
        </button>

    </div>
  )
}
  

export default SideNav
