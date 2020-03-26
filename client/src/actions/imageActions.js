import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_IMAGE, ADD_IMAGE} from "./types";



export const uploadImage = (artistData) => dispatch => { console.log('hit')
  axios
    .post("/api/artists/image/upload", artistData)
    .then(res =>  console.log(res),
      dispatch({ 
        type: ADD_IMAGE,
        payload: artistData
      }))
};


