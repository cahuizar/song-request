import React, { useEffect, useContext, useState, Fragment } from 'react';
import M from 'materialize-css';
import SongContext from '../../context/song/songContext';

const SongForm = () => {
  const songContext = useContext(SongContext);
  const { addSong, setLanguage, language } = songContext;
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

  const back = () => {
    setLanguage(null);
  }

  const onSubmit = e => {
    e.preventDefault();
    addSong(song);
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='row'>
          <div className='col s12'>
            <h2>{language === 'EN' ? (
                'Song Request'
              ) : (
                'Solicita La Canción'
              )}</h2>
            <p>
              {language === 'EN' ? (
                'Fill out the information below to get play your song during the reception:'
              ) : (
                'Completa la información a continuación para reproducir su canción durante la recepción:'
              )}
              
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
            <label htmlFor='name'>{language === "EN" ? ("Full Name") : ("Nombre Completo")}</label>
            <span
              className='helper-text'
              data-error={language === "EN" ? ("Please enter your full name") : ("Por favor escribe tu nombre")}
            >
              {language === 'EN' ? ('Required') : ('Requirido')}
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
            <label htmlFor='songName'>{language === "EN" ? ("Song Name") : ("Nombre de Cancion")}</label>
            <span
              className='helper-text'
              data-error={language === "EN" ? ("Please enter the name of the song") : ("Por favor escribe el nombre de la cancion")}
            >
              {language === "EN" ? ("Required") : ("Requirido")}
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
            <label htmlFor='artist'>{language === "EN" ? ("Artist") : ("Artista")}</label>
            <span
              className='helper-text'
              data-error={language === "EN" ? ("Please enter the artist of the song") : ("Por favor escrbie el nombre del artista")}
            >
              {language === "EN" ? ("Required") : ("Requirido")}
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
            <label htmlFor='link'>{language === "EN" ? ("Youtube Link") : ("Enlace de Youtube")}</label>
            <span className='helper-text'>{language === "EN" ? ("Optional") : ("Opcional")}</span>
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
            {language === "EN" ? ("Message for the couple") : ("Mensage para la pareja")}
            </label>
            <span className='helper-text'>{language === "EN" ? ("Optional") : ("Opcional")}</span>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 button-row'>
            <div>
              <button
                type="button"
                className='btn waves-effect waves-light'
                name='back'
                onClick={back}
              >
                <i className='material-icons right'>arrow_back</i>
                {language === "EN" ? ("Back") : ("Atras")}
              </button>
            </div>
            <div>
              <button
                className='btn waves-effect waves-light'
                type='submit'
                name='action'
              >
                {language === "EN" ? ("Submit") : ("Entregar")}
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
