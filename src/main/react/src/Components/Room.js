import React, {useState} from 'react';

function Room(props) {
    const [booking, setBooking] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setBooking(booking => !booking);
    }
    return(
        <div className="roomContainer">
            <h3>Room {props.number}</h3>
            <p>Price: ${props.price}/night</p>
            <div className="roomInfo" style={booking ? {display: 'none'} : {}}>
                <button onClick={handleSubmit}>Book</button>
            </div>
            <div className="roomBook" style={!booking ? {display:'none'} : {}}>
                <form >
                    <input type='text' />
                    <input type='text' />
                    <input type='date' />
                    <button onClick={handleSubmit}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Room;