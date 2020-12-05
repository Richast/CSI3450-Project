import React, {useState} from 'react';
import Banner from './../Components/Banner.js';
import Navbar from './../Components/Navbar.js';
import QuickInfo from './../Components/QuickInfo.js';
import Events from './../Components/Events.js';
import Info from './../Components/Info.js';

/*
    The Home Page is the landing page of the site, featuring navigation and information about
    MBBG itself.

    Components:
        Banner - Visible
        Navbar - Visible
        QuickInfo - Visible
        Information - Visible
        Events - Visible

*/

function HomePage(props) {

    const details = "Welcome to the MBBG site";


    return(
        <div className="homePage">
            <div className="banner"><Banner visible={true}/></div>
            <Navbar loggedIn={false} />
            <div className="content">
                <QuickInfo />
                <Info />
                <Events />
            </div>
            
        </div>
    );
}

export default HomePage;