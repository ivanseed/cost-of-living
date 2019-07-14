import React from 'react';

import Button from '../button/button';

import secure from './secure.svg';
import compare from './compare.svg';
import open from './open.svg';

import './home.css';

function Home() {
  return (
    <div className="pane pane--home">
      <div className="get-started">
        <h1>Compare the cost of living of 370+ cities from across the world</h1>
        <Button
          link="/choose-home"
          isDisabled={false}
          text="Start Comparing"
          className="primary-btn primary-btn--result"
        />
        <span className="disclaimer">
          This is not financial advice, always do your own independent research.
        </span>
      </div>
      <div className="home-info">
        <img className="compare-img" src={compare} alt="Compare" />
        <span className="home-info__text">
          Compare cities and see how much you'd need to earn to maintain the
          same standard of living
        </span>
      </div>
      <div className="home-info">
        <img className="secure-img" src={secure} alt="Secure" />
        <span className="home-info__text">
          Privacy is important to all of us, that is why we don't collect or
          track any of the data you enter
        </span>
      </div>
      <div className="home-info">
        <img className="open-source-img" src={open} alt="Open Source" />
        <span className="home-info__text">
          Want to contribute? This app is open source, you can find the project{' '}
          <a
            href="https://github.com/ivanseed/cost-of-living"
            className="contributing__link"
          >
            on GitHub
          </a>
        </span>
      </div>
    </div>
  );
}

export default Home;
