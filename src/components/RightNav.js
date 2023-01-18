import React from 'react';
import './NavBar.css';

const RightNav = () => {
  return (
    <div className='right-nav'>
      <ul className='burger-menu'>
        <li>
          <a href='#hero-block' className='nav-link'>
            ABOUT
          </a>
        </li>
        <li>
          <a href='#projects' className='nav-link'>
            PROJECTS
          </a>
        </li>
        <li>
          <a href='#beige-block' className='nav-link'>
            CONTACT ME
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RightNav;
