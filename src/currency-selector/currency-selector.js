import React from 'react';
import Select from 'react-select';

import './currency-selector.css';

function CurrencySelector({ onChange, value }) {
  const options = [
    { label: '£', value: '£' },
    { label: '$', value: '$' },
    { label: '€', value: '€' },
  ];

  const defaultValue = {
    label: value,
    value,
  };

  return (
    <Select
      className="currency-container"
      options={options}
      defaultValue={defaultValue}
      theme={theme => ({
        ...theme,
        borderRadius: 3,
      })}
      onChange={({ value }) => {
        onChange(value);
      }}
    />
  );
}

export default CurrencySelector;
