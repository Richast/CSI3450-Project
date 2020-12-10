import React from 'react';
import './../../App.css';

import QuickInfo from './../QuickInfo.js';
import Info from './../Info.js';
import Events from './../Events.js';

function Login(props) {
    return(
        <div className="components-container">
            <QuickInfo pageName={props.pageName}/>
            <Info 
                pageName={props.pageName}
                userId={props.userId}
                setUserId={props.setUserId}
                userLoggedIn={props.userLoggedIn} 
                setLoggedIn={props.setLoggedIn}
            />
            <Events />
        </div>
    );
}

export default Login;