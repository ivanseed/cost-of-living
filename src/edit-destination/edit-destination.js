import React from 'react';

import Button from '../button/button';
import CitySelector from '../city-selector/city-selector';

import travel from './travel.svg';

import './edit-destination.css';

function EditDestination({ options, onChange, value, home }) {
  const homeCity = home[0].split(',')[0];

  let isDisabled = true;

  if (value !== null) {
    isDisabled = false;
  }

  return (
    <div className="pane">
      <img className="travel-hero" src={travel} alt="" />
      <h2>{`Compare ${homeCity} with`}</h2>
      <CitySelector options={options} onChange={onChange} value={value} />
      <Button
        link="/result"
        isDisabled={isDisabled}
        text="Results"
        className="primary-btn"
      />
      <Button
        link="/add-salary"
        isDisabled={false}
        text="Previous"
        className="secondary-btn"
      />
    </div>
  );
}

export default EditDestination;
