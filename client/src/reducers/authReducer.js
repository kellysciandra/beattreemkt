import { SET_CURRENT_ARTIST, ARTIST_LOADING, GET_ARTISTS, EDIT_ARTIST } from "../actions/types";
const isEmpty = require('lodash/isEmpty') ;

const initialState = { isAuthenticated: false, artist: {}, loading: false };

export default function(state = initialState, action) {console.log(action.payload)
  switch (action.type) { 
    case SET_CURRENT_ARTIST:
      return { 
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        artist: action.payload
      };
    case GET_ARTISTS: 
      return {
        ...state, 
        artist: action.payload
      }
    case EDIT_ARTIST: console.log(action)
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