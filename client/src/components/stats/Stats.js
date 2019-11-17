import React, { useContext, Fragment } from 'react';
import SongContext from '../../context/song/songContext';
import StatItem from './StatItem';

const Stats = () => {
  const songContext = useContext(SongContext);
  const { songs } = songContext;
  return (
    <Fragment>
      <div className='col s12'>
        <h5 className='dashboard-header'>Overview</h5>
      </div>
      <StatItem
        title='Songs'
        value={songs.length}
        icon='audiotrack'
        color='#7e57c2'
      />
      <StatItem title='Spanish' value={10} icon='person' color='#42a5f5' />
      <StatItem title='English' value={20} icon='person' color='#26a69a' />
    </Fragment>
  );
};

export default Stats;
