import React from 'react';

import classes from './Holiday.module.css';

const Holiday = (props) => {
  return (
    <li className={classes.holiday}>
      <h2>{props.intName}</h2>
      <p>{props.date}</p>
    </li>
  );
};

export default Holiday;
