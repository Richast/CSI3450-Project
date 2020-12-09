import React, {useState} from 'react';
import './../../App.css';

import QuickInfo from './../QuickInfo.js';
import Info from './../Info.js';
import Events from './../Events.js';

function Locate(props) {
    const [nearbyInn, setNearbyInn] = useState();

    return(
        <div className="components-container">
            <QuickInfo />
            <Info 
                pageName={props.pageName}
                innId={props.innId}
                setInnId={props.setInnId}
            />
            <Events axiosGet={props.axiosGet}/>
        </div>
    );
}

export default Locate;