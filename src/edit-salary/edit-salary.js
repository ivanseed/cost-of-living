import React from 'react';

import Button from '../button/button';
import CurrencySelector from '../currency-selector/currency-selector';

import wallet from './wallet.svg';

import './edit-salary.css';

function EditSalary({ salary, updateSalary, currency, updateCurrency }) {
  let isDisabled = true;
  let formattedSalary = '';

  if (salary) {
    isDisabled = false;
    formattedSalary = parseInt(salary, 10).toLocaleString('en');
  }

  return (
    <div className="pane">
      <img className="wallet-hero" src={wallet} alt="" />
      <h2>Enter your annual income</h2>
      <div className="salary-inputs">
        <CurrencySelector value={currency} onChange={updateCurrency} />
        <input
          className="salary-input"
          type="text"
          placeholder="e.g. 25,000"
          value={formattedSalary}
          pattern="\d*"
          onChange={e => {
            const re = /^[0-9\b]+$/;

            const value = e.target.value.replace(/,/g, '');

            if (value === '' || re.test(value)) {
              updateSalary(value);
            }
          }}
        />
      </div>
      <Button
        link="/cost-of-living/choose-destination"
        isDisabled={isDisabled}
        text="Next"
        className="primary-btn"
      />
      <Button
        link="/cost-of-living"
        isDisabled={false}
        text="Previous"
        className="secondary-btn"
      />
    </div>
  );
}

export default EditSalary;
