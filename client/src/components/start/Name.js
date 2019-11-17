import React, { useContext, useState } from 'react';
import SongContext from '../../context/song/songContext';

const Name = () => {
  let textInput = React.createRef();
  const songContext = useContext(SongContext);

  const [name, setName] = useState('');
  const onChange = e => setName(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    songContext.addName(name);
  };

  return (
    <form onSubmit={onSubmit}>
      <h4>What's your name?</h4>
      <div className='input-field'>
        <input
          type='text'
          ref={textInput}
          onChange={onChange}
          id='name'
          name='name'
          value={name}
          className='validate'
          autoFocus
          required
        />
        <label htmlFor='name'>Full Name</label>
        <span
          className='helper-text'
          data-error='Please enter your full name'
        ></span>
      </div>
      <div className='form-buttons'>
        <button
          type='submit'
          className='btn waves-effect waves-light'
          name='action'
        >
          Next
          <i className='material-icons right'>send</i>
        </button>
      </div>
    </form>
  );
};

export default Name;
