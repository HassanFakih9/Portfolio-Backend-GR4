// Header.js
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className='Layla'>Layla Abo Saad</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
