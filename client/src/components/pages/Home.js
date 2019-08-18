import React, { useContext } from 'react';
import SongForm from '../songs/SongForm';
import Banner from './Banner';
import SongWelcome from '../songs/SongWelcome';
import SongContext from '../../context/song/songContext';

const Home = () => {
  const songContext = useContext(SongContext);
  const { language } = songContext;
  return (
    <div className='home'>
      <Banner />
      <div className='song-request'>
        <div className='song-request__heading'>Huizar Wedding</div>
        <div>{language === null ? <SongWelcome /> : <SongForm />}</div>
      </div>
    </div>
  );
};

export default Home;
