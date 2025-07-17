import React from 'react';

const image = "https://i.ibb.co/QjJyj9zw/sabrinaira-photo2.jpg"

const Header = () => (
  <header>
    <h1 className=''>About Me</h1>
    {/* <nav className='nav'>
      <ul className='links'>
        <li></li>
      </ul>
    </nav> */}
    <img src={image} />
  </header>
);

export default Header;
