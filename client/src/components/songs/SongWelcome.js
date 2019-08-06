import React, { useState, useContext } from 'react';
import SongContext from '../../context/song/songContext';

const SongWelcome = () => {
  const songContext = useContext(SongContext);
  const { setLanguage, language } = songContext;
  const [lang, setLang] = useState(0);

  const onChange = e => setLang(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    setLanguage(lang);
  };

  return (
    <div className='row'>
      <form onSubmit={onSubmit}>
        <div className='col s12'>
          <h4>Please select a language:</h4>
        </div>
        <div className='col s12'>
          <p>
            <label>
              <input className='with-gap' name='lang' type='radio' value="EN" id='EN' checked={lang === 'EN' || lang === null} onChange={onChange}/>
              <span>English</span>
            </label>
          </p>
        </div>
        <div className='col s12'>
          <p>
            <label>
              <input className='with-gap' name='lang' type='radio' value="SP" id='SP' checked={lang === 'SP'} onChange={onChange}/>
              <span>Spanish</span>
            </label>
          </p>
        </div>
        <div className='col s12 mt-1'>
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
            >
              Submit
              <i className='material-icons right'>send</i>
            </button>
          </div>
      </form>
    </div>
  );
};

export default SongWelcome;
