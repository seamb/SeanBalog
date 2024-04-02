import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='Nav'>
      <div className='title'>
        <div className='name'>sean balog</div>
        <div className='profess'>
          Technologist | CRM Super Admin <br></br> Sales Enablement Specialist
        </div>
      </div>
      <ul className='nav-menu'>
        <li>
          <a href='#hero-block' className='nav-link'>
            ABOUT
          </a>
        </li>
        <li>
          <a href='#wrkflows' className='nav-link'>
            CRM WORKFLOWS
          </a>
        </li>
        <li>
          <a href='#app-scripts' className='nav-link'>
            APP SCRIPTS
          </a>
        </li>
        <li>
          <a href='#projects' className='nav-link'>
            WEB PROJECTS
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

export default NavBar;
