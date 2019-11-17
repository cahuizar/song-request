import React, { useReducer } from 'react';
import axios from 'axios';
import SongContext from './songContext';
import songReducer from './songReducer';
import uuid from 'uuid';
import {
  ADD_SONG,
  ADD_NAME,
  ADD_SONG_NAME,
  GET_SONGS,
  PREV,
  NEXT
} from '../types';

const SongState = props => {
  const intialState = {
    step: 1,
    song: null,
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

  // Previous forn
  const prev = () => {
    dispatch({ type: PREV, payload: state.step });
  };

  // next forn
  const next = () => {
    dispatch({ type: NEXT });
  };

  // add name
  const addName = value => {
    dispatch({ type: ADD_NAME, payload: value });
    next();
  };

  // add song name
  const addSongName = value => {
    dispatch({ type: ADD_SONG_NAME, payload: value });
    next();
  };

  // Add song
  const addSong = async value => {
    let song = {
      name: state.name,
      songName: state.songName,
      artist: value
    };
    try {
      await axios.post('/api/songs', song, config);
      dispatch({ type: ADD_SONG, payload: song });
      next();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SongContext.Provider
      value={{
        step: state.step,
        song: state.song,
        songs: state.songs,
        error: state.error,
        addName,
        addSongName,
        getSongs,
        addSong,
        next,
        prev
      }}
    >
      {props.children}
    </SongContext.Provider>
  );
};

export default SongState;
