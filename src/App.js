import React, { useState, useEffect, useCallback, Fragment } from 'react';

import './App.css';

import HolidaysList from './components/HolidaysList';
import SelectOptions from './components/SelectOptions';

function App() {
  const [holidays, setHolidays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHolidaysHandler = useCallback(async (country) => {
    if (country === undefined) {
      country = {
        value: 'GB',
        label: 'United Kingdom',
      };
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://date.nager.at/api/v3/NextPublicHolidays/${country.value}`,
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        },
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedHolidays = [];

      for (const key in data) {
        loadedHolidays.push({
          id: key,
          date: data[key].date,
          intName: data[key].name,
        });
      }

      setHolidays(loadedHolidays);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchHolidaysHandler();
  }, [fetchHolidaysHandler]);

  let content = <p>You need to search for holidays.</p>;

  if (holidays.length > 0) {
    content = <HolidaysList holidays={holidays} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <section>
        <SelectOptions currentCountry={fetchHolidaysHandler} />
      </section>

      <section>{content}</section>
    </Fragment>
  );
}

export default App;
