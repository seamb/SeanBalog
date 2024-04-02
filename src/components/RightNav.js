import React from 'react';
import './NavBar.css';

const RightNav = () => {
  return (
    <div className='right-nav'>
      <ul className='burger-menu'>
        <li>
          <a href='#hero-block' className='nav-link'>
            about
          </a>
        </li>
        <li>
          <a href='#wrkflows' className='nav-link'>
            workflows
          </a>
        </li>
        <li>
          <a href='#app-scripts' className='nav-link'>
            appScripts
          </a>
        </li>
        <li>
          <a href='#projects' className='nav-link'>
            development
          </a>
        </li>
        <li>
          <a href='#beige-block' className='nav-link'>
            contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RightNav;
