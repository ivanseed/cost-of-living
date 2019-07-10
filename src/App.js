import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import EditHome from './edit-home/edit-home';
import EditSalary from './edit-salary/edit-salary';
import EditAway from './edit-destination/edit-destination';
import Result from './result/result';

import data from './data/cities.json';

import numbeo from './numbeo.svg';

import './App.css';

// Temp fix till hosted on dedicated site
const URI_PREFIX = "/cost-of-living";

  function useCity(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

function App() {
  const [cities] = useState(data);
  const [salary, updateSalary] = useState('');
  const [currency, updateCurrency] = useState('£');
  const home = useCity(null);
  const away = useCity(null);

  const options = useMemo(
    () =>
      cities.map((city, itr) => ({
        label: city[0],
        value: itr,
      })),
    [cities]
  );

  return (
    <Router>
      <div className="app">
        <div className="content">
          <Route
            path={`${URI_PREFIX}/`}
            exact
            render={() => <EditHome options={options} {...home} />}
          />
          <Route
            path={`${URI_PREFIX}/add-salary`}
            exact
            render={() =>
              home.value === null ? (
                <Redirect to="/" />
              ) : (
                <EditSalary
                  salary={salary}
                  currency={currency}
                  updateSalary={updateSalary}
                  updateCurrency={updateCurrency}
                />
              )
            }
          />
          <Route
            path={`${URI_PREFIX}/choose-destination`}
            exact
            render={() =>
              !salary ? (
                <Redirect to="/" />
              ) : (
                <EditAway
                  options={options}
                  home={cities[home.value]}
                  {...away}
                />
              )
            }
          />
          <Route
            path={`${URI_PREFIX}/result`}
            exact
            render={() =>
              away.value === null ? (
                <Redirect to="/" />
              ) : (
                <Result
                  home={cities[home.value]}
                  away={cities[away.value]}
                  salary={salary}
                  currency={currency}
                />
              )
            }
          />
        </div>
        <div className="footer">
          <img className="numbeo-logo" src={numbeo} alt="" />
          <span>
            Data powered by{' '}
            <a
              href="https://numbeo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Numbeo
            </a>
            . Last updated July 2019
          </span>
        </div>
      </div>
    </Router>
  );
}

export default App;
