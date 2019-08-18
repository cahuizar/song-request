import React, { useContext } from 'react';
import SongForm from '../songs/SongForm';
import SongWelcome from '../songs/SongWelcome';
import SongContext from '../../context/song/songContext';
import Figures from './Figures';
import Welcome from './Welcome';

const Home = () => {
  const songContext = useContext(SongContext);
  const { language } = songContext;
  return (
    <div className='home'>
      <Figures />
      <Welcome />
      {/* <div className='song-request'>
        <div className='song-request__heading'>Huizar Wedding</div>
        <div>{language === null ? <SongWelcome /> : <SongForm />}</div>
      </div> */}
    </div>
  );
};

export default Home;
