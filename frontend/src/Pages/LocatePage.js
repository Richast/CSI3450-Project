import React, {useState} from 'react';
import Banner from './../Components/Banner.js';
import Navbar from './../Components/Navbar.js';
import QuickInfo from './../Components/QuickInfo.js';
import Events from './../Components/Events.js';
import Info from './../Components/Info.js';

/*
    The Locate page is the search tool for the user to locate a bed and breakfast based on user
    input search.

    Components:
        Banner - Visible
        Navbar - Visible
        QuickInfo - Visible
        Information - Visible
        Events - Visible

    The QuickInfo component will contain the search as well as a Google Maps upon search. The Information
    component will show the results of a search, and the Events component will update to show events near
    a users search.
*/

function LocatePage(props) {
    return(
        <div className="LocatePage">
            <div className="banner"><Banner visible={true} /></div>
            <div><Navbar loggedIn={false} /></div>
            <div className="content">
                <QuickInfo />
                <Info />
                <Events />
            </div>
        </div>
    );
}

export default LocatePage;