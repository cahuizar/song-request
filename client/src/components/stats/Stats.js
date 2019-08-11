import React, { useContext, Fragment } from 'react';
import SongContext from '../../context/song/songContext';
import StatItem from './StatItem';

const Stats = () => {
  const songContext = useContext(SongContext);
  const { songs } = songContext;
  var englishCount = 0;
  var spanishCount = 0;
  songs.map(song => (song.language === 'EN' ? englishCount++ : spanishCount++));
  return (
    <Fragment>
      <div className='col s12'>
        <h5 className='dashboard-header'>Overview</h5>
      </div>
      <StatItem
        title='Songs'
        value={songs.length}
        icon='audiotrack'
        color='red'
      />
      <StatItem
        title='Spanish'
        value={spanishCount}
        icon='person'
        color='green'
      />
      <StatItem
        title='English'
        value={englishCount}
        icon='person'
        color='blue'
      />
    </Fragment>
  );
};

export default Stats;
