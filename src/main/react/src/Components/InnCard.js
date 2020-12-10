import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './Info.css';

import RoomCard from './RoomCard.js';

const InnCard = (props) => {
    const innCardStyle = {
        textDecoration: 'none',
        alignContent: 'center',
        color: 'white'
    };

    const [selected, setSelected] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [bookingData, setBookingData] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        props.db.get('/room/business?businessId='+props.id).then(response => setRooms(response.data));
        console.log(rooms.length);
        for (var i = 0; i < rooms.length; i++) {
            setBookingData((prevState) => ([...prevState, false]));
        }
        console.log(bookingData);

        props.db.get('/booking/business?businessId='+props.id).then(response=> setBookings(response.data));
    }, []);

    return(
        <div className="innCard">
            <div className="innCardButtonDiv" style={selected ? {display: 'none'} : {}}>
                <button className="innCardButton" onClick={() => setSelected(true)}>
                    <h3>{props.name}</h3>
                </button>
            </div>
            <div className="innCardDiv" style={!selected ? {display: 'none'} : {}}>
                <div className="innCardItem">
                    <h3>{props.name}</h3>
                    <h3>Address</h3>
                    <p>{props.street}</p>
                    <p>{props.city}, {props.state} {props.zip}</p>
                    <p>Phone: {props.contact}</p>
                    <p>Special Amenities: {props.amenities}</p>
                </div>
                <div className="innCardItem">
                    <h3>Upcoming Bookings</h3>
                        {bookings.map((booking) => (
                            <>
                                <p>Room #{booking.roomId}</p>
                                <p>Date: {booking.date} for {booking.duration} day(s)</p>
                            </>
                        ))}
                </div>
                {rooms.map((room) => (
                    <RoomCard 
                        db={props.db}
                        number={room.number}
                        price={room.price}
                        vacant={room.vacant}
                        id={props.id}
                        roomId={room.id}
                        bookings={bookings}
                        userLoggedIn={props.userLoggedIn}
                        setBookings={setBookings}
                    />
                ))}
            </div>
        </div>
    );
}

export default InnCard;