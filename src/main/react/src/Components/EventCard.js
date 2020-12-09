import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Events.css';

const EventCard = (props) => {
    return(
        <Link to="/events" className="eventCard">
            <div>
                <h3>{props.name}</h3>
                <p>Date: {props.date}</p>
                <p>Price: ${props.price} / person</p>
            </div>
        </Link>
    );
}

export default EventCard;