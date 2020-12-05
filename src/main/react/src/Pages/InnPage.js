import React, {useState} from 'react';
import Banner from './../Components/Banner.js';
import Navbar from './../Components/Navbar.js';
import QuickInfo from './../Components/QuickInfo.js';
import Events from './../Components/Events.js';
import Info from './../Components/Info.js';

/*
    The Inn page is the 'homepage' of a particular member Bed and Breakfast as viewed by a 
    user / customer. 

    Components:
        Banner - Hidden
        Navbar - Visible
        QuickInfo - Visible
        Information - Visible
        Events - Visible

    The Banner is hidden on this page. QuickInfo will show a Google Maps pin for the Inn, and member
    submitted images (if any). Information will contain the details of the Bed and Breakfast as input
    by the member, as well as handle booking forms. Events will show Events near that Inn's location.
*/

function InnPage(props) {
    return(
        <div className="InnPage">
            <div className="banner"><Banner visible={false} /></div>
            <div><Navbar loggedIn={false} /></div>
            <div className="content">
                <QuickInfo />
                <Info />
                <Events />
            </div>
        </div>
    );
}

export default InnPage;