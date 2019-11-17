import React, { useEffect, useContext, useState, Fragment } from 'react';
import M from 'materialize-css';
import SongContext from '../../context/song/songContext';

const SongForm = () => {
  const songContext = useContext(SongContext);
  const { addSong } = songContext;
  const [song, setSong] = useState({
    name: '',
    songName: '',
    artist: '',
    link: '',
    message: ''
  });
  const { name, songName, artist, link, message } = song;
  useEffect(() => {
    M.CharacterCounter.init(document.getElementById('message'));
    // eslint-disable-next-line
  }, []);

  const onChange = e => setSong({ ...song, [e.target.id]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addSong(song);
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='row'>
          <div className='col s12'>
            <h2>Information</h2>
            <p>
              Fill out the form below to play your song during the reception:'
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              type='text'
              id='name'
              className='validate'
              value={name}
              onChange={onChange}
              required
            />
            <label htmlFor='name'>Full Name</label>
            <span
              className='helper-text'
              data-error='Please enter your full name'
            >
              Required
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12 m6'>
            <input
              type='text'
              id='songName'
              className='validate'
              value={songName}
              onChange={onChange}
              required
            />
            <label htmlFor='songName'>Song Name</label>
            <span
              className='helper-text'
              data-error='Please enter the name of the song'
            >
              Required
            </span>
          </div>
          <div className='input-field col s12 m6'>
            <input
              type='text'
              id='artist'
              className='validate'
              value={artist}
              onChange={onChange}
              required
            />
            <label htmlFor='artist'>Artist</label>
            <span
              className='helper-text'
              data-error='Por favor escrbie el nombre del artista'
            >
              Required
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 button-row'>
            <div>
              <button
                className='btn waves-effect waves-light'
                type='submit'
                name='action'
              >
                Submit
                <i className='material-icons right'>send</i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default SongForm;
