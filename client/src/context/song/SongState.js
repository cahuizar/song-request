import React, { useReducer } from 'react';
import axios from 'axios';
import SongContext from './songContext';
import songReducer from './songReducer';
import uuid from 'uuid';
import {
  ADD_SONG,
  DELETE_SONG,
  UPDATE_SONG,
  FILTER_SONG,
  CLEAR_FILTER,
  GET_SONGS,
  CLEAR_SONGS
} from '../types';

const SongState = props => {
  const intialState = {
    songs: [
      {
        _id: uuid.v4(),
        name: 'Veronica Chapa',
        songName: '11 pm',
        artist: 'Maluma'
      },
      {
        _id: uuid.v4(),
        name: 'Valeria Huizar',
        songName: 'No problem',
        artist: 'Chance The Rapper'
      },
      {
        _id: uuid.v4(),
        name: 'Holly Whitten',
        songName: 'La cucaracha',
        artist: 'Noseguey'
      }
    ],
    error: null
  };
  const [state, dispatch] = useReducer(songReducer, intialState);

  const config = {
    headers: { 'Content-Type': 'application/json' }
  };

  // Get songs
  const getSongs = () => {
    dispatch({ type: GET_SONGS, payload: state.songs });
  };

  // Add song
  const addSong = song => {
    song._id = uuid.v4();
    dispatch({ type: ADD_SONG, payload: song });
  };

  // Update song

  // Delete song

  // Clear songs - used when the user logouts

  // Filter songs

  // Clear filter

  return (
    <SongContext.Provider
      value={{
        songs: state.songs,
        error: state.error,
        getSongs,
        addSong
      }}
    >
      {props.children}
    </SongContext.Provider>
  );
};

export default SongState;
