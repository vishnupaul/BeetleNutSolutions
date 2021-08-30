import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <footer className='section footer'>
        <p className='copyright'>
          copyright &copy;<span id='date'></span> BeetleNutSolutions.com .all
          rights reserved
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          eligendi ipsa rem maxime. Exercitationem maxime ratione vel est
          repellendus quos?
        </p>
      </footer>
    </div>
  );
};

export default Footer;
