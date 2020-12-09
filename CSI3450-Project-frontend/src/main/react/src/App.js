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
import Booking from './Components/Pages/Booking.js';

function App() {
  const api = Axios.create({
    baseURL: `http://localhost:8080/csi3450project/v1`
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [userLoggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  
  const [eventData, setEventdata] = useState();

  const [innId, setInnId] = useState('');

  const usernameCallback = (uName) => {
    setUsername(uName);
    console.log(username);
  }
  const passwordCallback = (pass) => {
    setPassword(pass);
    console.log(password);
  }



  const handleLogStatus = () => {
    setLoggedIn(!userLoggedIn);
  };
  
  const axiosGet = async e => {
    return api.get(e).then(response => response.data);
  }

  return (
    <div className="App">
      <Router>
        <Banner />
        <Navbar userLoggedIn={userLoggedIn}/>
        <Switch >
          <Route path="/" exact component={
            () => <Home 
            pageName={"HomePage"}
            userLoggedIn={userLoggedIn} 
            userId={userId}

            axiosGet={axiosGet}
            />} 
            
          />
          <Route path="/locate" exact component={
            () => <Locate 
            api={api}
            pageName={"LocatePage"}
            userLoggedIn={userLoggedIn}
            userId={userId}
            axiosGet={axiosGet} 
            innId={innId}
            setInnId={setInnId}
            />}
          />
          <Route path="/events" exact component={
            () => <EventsPage 
              pageName={"EventsPage"}
              userLoggedIn={userLoggedIn} 
              userId={userId}
              axiosGet={axiosGet}
            />}
          />
          <Route path="/login" exact component={
            () => <Login 
            pageName={"LoginPage"}
            userId={userId}
            setUserId={setUserId}
            userLoggedIn={userLoggedIn} 

            setUsername={setUsername}
            setPassword={setPassword}
            usernameCallback={usernameCallback}
            passwordCallback={passwordCallback}
            axiosGet={axiosGet}
            />}
          />
          <Route path="/logout" exact component={
            () => <Logout 
              userLoggedIn={userLoggedIn}
              userId={userId}
              setUserId={setUserId}
              axiosGet={axiosGet} 
            />} 
          />
          <Route path="/account" exact component={
            () => <Account 
              userLoggedIn={userLoggedIn}
              userId={userId}
             />} 
          />
          <Route path="/register" exact component={
            () => <Register 
            axiosGet={axiosGet}
            />
          } />
          <Route path="/:id" component={
            () => <Booking 
                    innId={innId}
                    userId={userId}
                    setInnId={setInnId}
                  />
          } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
