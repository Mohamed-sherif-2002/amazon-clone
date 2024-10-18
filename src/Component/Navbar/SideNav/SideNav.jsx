

import React from 'react'
import './SideNav.css'
import { FaUserAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const SideNav = () => {
  return (
    
      
      <div className='sidebar-container-navigation ' >

        <div className='sidebar-left-part'>
          <div className='sidebar-top'>
            <div className='sidebar-topicon'><FaUserAlt /></div>
            <div className='sidebar-toptext'><h2>Hello,<span> Sign in</span></h2></div>

          </div>

          


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
            <p>Mobiles, Tablets & Accessories</p>
            <p>omputers & Office Supplies</p>
            <p>TVs & Electronics</p>
            <p>Women's Fashion</p>
          </div>

          <div className='sidebar-item'>
            <h2>Programs & Features</h2>
            <p>Today's Deals</p>
            <p>Amazon Outlet</p>
            <p>Sell on Amazon</p>

          </div>

</div>


        </div>


        <button id='sidebar-close'>
          <IoClose />
        </button>

    </div>
  )
}
  

export default SideNav
