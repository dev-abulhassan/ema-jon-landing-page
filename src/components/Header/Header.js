import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
   return (
      <nav className='header'>
         <a href="/home"><img src={logo} alt="logo" /></a>
         <div className='category'>
            <a href="/home">Home</a>
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
         </div>
      </nav>
   );
};

export default Header;