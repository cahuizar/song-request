import React, { Fragment } from 'react';

const Song = () => {
  return (
    <Fragment>
      <h4>Whats the name of the song?</h4>
      <div className='input-field col s12 m6'>
        <input type='text' id='songName' className='validate' required />
        <label htmlFor='songName'>Song Name</label>
        <span
          className='helper-text'
          data-error='Please enter the name of the song'
        ></span>
      </div>
    </Fragment>
  );
};

export default Song;
