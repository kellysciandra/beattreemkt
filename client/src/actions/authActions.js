import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_ARTIST, ARTIST_LOADING , EDIT_ARTIST, FETCH_ARTISTS} from "./types";

export const registerArtist = (artistData, history) => dispatch => { 
  axios
    .post("/api/artists/register", artistData)
    .then(res =>  console.log(res), history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginArtist = artistData => dispatch => { 
  axios
    .post("/api/artists/login", artistData)
    .then(res => { 
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentArtist(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


export const setCurrentArtist = decoded => { console.log(decoded)
  return {
    type: SET_CURRENT_ARTIST,
    payload: decoded,
    artist: decoded
  };
};


export const setArtistLoading = () => {
  return {
    type: ARTIST_LOADING
  };
};


export const logoutArtist = () => dispatch => { 
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  console.log('logged out')
  dispatch(setCurrentArtist({}));
};

export const editArtist = (artistData) => dispatch => {  
  axios
    .patch("/api/artists/update", artistData)
    .then(res => 
      dispatch({
        type: EDIT_ARTIST,
        payload: artistData,
      })
    )
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

export const fetchArtists = () => dispatch => { 
  axios
    .get("/api/artists/")
    .then(res => 
      dispatch({
        type: FETCH_ARTISTS,
        payload: res.data
      })
    )
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


export const uploadImage = (artistData) => dispatch => { 
  axios
    .post("/api/artists/image/upload", artistData)
    .then(res =>  console.log(res))
};