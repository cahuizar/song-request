import React, { useState, useContext } from 'react';
import SongContext from '../../context/song/songContext';
import Error from '../pages/Error';
import Figures from '../pages/Figures';
import ProgressBar from './ProgressBar';
import Name from './Name';
import Know from './Know';
import Relationship from './Relationship';
import Song from './Song';
import Artist from './Artist';
import Preview from './Preview';
import Confirmation from './Confirmation';
import M from 'materialize-css';

const Start = () => {
  const songContext = useContext(SongContext);
  const { step } = songContext;
  return (
    <div className='home'>
      <Figures />
      <div className='start'>
        <div className='userForm'>
          {(() => {
            switch (step) {
              case 1:
                return <Name />;
              case 2:
                return <Know />;
              case 3:
                return <Relationship />;
              case 4:
                return <Song />;
              case 5:
                return <Artist />;
              case 6:
                return <Preview />;
              case 7:
                return <Confirmation />;
              default:
                return <Error />;
            }
          })()}
          <ProgressBar progress={(step / 7) * 100} />
        </div>
      </div>
    </div>
  );
};

export default Start;
