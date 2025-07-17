import React from 'react';

const image = 'https://i.ibb.co/QjJyj9zw/sabrinaira-photo2.jpg';

const Header = () => (
  <header>
    <h1 className=''>Hello!</h1>
    {/* <nav className='nav'>
      <ul className='links'>
        <li></li>
      </ul>
    </nav> */}
    <div className='photo'>
      <img src={image} />
    </div>
  </header>
);

export default Header;
