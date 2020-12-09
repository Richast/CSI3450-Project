import React, {useState} from 'react';
import './QuickInfo.css';

function QuickInfo(props) {
    if (props.pageName === "LoginPage") {
        return <Login />
    } else if (props.pageName === "RegisterPage") {
        return <Register />
    } else if (props.pageName === "InnPage") {
        return <Inn />
    } else if (props.pageName === "AccountPage") {
        return <Account />
    }
    return <About />
}

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
        <div className="quickInfo">
            <div className="about-container">
                <i className="fas fa-atlas" />
                <h2 style={{margin: '1%'}}>Michigan Bed and Breakfast Guild</h2>
                <h3>Contact Us</h3>
                <ul>
                    <li style={listStyle}>Phone: (000) 000-0000</li>
                    <li style={listStyle}>Email: support@mbbg.com</li>
                </ul>
            </div> 
        </div>
    );
}

function Login() {
    return(
        <div className="quickInfo">
            <div className="login-container">
                <h2>MBBG Member Log In</h2>
                <p>Members can log in to view and update their Bed and Breakfast profiles. Just 
                    enter the email and password associated with your account.
                </p>
                <br />
                <h2>Need to register for an account?</h2>
                <p>There is some information you may need to know before registering. Click the 'Register'
                    button to find out more.
                </p>
                <p>We do also offer accounts for Event organizers and customers.</p>
            </div>
        </div>
    );
}

function Register(props) {
    return(
        <div className="quickInfo">
            <h2>For Member Registration</h2>
            <p>To become a Member Bed and Breakfast you will need to provide information on 
                on your establishment, and we will review your application to determine if you
                are a good fit for our organization.
            </p>
            <br />
            <h2>Are you an Event organizer?</h2>
            <p>We now also offer an account for Event organizers. You need not apply for this, but merely
                create an Event account.
            </p>
            <br />
            <h2>Just a Bed and Breakfast customer?</h2>
            <p>Having a customer account is not necessary to take advantage of our booking system,
                but having one can expedite the process and ensure you get the reservations you desire.
            </p>
        </div>
    )
}

function Inn() {
    return(
        <div className="quickInfo">
            <div className="inn-container">
                <p>Quick Info for Inn</p>
            </div>
        </div>
    );
}

function Account() {
    return(
        <div className="quickInfo">

        </div>
    );
}

export default QuickInfo;