import React, {useState} from 'react';
import './Events.css';

const EventCard = (props) => {
    return(
            <div className="eventCard">
                <div className="eventCardName">
                    <h3>{props.name}</h3>
                    <p>Date: {props.date}</p>
                    <p>Price: ${props.price} / person</p>
                </div>    
                <div className="eventCardAddress">
                    <h3>Address</h3>
                    <p>{props.street}</p>
                    <p>{props.city}, {props.state} {props.zip}</p>
                </div>
            </div>
    );
}

export default EventCard;