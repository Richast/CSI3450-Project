import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import EventCard from './EventCard.js';

import './Events.css';

function Events(props) {
    const db = Axios.create({
        baseURL: `http://192.168.1.101:8080/csi3450project/v1`
    });

    const [events, setEvents] = useState([]);

    useEffect(() => {
        db.get('/events/all').then(response => setEvents(response.data));
    }, []);

    
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
                        street={event.street}
                        city={event.city}
                        state={event.state}
                        zip={event.zip}
                    />
                ))}
            </div>
        </div>
        
    );
}

export default Events;