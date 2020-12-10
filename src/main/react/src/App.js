import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Axios from 'axios';
import './App.css';

import Navbar from './Components/Navbar.js';
import Banner from './Components/Banner.js';

import Home from './Components/Pages/Home.js';
import Locate from './Components/Pages/Locate.js';
import EventsPage from './Components/Pages/EventsPage.js';
import Login from './Components/Pages/Login.js';
import Logout from './Components/Pages/Logout.js';
import Account from './Components/Pages/Account.js';
import Register from './Components/Pages/Register.js';


function App() {

  const [userLoggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const [innId, setInnId] = useState('');

  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {
      setLoggedIn(true);  
    }
  }, []);

  return (
    <div className="App">
      
        <Router>
          <Banner />
          <Navbar userLoggedIn={userLoggedIn} setLoggedIn={setLoggedIn}/>
          <Switch >
            <Route path="/" exact component={
              () => <Home 
              pageName={"HomePage"}
              userLoggedIn={userLoggedIn} 
              userId={userId}
              />} 
              
            />
            <Route path="/locate" exact component={
              () => <Locate 
              pageName={"LocatePage"}
              userLoggedIn={userLoggedIn}
              setLoggedIn={setLoggedIn}
              userId={userId}
              innId={innId}
              setInnId={setInnId}
              />}
            />
            <Route path="/login" exact component={
              () => <Login 
              pageName={"LoginPage"}
              userId={userId}
              setUserId={setUserId}
              userLoggedIn={userLoggedIn} 
              setLoggedIn={setLoggedIn}
              />}
            />
            <Route path="/logout" exact component={
              () => <Logout 
                userLoggedIn={userLoggedIn}
                userId={userId}
                setUserId={setUserId}
              />} 
            />
            <Route path="/account" exact component={
              () => <Account 
                userLoggedIn={userLoggedIn}
                setLoggedIn={setLoggedIn}
                userId={userId}
              />} 
            />
            <Route path="/register" exact component={
              () => <Register 
              />
            } />
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
