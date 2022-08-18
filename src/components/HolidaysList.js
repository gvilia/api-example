import React, { Fragment } from 'react';

import classes from './HolidaysList.module.css';

import Holiday from './Holiday';

const HolidaysList = (props) => {
  return (
    <Fragment>
      <h2>Public holidays for the next 365 days</h2>
      <ul className={classes['holidays-list']}>
        {props.holidays.map((holidays) => (
          <Holiday
            key={holidays.id}
            date={holidays.date}
            intName={holidays.intName}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default HolidaysList;
