import React from 'react';

const Projects = ({ squareLogo, weather, quotes, profapp }) => {
  return (
    <>
      <div id='projects'>
        <p>
          <strong className='project-sec'>Web Development Projects </strong>
          <br />
        </p>
        <div className='project-card-one'>
          <div className='project-image'>
            <img src={squareLogo} className='card-block' alt='deco' />
            <a
              href='https://sean-balog.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='project-app'
              id='proj-photo'
            >
              <img src={profapp} alt='projectthumb' />
            </a>
          </div>
          <div className='project-info'>
            <h3>Portfolio Site</h3> <br />
            Deployed April 2024 - Self authored professional portfolio app
            showcasing technical and creative skills. Color palette and theme
            inspired by a Portugues Azulejo tiled building in Lago PT.
            <br /> <br /> technology used: React.js
          </div>
        </div>

        <div className='project-card-two'>
          {' '}
          <div className='project-image'>
            <img src={squareLogo} className='card-block' alt='deco' />
            <a
              href='https://seamb.github.io/quote_generator/'
              target='_blank'
              rel='noopener noreferrer'
              className='project-app'
              id='proj-photo'
            >
              <img src={quotes} alt='projectthumb' />
            </a>
          </div>
          <div className='project-info'>
            <h3>Quotes to Inspire</h3> <br />
            Deployed July 2022 - A responsive, mobile friendly quote generator.
            Asynchronous fetch requests were made to an API. A Twitter
            integration was added so that users can dynamically tweet their
            favorite quotes.
            <br /> <br /> technology used: React.js, Axios Bootstrap, REST API
          </div>
        </div>
        <div className='project-card-one'>
          <div className='project-image'>
            <img src={squareLogo} className='card-block' alt='deco' />
            <br />
            <a
              href='https://whatstheweather-mycity.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='project-app'
              id='proj-photo'
            >
              <img src={weather} alt='projectthumb' />
            </a>
          </div>
          <div className='project-info'>
            <h3>What's the weather</h3> <br />
            Deployed Aug 2022 - Using Axios to make calls to the OpenWeather
            API, users can search for cities across the globe and current
            weather information is displayed in this mobile responsive app.
            <br /> <br /> technology used: JavaScript, React.js, REST API
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
