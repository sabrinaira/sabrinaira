import React from 'react';
import styles from '../styles/header.module.css'
import image from '../assets/sabby_profile_image.jpg'

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.text}>About Me</h1>
    {/* <nav className='nav'>
      <ul className='links'>
        <li></li>
      </ul>
    </nav> */}
    <img className={styles.img} src={image} />
  </header>
);

export default Header;
