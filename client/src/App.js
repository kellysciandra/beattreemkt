import React from 'react';
import {Route, Router, Switch } from 'react-router-dom'
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentArtist, logoutArtist} from './actions/authActions'


//components
import BeatsDashboard from './beats/BeatsDashboard.js'
import ArtistSignup from './auth/ArtistSignup.js'
import ArtistLogin from './auth/ArtistLogin.js'
import Dashboard from './layout/Dashboard'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer.js'
import ArtistDashboard from './artists/ArtistDashboard.js'
import PrivateRouteArtist from './private-route/PrivateRouteArtist'
import ArtistForm from './artists/ArtistForm.js'
//styling
import './index.css';
//redux
import store from './store'
//history
import history from './history'




// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentArtist(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutArtist());
    // Redirect to login
    window.location.href = "./artist";
  }
}

function App(props) { 
  return (
    <Provider store={store}>
    <Router history={history}>
      <div>
        <NavBar logout={logoutArtist()}/>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signup" component={ArtistSignup} />
          <Route exact path="/login" component={ArtistLogin} />
          <Route exact path="/artist/edit" component={ArtistForm} />
          <Route exact path="/beats" component={BeatsDashboard} />
          {/* <Route exact path="/artist" component={ArtistDashboard} /> */}
      <Switch>
      <PrivateRouteArtist exact path='/artist' component={ArtistDashboard} />
      </Switch>
      <Footer />
      </div>
    </Router>
  </Provider>
  );
}
export default App;





























