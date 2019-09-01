import React, { Fragment } from 'react';

const Relationship = () => {
  return (
    <Fragment>
      <h4>What's your relationship to the couple?</h4>
      <label>
        <input
          name='relationship'
          type='radio'
          class='with-gap'
          value='friend'
        />
        <span>Friend</span>
      </label>
      <label>
        <input
          name='relationship'
          type='radio'
          class='with-gap'
          value='family'
        />
        <span>Family</span>
      </label>
    </Fragment>
  );
};

export default Relationship;
