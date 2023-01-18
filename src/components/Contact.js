import React from 'react';

const Contact = ({ squareLogo, weather, quotes, meals }) => {
  return (
    <>
      <div className='other' id='beige-block'>
        <p>
          <strong>Let's get in touch </strong>
          <br />
          Interested in talking shop or working together?
        </p>
        <div className='contact'>
          <ul>
            <li>
              <a
                href='mailto:seam.b22@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                EMAIL
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/sean-balog/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LINKEDIN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
