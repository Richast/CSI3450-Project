import React from 'react';
import './../../App.css';

import QuickInfo from './../QuickInfo.js';
import Info from './../Info.js';
import Events from './../Events.js';

function Home(props) {
    return(
        <div className="components-container">
            <QuickInfo />
            <Info 
                axiosTest={props.axiosTest}
            />
            <Events axiosGet={props.axiosGet}/>
        </div>
    );
}

export default Home;