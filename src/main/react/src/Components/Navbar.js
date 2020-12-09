import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import './../App.css';

function Navbar(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
    //const [userLoggedIn, setLoggedIn] = useState(true);

    const handleClick = () => {
        setClick(!click);
    };

    /*const handleLogStatus = () => {
        setLoggedIn(!userLoggedIn);
    };*/

    /*useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if(loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);*/

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/">MBBG<i className="fas fa-atlas" /></Link>
                    <ul className="nav-links">
                        <Link to="/">
                            <li className="nav-links-home">
                                Home
                            </li>
                        </Link>
                        <Link to="/locate">
                            <li className="nav-links-locate">
                                Locate
                            </li>
                        </Link>
                        <Link to="/events">
                            <li className="nav-links-events">
                                Events
                            </li>
                        </Link>
                        <Link to="/login">
                            <li className="nav-links-login" style={props.userLoggedIn ? {display:'none'} : {}}>
                                Log In
                            </li>
                        </Link>
                        <Link to="/account">
                            <li className="nav-links-account" style={!props.userLoggedIn ? {display:'none'} : {}}>
                                Account
                            </li>
                        </Link>
                        <Link to="/logout">
                            <li className="nav-links-logout" style={!props.userLoggedIn ? {display:'none'} : {}}>
                                Log Out
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;