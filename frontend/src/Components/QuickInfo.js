import React, {useState} from 'react';
import logo from './../logo.svg';

function About() {
    const imgStyle = {
        width: '10vw',
        height: '10vh'
    };

    const listStyle = {
        listStyle: 'none',
        color: 'white',
        textAlign: 'center'
    };

    return(
        <div className="about">
            <img src={logo} style={imgStyle}/>
            <h2>Michigan Bed and Breakfast Guild</h2>
            <h3>Contact Us</h3>
            <ul>
                <li style={listStyle}>Phone: (000) 000-0000</li>
                <li style={listStyle}>Email: support@mbbg.com</li>
            </ul>
        </div>
    );
}

function Login() {
    const textStyle = {
        margin: '5%'
    };

    return(
        <div className="about">
            <h1 style={{marginTop: '10vh'}}>Log In</h1>
            <p style={{margin: '5%'}}>For approved MBBG members, enter your email and password in the
                designated fields.
            </p>
            <h3 style={{marginTop: '10vh'}}>Need to register for an account?</h3>
            <p style={{margin:'5%'}}>The Michigan Bed and Breakfast Guild has some requirements to register. Click below to find out more
                information.
            </p>
            <button>Register</button>
        </div>
    );
}

function QuickInfo({name, loggedIn}) {

    const [page, setContent] = useState([
        {page: {name}, loggedIn: {loggedIn}}
    ]);

    return <Login />
}

export default QuickInfo;