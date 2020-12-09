import React from 'react';
import './Banner.css';

import blackcreek from './../Images/blackcreek.jpg';
import dowagiacwoods from './../Images/dowagiacwoods.jpg';
import crisppoint from './../Images/crisppoint.jpg';
import harveysrocks from './../Images/harveysrocks.jpg';
import olsonfalls from './../Images/olsonfalls.jpg';

function Banner() {
    return(
        <div className="banner">
            <img className="banner-img" src={blackcreek} />
            <img className="banner-img" src={dowagiacwoods} />
            <img className="banner-img" src={crisppoint} />
            <img className="banner-img" src={harveysrocks} />
            <img className="banner-img" src={olsonfalls} />
        </div>
    );
}

export default Banner;