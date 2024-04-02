import React from 'react';

import NavBar from './components/NavBar';
import RightNav from './components/RightNav';
import Banner from './components/Banner';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AppScripts from './components/AppScripts';
import Workflows from './components/Workflows';
import Contact from './components/Contact';

import './App.css';
import squareLogo from './square.png';
import selfsq from './selfsquare.png';
import weather from './weatherApp.png';
import quotes from './quoteApp.png';
import profapp from './seanbalog-site.png';
import appScripts from './app-script.png';

function App() {
  return (
    <>
      <div className='App'>
        <RightNav />
        <NavBar />
        <Banner />
        <Hero squareLogo={squareLogo} selfsq={selfsq} />
        <Workflows />
        <AppScripts appScripts={appScripts} />
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
