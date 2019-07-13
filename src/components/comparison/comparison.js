import React from 'react';

import CalculatePercentage from '../../helpers/calculate-percentage';

import './comparison.css';

function renderExample(city, example) {
  if (!example) {
    return;
  }

  return (
    <div className="info__example">
      <span className="info__example__city">{city}</span>
      <span>{example}</span>
    </div>
  );
}

function Comparison(props) {
  const {
    home,
    away,
    homeValue,
    awayValue,
    homeEx,
    awayEx,
    img,
    heading,
    snippet,
  } = props;
  const percentage = CalculatePercentage(awayValue, homeValue);

  return (
    <div className="info-container">
      <span className="info__heading">{heading}</span>
      <img className="result-img" src={img} alt="" />
      <div className="info-examples">
        {renderExample(home, homeEx)}
        <span className="percentage">
          {percentage >= 0 ? '+' : ''}
          {percentage}%
        </span>
        {renderExample(away, awayEx)}
      </div>
      <span className="info__snippet">{snippet}</span>
    </div>
  );
}

export default Comparison;
