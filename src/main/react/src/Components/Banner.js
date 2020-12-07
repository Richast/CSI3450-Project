import React, {useState} from 'react';

import logo from './../logo.svg';

function Hidden(props) {
    return(null);
}

function FullBanner(props) {
    return(
        <div className="banner">
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
        </div>
    );
}

function Banner(props) {
    const visible = props.visible;

    if(visible) {
        return <FullBanner />
    }
    return <Hidden />
}

export default Banner;