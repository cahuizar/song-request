import React from 'react';

const SongRow = ({ song }) => {
  const { _id, name, artist, songName, link } = song;
  return (
    <tr>
      <td>{name}</td>
      <td>{songName}</td>
      <td>{artist}</td>
      <td>
        <a href={link} target='_blank'>
          Link
        </a>
      </td>
      <td>
        <button class='waves-effect waves-light btn blue edit-btn'>Edit</button>
        <button class='waves-effect waves-light btn red'>Delete</button>
      </td>
    </tr>
  );
};

export default SongRow;
