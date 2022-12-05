import React , {useState, useEffect} from 'react';
import {FaBars, FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram } from 'react-icons/fa';
import {BsChatSquareDots} from 'react-icons/bs';


const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <a href='/'>Home</a>
        </li>
        <li>
            <a href='/'>Gallery</a>
        </li>
        <li>
            <a href='/'>Deals</a>
        </li>
        <li>
            <a href='/'>Contact</a>
        </li>
      </ul>
      <div>
        <FaFacebookF/>
        <FaGooglePlusG />
        <FaTwitter />
        <FaInstagram />
      </div>
    </div>
  )
}

export default Navbar
