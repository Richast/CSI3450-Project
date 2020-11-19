import React from 'react';
import {Link} from 'react-router-dom';
import './../App.css';


function LoggedIn(props) {
    return(
        <nav>
            <ul className="navbar">
                <Link to="/" ><li>Home</li></Link>
                <Link to="/Locate" ><li>Locate</li></Link>
                <Link to="/Events" ><li>Events</li></Link>
                <Link to="/Account" ><li>Account</li></Link>
            </ul>
        </nav>
    );
}

function NotLoggedIn(props) {
    return(
        <nav>
            <ul className="navbar">
                <Link to="/" ><li>Home</li></Link>
                <Link to="/Locate" ><li>Locate</li></Link>
                <Link to="/Events" ><li>Events</li></Link>
                <Link to="/Login" ><li>Log In / Register</li></Link>
            </ul>
        </nav>
    );
}

//Based on demo from Reactjs.org
function Navbar(props) {
    const loggedIn = props.loggedIn;

    if (loggedIn) {
        return <LoggedIn />
    }
    return <NotLoggedIn />
}  



export default Navbar;