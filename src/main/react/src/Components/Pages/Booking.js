import React, {useState} from 'react';

import QuickInfo from './../QuickInfo.js';
import Info from './../Info.js';
import Events from './../Events.js';

function Booking(props) {


    return(
        <div className="components-container">
            <QuickInfo 
                pageName={"InnPage"}
            />
            <Info 
                pageName={"BookingPage"}
            />
            <Events />
        </div>
    );
}

export default Booking;