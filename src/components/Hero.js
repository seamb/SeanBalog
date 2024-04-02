import React from 'react';

const Hero = ({ selfsq }) => {
  return (
    <>
      <div className='about' id='hero-block'>
        <div className='about-me'>
          <p>
            As a HubSpot CRM Admin with a keen eye for detail and a knack for
            automation, Sean has a proven track record of streamlining processes
            and driving efficiency within sales, marketing, and support teams.
            With certifications in Integrating With HubSpot I: Foundations and
            completion of the HubSpot Super Admin Bootcamp, Sean stays at the
            forefront of industry trends and advancements, ensuring that her
            skills remain sharp and relevant.
            <br />
            <br />
            A seasoned professional with a passion for both innovation in
            technology and creative problem solving. Her dedication to
            continuous learning extends beyond the professional realm having
            completed Fullstack Academy's Web Development Bootcamp in Spring of
            2022.
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
            spoiling her mini schnauzer and taking in views of Denver and the
            Rocky Mountains with her partner.
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
