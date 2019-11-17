import React, { useContext } from 'react';
import SongContext from '../../context/song/songContext';
import Error from '../pages/Error';
import Figures from '../pages/Figures';
import ProgressBar from './ProgressBar';
import Name from './Name';
import Song from './Song';
import Artist from './Artist';
import Confirmation from './Confirmation';
// eslint-disable-next-line
import M from 'materialize-css';

const Start = () => {
  const songContext = useContext(SongContext);
  const { step, next } = songContext;

  const nextPage = elem => {
    next(elem.name, elem.value);
  };
  return (
    <div className='home'>
      <Figures />
      <div className='start'>
        <div className='userForm'>
          {(() => {
            switch (step) {
              case 1:
                return <Name nextPage={nextPage} />;
              case 2:
                return <Song nextPage={nextPage} />;
              case 3:
                return <Artist nextPage={nextPage} />;
              case 4:
                return <Confirmation />;
              default:
                return <Error />;
            }
          })()}
          <ProgressBar progress={(step / 4) * 100} />
        </div>
      </div>
    </div>
  );
};

export default Start;
