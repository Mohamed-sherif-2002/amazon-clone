import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

import './NavbarBanner.css'





const NavbarBanner = () => {
  return (
    
      <div className='navbarbanner'>
        <div className='navbarBannerleft'>

          <div className='optionsNavbarBanner'>
            <h5 className='textOptionsNavbarBanner'>Home</h5>
          </div>

          <div className='optionsNavbarBanner'>
            <IoMenuSharp className='iconall' />
            <h5 className='textOptionsNavbarBanner'>All</h5>
          </div>

          <div className='optionsNavbarBanner'>
            <h5 className='textOptionsNavbarBanner' to="Today's Deals">Today's Deals</h5>
          </div>


          <div className='optionsNavbarBanner'>

            <h5 className='textOptionsNavbarBanner'> Prime  </h5>
            <div className='prime-img'>
              <IoMdArrowDropdown className='iconp' />

            </div>
          </div>


          <div className='optionsNavbarBanner'>
            <h5 className='textOptionsNavbarBanner'>Clothes</h5>
          </div>


          <div className='optionsNavbarBanner'>
            <h5 className='textOptionsNavbarBanner'>Electronics</h5>
          </div>

          <div className='optionsNavbarBanner'>
            <h5 className='textOptionsNavbarBanner'>Shoeses</h5>
          </div>


          <div className='optionsNavbarBanner'>
            <h5 className='textOptionsNavbarBanner'>Furniture</h5>
          </div>



          <div className='optionsNavbarBanner'>
            <h5 className='textOptionsNavbarBanner'>Miscellaneous</h5>
          </div>






        </div>

        <div className='navbarBannerright'>
          <img src='./navbarBanner.png' width={'415px'} height={'41px'} />
        </div>










      </div>







    

  





  )
}

export default NavbarBanner
