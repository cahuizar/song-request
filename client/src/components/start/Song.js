import React, { useContext, useState } from 'react';
import SongContext from '../../context/song/songContext';

const Song = () => {
  let textInput = React.createRef();
  const songContext = useContext(SongContext);

  const [songName, setSongName] = useState('');
  const onChange = e => setSongName(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    songContext.addSongName(songName);
  };
  return (
    <form onSubmit={onSubmit}>
      <h4>What's the name of the song?</h4>
      <div className='input-field col s12 m6'>
        <input
          type='text'
          ref={textInput}
          onChange={onChange}
          id='songName'
          name='songName'
          className='validate'
          value={songName}
          autoFocus
          required
        />
        <label htmlFor='songName'>Song Name</label>
        <span
          className='helper-text'
          data-error='Please enter the name of the song'
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

export default Song;
