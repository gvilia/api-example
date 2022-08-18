import React, { useState, Fragment } from 'react';
import Select from 'react-select';
import classes from './SelectOptions.module.css';

const SelectOptions = (props) => {
  const [country, setCountry] = useState({
    value: 'GB',
    label: 'United Kingdom',
  });

  const changeCountryHandler = (value) => {
    setCountry(value);
  };

  const currentCountry = () => {
    props.currentCountry(country);
  };

  const countries = [
    { value: 'GB', label: 'United Kingdom' },
    { value: 'US', label: 'United States' },
    { value: 'DE', label: 'Germany' },
    { value: 'ES', label: 'Spain' },
  ];

  return (
    <Fragment>
      <h2>Select Country</h2>
      <Select
        name="countries"
        id="countries"
        options={countries}
        defaultValue={{ value: 'GB', label: 'United Kingdom' }}
        onChange={changeCountryHandler}
      />
      <button className={classes.mt} onClick={currentCountry}>
        Show holidays
      </button>
    </Fragment>
  );
};

export default SelectOptions;
