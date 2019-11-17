import React, { useContext, useState } from 'react';
import SongContext from '../../context/song/songContext';

const Artist = () => {
  let textInput = React.createRef();
  const songContext = useContext(SongContext);

  const [artist, setArtist] = useState('');
  const onChange = e => setArtist(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    songContext.addSong(artist);
  };
  return (
    <form onSubmit={onSubmit}>
      <h4>Who is the artist of the song?</h4>
      <div className='input-field col s12 m6'>
        <input
          type='text'
          ref={textInput}
          onChange={onChange}
          id='artist'
          name='artist'
          value={artist}
          className='validate'
          autoFocus
          required
        />
        <label htmlFor='artist'>Artist Name</label>
        <span
          className='helper-text'
          data-error='Please enter the name of the artist'
        ></span>
      </div>
      <div className='form-buttons'>
        <button
          type='submit'
          className='btn waves-effect waves-light'
          name='action'
        >
          Submit
          <i className='material-icons right'>send</i>
        </button>
      </div>
    </form>
  );
};

export default Artist;
