import React from 'react';
import '../styles/header.module.css'
import image from '../assets/sabby_profile_image.jpg'

const Header = () => (
  <header>
    <h1>About Me</h1>
    {/* <nav className='nav'>
      <ul className='links'>
        <li></li>
      </ul>
    </nav> */}
    <img className='image' src={image} />
  </header>
);

export default Header;
