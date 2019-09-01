import React, { Fragment } from 'react';

const Artist = () => {
  return (
    <Fragment>
      <h4>Who is the artist of the song?</h4>
      <div className='input-field col s12 m6'>
        <input type='text' id='artist' className='validate' required />
        <label htmlFor='artist'>Artist Name</label>
        <span
          className='helper-text'
          data-error='Please enter the name of the artist'
        ></span>
      </div>
    </Fragment>
  );
};

export default Artist;
