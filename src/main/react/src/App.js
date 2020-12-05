import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './Components/Banner.js';
import Navbar from './Components/Navbar.js';
import QuickInfo from './Components/QuickInfo.js';
import Events from './Components/Events.js';
import Info from './Components/Info.js';

import HomePage from './Pages/HomePage.js';
import LocatePage from './Pages/LocatePage.js';
import EventsPage from './Pages/EventsPage.js';
import LoginPage from './Pages/LogInPage.js';

import './App.css';

function App() {

  const [page, setPage] = useState([
    {pageName: "homepage", loggedIn: false, banner: true},
    {pageName: "bnbPage", loggedIn: false, banner: false},
    {pageName: "booking", loggedIn: false, banner: false},
    {pageName: "login", loggedIn: false, banner: true},
    {pageName: "events", loggedIn: false, banner: true},
    {pageName: "account", loggedIn: false, banner: false}
  ]);

  return (
      <Router>
        <div className="App">
        
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Locate" exact component={LocatePage} />
            <Route path="/Events" exact component={EventsPage} />
            <Route path="/Login" exact component={LoginPage} />
          </Switch>
        </div>
      </Router>
      
    
  );
}

export default App;