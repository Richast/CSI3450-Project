import React, {useState} from 'react';
import Banner from './../Components/Banner.js';
import Navbar from './../Components/Navbar.js';
import QuickInfo from './../Components/QuickInfo.js';
import Info from './../Components/Info.js';

/*
    The Log In page handles the logging in as well as registering of users. It will contain the QuickInfo
    and Information components, with the page loading initially with Log In forms.

    Components:
        Banner - Visible
        Navbar - Visible
        QuickInfo - Visible
        Information - Visible
        Events - Hidden

    Only the Events component will be hidden. QuickInfo will contain information regarding registration as 
    only Member BnB's will be eligible, so registration will be approved.
*/

function LoginPage(props) {
    return(
        <div className="LoginPage">
            <div className="banner"><Banner visible={true} /></div>
            <div><Navbar loggedIn={false} /></div>
            <div className="content">
                <QuickInfo />
                <Info />
            </div>
        </div>
    );
}

export default LoginPage;