import React, { useContext } from 'react';
import SongContext from '../../context/song/songContext';
import SongRow from '../songs/SongRow';

const SongTable = () => {
  const songContext = useContext(SongContext);
  const { songs } = songContext;
  return (
    <table className='highlight centered responsive-table'>
      <thead>
        <tr>
          <th>Guest Name</th>
          <th>Song Name</th>
          <th>Artist Name</th>
          <th>Youtube Link</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {songs.map(song => (
          <SongRow key={song._id} song={song} />
        ))}
      </tbody>
    </table>
  );
};

export default SongTable;
