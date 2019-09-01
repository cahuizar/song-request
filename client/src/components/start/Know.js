import React, { Fragment } from 'react';

const Know = () => {
  return (
    <Fragment>
      <h4>Who do you know?</h4>
      <label>
        <input
          name='relationship'
          type='radio'
          class='with-gap'
          value='friend'
        />
        <span>Hailey</span>
      </label>
      <label>
        <input
          name='relationship'
          type='radio'
          class='with-gap'
          value='family'
        />
        <span>Carlos</span>
      </label>
    </Fragment>
  );
};

export default Know;
