import React, {useState} from 'react';
import Banner from './../Components/Banner.js';
import Navbar from './../Components/Navbar.js';
import QuickInfo from './../Components/QuickInfo.js';
import Info from './../Components/Info.js';

/*
    The Account page shows the information relating to the users BnB account upon successful login. It will only 
    contain the Navbar, QuickInfo, and Information components.

    Components:
        Banner - Hidden
        Navbar - Visible
        QuickInfo - Visible
        Information - Visible
        Events - Hidden

*/

function AccountPage(props) {
    return(
        <div className="homePage">
            <div className="banner"><Banner visible={false}/></div>
            <Navbar loggedIn={true} />
            <div className="content">
                <QuickInfo />
                <Info />
            </div>
            
        </div>
    );
}