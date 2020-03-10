import React from 'react';
import {Route, Router, Switch } from 'react-router-dom'
import { Provider } from "react-redux";


//components
import UserSignUp from './auth/UserSignUp.js'
import Dashboard from './layout/Dashboard'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer.js'
import Homepage from './users/Homepage.js'
import ArtistDashboard from './artists/ArtistDashboard.js'

//styling
import './index.css';
//redux
import store from './store'
//history
import history from './history'


function App() {
  return (
    <Provider store={store}>
    <Router history={history}>
      <div>
        <NavBar />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signup" component={UserSignUp} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/artist" component={ArtistDashboard} />
          <Footer />
      <Switch>
      
      </Switch>
      </div>
    </Router>
  </Provider>
  );
}

export default App;
