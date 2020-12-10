import React from 'react';
import './../../App.css';

import QuickInfo from './../QuickInfo.js';
import Info from './../Info.js';
import Events from './../Events.js';

function Account(props) {
    return(
        <div className="components-container">
            <QuickInfo 
                pageName="AccountPage"
                userId={props.userId}
            />
            <Info 
                pageName="AccountPage"
                userId={props.userId}
            />
            <Events />
        </div>
    );
}

export default Account;