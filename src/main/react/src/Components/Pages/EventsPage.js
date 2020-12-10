import React, {useState} from 'react';
import './../../App.css';

import QuickInfo from './../QuickInfo.js';
import Info from './../Info.js';
import Events from './../Events.js';

function EventsPage(props) {
    const [eventView, setEventview] = useState("");

    return(
        <div className="components-container">
            <Events 
                setEventview={setEventview} 
                axiosGet={props.axiosGet}
            />
            <Info 
                pageName={"EventsPage"}
                eventView={eventView} 
                axiosGet={props.axiosGet}
            />
            
        </div>
    );
}

export default EventsPage;