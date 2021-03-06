import { SET_CURRENT_ARTIST, ARTIST_LOADING, FETCH_ARTISTS, EDIT_ARTIST } from "../actions/types";
const isEmpty = require('lodash/isEmpty') ;

const initialState = { isAuthenticated: false, artist: {}, artists: [], loading: false };

export default function(state = initialState, action) {
  switch (action.type) { 
    case SET_CURRENT_ARTIST:
      console.log(action.payload)
      return { 
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        artist: action.payload
      };
    case FETCH_ARTISTS: 
    console.log(action.payload)
      return {
        ...state,
          artists: action.payload
      }
    case EDIT_ARTIST:
      return {
        ...state, 
        artist: action.payload
      }
    case ARTIST_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}