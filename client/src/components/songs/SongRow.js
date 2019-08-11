import React from 'react';

const SongRow = ({ song }) => {
  const { _id, name, artist, songName, link } = song;
  return (
    <tr>
      <td>
        <p>
          <label>
            <input type='checkbox' name='selectSong' />
            <span />
          </label>
        </p>
      </td>
      <td>{name}</td>
      <td>{songName}</td>
      <td>{artist}</td>
      <td>
        <a href={link} target='_blank'>
          Link
        </a>
      </td>
    </tr>
  );
};

export default SongRow;
