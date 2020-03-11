import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_ARTIST, ARTIST_LOADING , EDIT_ARTIST} from "./types";

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
    .then(res => { console.log(res)
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
    payload: decoded
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

export const editArtist = (artistData) => dispatch => {  console.log(artistData)
  axios
    .patch("api/artists/update/", artistData)
    .then(res => 
      dispatch({
        type: EDIT_ARTIST,
        payload: artistData,
      })
    )
    .catch(err => console.log(err))
};





// export const registerEmployee = (employeeData, history) => dispatch => {
//   axios
//     .post("/api/employees/register", employeeData)
//     .then(res =>  console.log(res), history.push("/employeeLogin"))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// export const loginEmployee = employeeData => dispatch => {
//   axios
//     .post("/api/employees/login", employeeData)
//     .then(res => { console.log(res)

//       const { token } = res.data;
//       localStorage.setItem("jwtToken", token);
//       setAuthToken(token);
//       const decoded = jwt_decode(token);
//       dispatch(setCurrentEmployee(decoded));
//     })
//     .catch(err =>
//       dispatch({
//         type: 'GET_ERRORS',
//         payload: err.response.data
//       })
//     );
// };



// export const getEmployees = employeeData => dispatch => {
//   axios
//     .get("api/employees")
//     .then(res => {console.log(res)
//       dispatch({
//         type: 'GET_EMPLOYEES',
//         payload: res.data
//       })
//   })
// }


// export const setCurrentEmployee = decoded => {
//   return {
//     type: SET_CURRENT_EMPLOYEE,
//     payload: decoded
//   };
// };


// export const setEmployeeLoading = () => {
//   return {
//     type: EMPLOYEE_LOADING
//   };
// };


// export const logoutEmployee = () => dispatch => {
//   // Remove token from local storage
//   localStorage.removeItem("jwtToken");
//   // Remove auth header for future requests
//   setAuthToken(false);
//   console.log('logged out')
//   dispatch(setCurrentEmployee({}));
//   this.history.push("/")
// };

