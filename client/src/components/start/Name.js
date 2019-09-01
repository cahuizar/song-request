import React, { Fragment, useContext } from 'react';
import SongContext from '../../context/song/songContext';

const Name = () => {
  const songContext = useContext(SongContext);
  const next = e => {
    songContext.next();
  };
  return (
    <Fragment>
      <h4>What's your name?</h4>
      <div className='input-field'>
        <input type='text' id='name' className='validate' required />
        <label htmlFor='name'>Full Name</label>
        <span
          className='helper-text'
          data-error='Please enter your full name'
        ></span>
      </div>
      <div className='form-buttons'>
        <button
          className='btn waves-effect waves-light'
          onClick={next}
          name='action'
        >
          Next
          <i className='material-icons right'>send</i>
        </button>
      </div>
    </Fragment>
  );
};

export default Name;
