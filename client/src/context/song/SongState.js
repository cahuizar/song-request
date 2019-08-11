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
  CLEAR_SONGS,
  SET_LANGUAGE
} from '../types';

const SongState = props => {
  const intialState = {
    songs: [
      {
        _id: uuid.v4(),
        name: 'Veronica Chapa',
        songName: '11 pm',
        artist: 'Maluma',
        link: 'youtube.com/maluma',
        message: 'Congrats on the wedding, we all want to wish you well',
        language: 'SP'
      },
      {
        _id: uuid.v4(),
        name: 'Valeria Huizar',
        songName: 'No problem',
        artist: 'Chance The Rapper',
        link: 'youtube.com/chance',
        message: 'Bruh you ugly, but Hailey cute',
        language: 'SP'
      },
      {
        _id: uuid.v4(),
        name: 'Holly Whitten',
        songName: 'La cucaracha',
        artist: 'Noseguey',
        link: 'youtube.com/noseguey',
        message: 'We all love you guys!',
        language: 'EN'
      }
    ],
    error: null,
    language: null
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
    song.language = state.language;
    dispatch({ type: ADD_SONG, payload: song });
  };

  // Update song

  // Delete song

  // Clear songs - used when the user logouts

  // Filter songs

  // Clear filter

  // Set Language
  const setLanguage = lang => {
    dispatch({ type: SET_LANGUAGE, payload: lang });
  };

  return (
    <SongContext.Provider
      value={{
        songs: state.songs,
        error: state.error,
        language: state.language,
        getSongs,
        addSong,
        setLanguage
      }}
    >
      {props.children}
    </SongContext.Provider>
  );
};

export default SongState;
