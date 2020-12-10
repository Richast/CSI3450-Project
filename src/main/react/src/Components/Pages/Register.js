import React from 'react';
import './../../App.css';

import QuickInfo from './../QuickInfo.js';
import Info from './../Info.js';

function Register(props) {
    return(
        <div className="components-container">
            <QuickInfo 
                pageName={"RegisterPage"}
            />
            <Info 
                pageName={"RegisterPage"}
            />
        </div>
    );
}

export default Register;