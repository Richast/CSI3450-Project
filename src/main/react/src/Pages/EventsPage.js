import React, {useState} from 'react';
import Banner from './../Components/Banner.js';
import Navbar from './../Components/Navbar.js';
import Events from './../Components/Events.js';
import Info from './../Components/Info.js';
/*
    The Events page will feature the list of Events from the Event Component
    as well as the full details for each Event.

    Components:
        Banner - Visible
        Navbar - Visible
        QuickInfo - Hidden
        Information - Visible
        Events - Visible

    The Events component will be located where the QuickInfo normally is, and Information
    will show the details on a user selected Event from the Events component.
*/

function EventsPage(props) {

    const [pageValues, setPValues] = useState([

    ]);



    return(
        <div className="Events">
            <div className="banner"><Banner visible={true} /></div>
            <div><Navbar loggedIn={false} /></div>
            <div className="content">
                <Events />
                <Info />
            </div>
            
        </div>
    );
}

export default EventsPage;