import React from 'react';

import CitySelector from '../city-selector/city-selector';
import Button from '../button/button';

import city from './city.svg';

import './edit-home.css';

function EditHome({ options, onChange, value }) {
  let isDisabled = true;

  if (value !== null) {
    isDisabled = false;
  }

  return (
    <div className="pane">
      <img className="city-hero" src={city} alt="" />
      <h2>Select your home city</h2>
      <CitySelector options={options} onChange={onChange} value={value} />
      <Button
        link="/add-salary"
        isDisabled={isDisabled}
        text="Next"
        className="primary-btn"
      />
    </div>
  );
}

export default EditHome;
