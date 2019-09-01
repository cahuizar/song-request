import {
  ADD_SONG,
  DELETE_SONG,
  UPDATE_SONG,
  FILTER_SONG,
  CLEAR_FILTER,
  GET_SONGS,
  CLEAR_SONGS,
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
    case ADD_SONG:
      return {
        ...state,
        songs: [action.payload, ...state.songs]
      };
    case PREV:
      return {
        ...state,
        step: action.payload--
      };
    case NEXT:
      return {
        ...state,
        step: action.payload++
      };
    default:
      return state;
  }
};
