import React from 'react'
import './NavbarBelt.css'
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
const NavbarBelt = ({ cartItemCount }) => {
  
  return (

    <div className="navbarBelt">
      <div className="leftNavBelt">
        <Link to={'/'}  className="left-NavbarBelt-Logo">
          <img className="amazonLogoNavbar" src="./amazon.png" alt="amazonLogo" width={"100px"} height={"35px"} />
          <span className="navbar-egLogo">.eg</span>
        </Link>
      </div>

      <div className="navbarBeltLocation">
        <div className="navbarBeltLocationIcon">
          <LocationOnOutlinedIcon />
        </div>
        <div className="navbarBeltLocationPlace">
          <div className="navbarBeltLocationTop">Deliver to </div>
          <div className="navbarBeltLocationBottom">Egypt</div>
        </div>
      </div>

      <div className="navbarBeltSearchBox">
        <div className='navbarBeltSearch'>
          <div className='navbarBeltSearchBoxAll'>
            <div className='navbarBeltSearchBoxAllText'>All</div>
            <IoMdArrowDropdown />

          </div>
          <input type='text' className='navbarBelt-InputSearchBox' placeholder='Search Amazon.eg' />


          <div className='navbarBelt-searchIcon'>
            <IoSearchSharp className='navbarBelt-searchIcon-Item' />

           
          </div>
        </div>
      </div>

      <div className="rightSideNavbarBelt">
        <div className='navbarBelt-Egypt'>
          <img className="navbarBelt-EgyptFlag" src='./Egypt.png' alt='Egypt Flag' width={"20px"} />
          <div className='navbarBelt-EgyptText'>En  <IoMdArrowDropdown className='iconEgypt' /></div>
        </div>



        <Link to={'/Login'}  className='navbarBelt-SignIn'>
          <div className='navbarBelt-SignInTop'> Hello,sign in</div>
          <div className='navbarBelt-SignInBottom'>
            Acconts&Lists
            <IoMdArrowDropdown className='iconSignIn' />
          </div>
        </Link>

        <Link to={'/Orders'} className='navbarBelt-Orders'>orders </Link>

        <Link to={'/Cart'} className='navbarBelt-Cart'>
  <span className='navbarBelt-CartNum'>{cartItemCount}</span>
  <div className='navbarBelt-Icon'>
    <span className='navbarBelt-CartIcon'><HiOutlineShoppingCart /></span>
    <span className='navbarBelt-CartText'>Cart</span>
  </div>
</Link>


      </div>
    </div>

  )
}

export default NavbarBelt
