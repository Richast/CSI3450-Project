import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import './../App.css';

function Navbar(props) {
    const [userLog, setuserLog] = useState(false);
    const handleLogout = async e => {
        props.setLoggedIn(false);
        console.log(props.userLoggedIn);
    }

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/">MBBG<i className="fas fa-atlas" /></Link>
                    <ul className="nav-links">
                        
                            <li className="nav-links-home">
                                <Link to="/">Home</Link>
                            </li>
                        
                        
                            <li className="nav-links-locate">
                                <Link to="/locate">Locate</Link>
                            </li>
                        
                        
                            <li className="nav-links-events">
                                <Link to="/events">Events</Link>
                            </li>
                        
                        
                        
                            <li className="nav-links-login" style={(props.userLoggedIn === false) ? {} : {display:'none'}}>
                                <Link to="/login">Log In</Link>
                            </li>
                        
                    
                        
                            <li className="nav-links-account" style={(props.userLoggedIn === true) ? {} : {display:'none'}}>
                                <Link to="/account">Account</Link>
                            </li>
                        
                        
                            
                            <li className="nav-links-logout" >
                                <Link to="/"><button onClick={handleLogout} style={(props.userLoggedIn === true) ? {} : {display:'none'}}>Log Out</button></Link> 
                            </li>
                            
                               
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;