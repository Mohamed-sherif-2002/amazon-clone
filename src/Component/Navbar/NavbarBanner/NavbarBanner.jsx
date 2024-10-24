import React from 'react';
import { Link } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import './NavbarBanner.css';

const NavbarBanner = ({ toggleSideNav }) => {
  return (
    <div className='navbarbanner'>
      <div className='navbarBannerleft'>

        {/* "All" option triggers sidebar toggle */}
        <div className='optionsNavbarBanner' onClick={toggleSideNav}>
          <IoMenuSharp className='iconall' />
          <h5 className='textOptionsNavbarBanner'>All</h5>
        </div>

        <Link to={'Prime'} className='optionsNavbarBanner' >
          <h5 className='textOptionsNavbarBanner'> Prime </h5>
          <div className='prime-img'>
            <IoMdArrowDropdown className='iconp' />
          </div>
        </Link>

        <Link to={'clothes'}  className='optionsNavbarBanner'>
            <h5 className='textOptionsNavbarBanner'>Clothes</h5>
          </Link>


          < Link to={'electronics'} className='optionsNavbarBanner'>
            <h5 className='textOptionsNavbarBanner'>Electronics</h5>
          </Link>

          <Link to={'furniture '} className='optionsNavbarBanner'>
            <h5 className='textOptionsNavbarBanner'>Furniture</h5>
          </Link>


          <Link to={'Shoes '} className='optionsNavbarBanner'>
            <h5 className='textOptionsNavbarBanner'>Shoes</h5>
          </Link>



        </div>

      <div className='navbarBannerright'>
        <img src='./navbarBanner.png' width={'415px'} height={'41px'} alt="Navbar Banner" />
      </div>
    </div>
  );
};

export default NavbarBanner;