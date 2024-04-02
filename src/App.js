import React from 'react';

import NavBar from './components/NavBar';
import RightNav from './components/RightNav';
import Banner from './components/Banner';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Scripts from './components/Scripts';
import Workflows from './components/Workflows';
import Contact from './components/Contact';

import './App.css';
import squareLogo from './square.png';
import selfsq from './selfsquare.png';
import teckstack from './techstack.png';
import weather from './weatherApp.png';
import quotes from './quoteApp.png';
import profapp from './seanbalog-site.png';
import scriptSS from './app-script.png';
import leadroute from './LeadRWF.png';

function App() {
  return (
    <>
      <div className='App'>
        <RightNav />
        <NavBar />
        <Banner />
        <Hero squareLogo={squareLogo} selfsq={selfsq} teckstack={teckstack} />
        <Workflows leadroute={leadroute} />
        <Scripts scriptSS={scriptSS} />
        <Projects
          squareLogo={squareLogo}
          weather={weather}
          quotes={quotes}
          profapp={profapp}
        />
        <Contact />
      </div>

      <footer className='Footer_Box'>
        <img src={squareLogo} alt='square logo' />
      </footer>
    </>
  );
}

export default App;
