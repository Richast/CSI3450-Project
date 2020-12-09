import React from 'react';
import './../../App.css';

import QuickInfo from './../QuickInfo.js';
import Info from './../Info.js';
import Events from './../Events.js';

function Logout(props) {
    return(
        <div className="components-container">
            <QuickInfo />
            <Info />
            <Events axiosGet={props.axiosGet}/>
        </div>
    );
}

export default Logout;