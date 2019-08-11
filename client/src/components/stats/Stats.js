import React, { useContext, Fragment } from 'react';
import SongContext from '../../context/song/songContext';
import StatItem from './StatItem';

const Stats = () => {
  const songContext = useContext(SongContext);
  const { songs } = songContext;
  return (
    <Fragment>
      <StatItem title='Songs' value={songs.length} icon='audiotrack' />
    </Fragment>
  );
};

export default Stats;
