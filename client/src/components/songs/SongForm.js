import React, { useEffect, useContext, useState } from 'react';
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
    <div className='valign-wrapper song-form'>
      <div className='row '>
        <form className='col s12 song-form' onSubmit={onSubmit}>
          <div className='row'>
            <div className='col s12'>
              <h2>Song Request</h2>
              <p>
                Fill out the information below to get play your song during the
                reception:
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
              <label htmlFor='name'>Full Name / Nombre Completo</label>
              <span
                className='helper-text'
                data-error='Please enter your full name / Por favor escribe tu nombre'
              >
                Required / Requirido
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
              <label htmlFor='songName'>Song Name / Nombre de Cancion</label>
              <span
                className='helper-text'
                data-error='Please enter the name of the song / Por favor escribe el nombre de la cancion'
              >
                Required / Requirido
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
              <label htmlFor='artist'>Artist / Artista</label>
              <span
                className='helper-text'
                data-error='Please enter the artist of the song / Por favor escrbie el nombre del artista'
              >
                Required / Requirido
              </span>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                type='text'
                id='link'
                className=''
                value={link}
                onChange={onChange}
              />
              <label htmlFor='link'>Youtube Link / Enlace de Youtube</label>
              <span className='helper-text'>Optional / Opcional</span>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <textarea
                id='message'
                className='materialize-textarea'
                data-length='120'
                value={message}
                onChange={onChange}
              />
              <label htmlFor='message'>
                Message for the couple / Mensage para la pareja
              </label>
              <span className='helper-text'>Optional / Opcional</span>
            </div>
          </div>
          <div className='row'>
            <div className='col s12'>
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
        </form>
      </div>
    </div>
  );
};

export default SongForm;
