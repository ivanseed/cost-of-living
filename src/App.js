import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import EditHome from './components/edit-home/edit-home';
import EditSalary from './components/edit-salary/edit-salary';
import EditAway from './components/edit-destination/edit-destination';
import Result from './components/result/result';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Disclaimer from './components/disclaimer/disclaimer';

import data from './data/cities.json';

import './App.css';

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
        <Header />
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/disclaimer" exact component={Disclaimer} />
          <Route
            path="/choose-home"
            exact
            render={() => <EditHome options={options} {...home} />}
          />
          <Route
            path="/add-salary"
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
            path="/choose-destination"
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
            path="/result"
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
