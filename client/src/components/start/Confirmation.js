import React, { useContext } from 'react';
import SongContext from '../../context/song/songContext';

const Confirmation = () => {
  const songContext = useContext(SongContext);
  const { name, songName, artist } = songContext.song;
  return (
    <div>
      <h4>Your request has been submitted successfully</h4>
      <div className='row'>
        <div className='xs-full information'>
          <div className='success-label'>Your Name</div>
          <div className='success-value'>{name}</div>
        </div>
        <div className='xs-full sm-half information'>
          <div className='success-label'>Song Name</div>
          <div className='success-value'>{songName}</div>
        </div>
        <div className='xs-full sm-half information'>
          <div className='success-label'>Artist Name</div>
          <div className='success-value'>{artist}</div>
        </div>
      </div>
      <div className='row'>
        <div className='xs-full last-message'>We hope to you see you on</div>
      </div>
      <div className='row'>
        <div className='xs-full date'>
          July 18<sup>th</sup>, 2020
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
