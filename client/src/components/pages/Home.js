import React, { useContext } from 'react';
import SongForm from '../songs/SongForm';
import SongWelcome from '../songs/SongWelcome';
import SongContext from '../../context/song/songContext';

const Home = () => {
  const songContext = useContext(SongContext);
  const { language } = songContext;
  return (
    <div className='body'>
      <div className='row'>
        <div className='col m6 l8 relative hide-s'>
          <img className='banner' alt='' />
        </div>
        <div className='col s12 m6 l4'>
          <div className='valign-wrapper vh-95'>
            {language === null ? <SongWelcome /> : <SongForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
