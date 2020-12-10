import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './Info.css';

const RoomCard = (props) => {
    const [bookings, setBookings] = useState([]);
    const [dateInput, setDateInput] = useState(false);
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState(0);
    const [notLoggedIn, setNotLoggedIn] = useState(true);
    const [validInput, setValidInput] = useState(false);

    const [booking, setBooking] = useState({
        businessId: '',
        customerId: '',
        roomId: '',
        date: '',
        duration: '',
    });
    const [booked, setBooked] = useState(false);

    useEffect(() => {
        setBookings(props.bookings);
        setBooking((prevState) => ({...prevState, customerId: localStorage.getItem('userId')}));
        setBooking((prevState) => ({...prevState, roomId: props.roomId}));
        setBooking((prevState) => ({...prevState, businessId: props.id}));
        
    }, []);

    const handleBooking = async e => {
        setDateInput(!dateInput);
        setValidInput(false);
    }

    const refreshPage = () => {
        window.location.reload(false);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(booking.date);

        for (var i = 0; i < bookings.length; i++) {
            if (date === bookings[i].date) {
                console.log(bookings[i].date);
                setValidInput(!validInput);
                var form = document.getElementById('bookingForm');
                form.reset();
            } 

        }
        
        if (props.userLoggedIn) {
            console.log("booked");
            await props.db.post('/booking', booking).then(response => setBooked(!booked));
            window.alert("Your room has been booked!");
            refreshPage();
        } else {
            window.alert("Please log in to book a room");
        }
        var form = document.getElementById('bookingForm');
        form.reset();
    }

    return (
        <div className="innCardItem">
            <h3>Room #{props.number}</h3>
            <p>Price: ${props.price}</p>
            <button onClick={handleBooking}>Book</button>
    
            <div className="innCardItem" style={!dateInput ? {display: 'none'} : {}}>
                <form id="bookingForm">
                    <label htmlFor="date">Starting Date: </label> <br></br>
                    <input type="date" onChange={({target}) => setBooking((prevState) => ({...prevState, date: target.value}))}/><br />
                    <label htmlFor="duration">Duration: </label><br />
                    <input type="number" onChange={({target}) => setBooking((prevState) => ({...prevState, duration: target.value}))}/><br />
                    <label htmlFor="name">Name: </label>
                    <input type="text" />
                    <label htmlFor="email">Email: </label>
                    <input type="text" />
                    <button onClick={handleSubmit}>Continue</button>
                </form>
            </div>
            <div style={!validInput ? {display: 'none'} : {color: 'red'}}>
                <h3>That room isn't available on that day.</h3>
            </div>
        </div>
    );
}

export default RoomCard;