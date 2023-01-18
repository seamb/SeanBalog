import React from 'react';

const Hero = ({ selfsq }) => {
  return (
    <>
      <div className='about' id='hero-block'>
        <div className='about-me'>
          <p>
            Sean Balog is brand new to the world of full-stack development
            having completed Fullstack Academy's Web Development Bootcamp in
            Spring of 2022. An artist and design enthusiast, Sean is naturally
            drawn to front-end development and aims to create beautiful, well
            thought applications.
            <br />
            {/* <br />
                Prior to tech, Sean spent almost a decade in Colorado's cannabis
                industry. Finding solutions to never seen before problems was
                commonplace and thinking outside of the box was a constant as
                she pioneered through the unique challenges of a budding
                industry.
                <br /> */}
            <br />
            Outside of work you'll find Sean singing along to 90's hits,
            spoiling her mini schnauzer and taking in views of the Rocky
            Mountains with her partner.
          </p>
        </div>
        <div className='photo-quote'>
          <div className='greet'>
            <strong>Hello! </strong>
          </div>

          <img className='mePic' src={selfsq} alt='seanB' />

          <br />
          <div className='welcome-quote'>
            Thanks for visiting my <br />
            little slice of the internet, <br />I am so happy to have you!
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
