import React, { useState, useEffect } from 'react';
import './Navbar.css';
import NavbarBelt from './NavbarBelt/NavbarBelt';
import NavbarBanner from './NavbarBanner/NavbarBanner';
import SideNav from './SideNav/SideNav';

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  // Function to toggle the sidebar visibility
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };
// Fetch cart items from localStorage when the component mounts
useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
  setCartItems(Object.values(storedCart));
}, []);

// Calculate the total number of items in the cart
const cartItemCount = cartItems.length;

  return (
    <div className='navbar'>
      <NavbarBelt cartItemCount={cartItemCount} />
      <NavbarBanner toggleSideNav={toggleSideNav} />
      <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
    </div>
  );
};

export default Navbar;
