import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import EventCard from './EventCard.js';

import './Events.css';

function Events(props) {
    const db = Axios.create({
        baseURL: `http://localhost:8080/csi3450project/v1`
    });

    const [events, setEvents] = useState([]);

    useEffect(() => {
        db.get('/events/all').then(response => setEvents(response.data));
    }, []);


    const [eventView, setEventview] = useState(() => {
        return "";
    });
    //Need to use componentDidMount for this since it will only run once
    const handleEvent = (e) => {
        props.setEventview(e);
    }
    
    return(
        <div className="events-container">
            <h1>Events</h1>
            <div className="events">
            
                {events.map((event) => (
                    <EventCard 
                        eventId={event.id}
                        name={event.name}
                        date={event.date}
                        price={event.price}
                    />
                ))}
            </div>
        </div>
        
    );
}

export default Events;