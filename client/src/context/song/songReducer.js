import {
  ADD_SONG,
  ADD_NAME,
  ADD_SONG_NAME,
  GET_SONGS,
  NEXT,
  PREV
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload
      };
    case ADD_NAME:
      return {
        ...state,
        name: action.payload
      };
    case ADD_SONG_NAME:
      return {
        ...state,
        songName: action.payload
      };
    case ADD_SONG:
      return {
        ...state,
        song: action.payload
      };
    case PREV:
      return {
        ...state,
        step: --state.step
      };
    case NEXT:
      return {
        ...state,
        step: ++state.step
      };
    default:
      return state;
  }
};
