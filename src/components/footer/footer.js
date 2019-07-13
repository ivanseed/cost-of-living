import React from 'react';

import numbeo from './numbeo.svg';

import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <img className="numbeo-logo" src={numbeo} alt="" />
      <span>
        Data powered by{' '}
        <a href="https://numbeo.com" target="_blank" rel="noopener noreferrer">
          Numbeo
        </a>{' '}
        - last updated July 2019.{' '}
        <a
          href="https://github.com/ivanseed/cost-of-living/blob/master/LICENSE.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          License.
        </a>
      </span>
    </div>
  );
}

export default Footer;
