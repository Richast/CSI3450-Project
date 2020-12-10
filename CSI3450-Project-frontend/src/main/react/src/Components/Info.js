import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import './Info.css';

import InnCard from './InnCard.js';

function Info(props) {
    const db = Axios.create({
        baseURL: `http://localhost:8080/csi3450project/v1`
    });

    const [pageName, setPageName] = useState(props.pageName);

    if(pageName === "LoginPage") {
        return(
            <InfoLogin 
                userLoggedIn={props.userLoggedIn} 
                setLoggedIn={props.setLoggedIn}
                userId={props.userId}
                setUserId={props.setUserId}
            />
        );
    } else if (pageName === "LocatePage") {
        return(
            <Locate 


            />
        );
    } else if (pageName === "EventsPage") {
        return <Events eventView={props.eventView} />
    }  else if (pageName === "RegisterPage") {
        return <Register />
    } else if (pageName === "AccountPage") {
        return <Account 
                    userId={props.userId}
                    db={db}
                />
    } 
    
    else {
        return <Home />
    }  
}

function Home(props) {
    return(
        <div className="info">
            <div className="home-container">
                <h1>Welcome to the Michigan Bed and Breakfast Guild!</h1>
                <p>The Michigan Bed and Breakfast Guild is Michigan's leading resource for relaxation and fun! With over 4 member
                    Bed and Breakfast's no other organization can offer visitors the same array of options for your travel needs! </p>
                <br />
                <h3>Looking to stay at a cozy Bed and Breakfast on your next adventure?</h3>
                <p>Search our members and find the perfect getaway based on your desires and abilities. We offer information on the
                    cost and amenities for each member BnB.
                </p>
                <br />
                <h3>Own a Bed and Breakfast and want to become a member?</h3>
                <p>Not just any BnB can become a member as we take quality of experience very seriously. To learn more about becoming a member
                    you can click <Link to="/register">here</Link>.
                </p>
                <br />
                <h3>Interested in finding out about events in Michigan?</h3>
                <p>We also collect information on various types of events organized throughout Michigan such as Art, Food, and Music festivals!
                    To learn more click on the Events to the right of here.
                </p>
            </div>
        </div>
    );
}

function Locate(props) {
    //May want to set up some form of persistance if user hits back to not lose search results
    const db = Axios.create({
        baseURL: `http://localhost:8080/csi3450project/v1`
    });

    const [inns, setInns] = useState([]);
    const [inn, setInn] = useState();
    const [searchValue, setSearchValue] = useState('');
    const [valid, setValid] = useState(true);
    const [noResults, setNoResults] = useState(false); //still not working right

    const handleSubmit = async e => {
        e.preventDefault();
        setValid(true);
        setNoResults(false);    
        if (searchValue.length !== 5) {
            setValid(!valid);
        } else {
            db.get('businesses/zip?zip='+searchValue).then(response => setInns(response.data));
            if (setInns.length === 0) {
                setNoResults(!noResults);
            }
        }
        
        
    }

    return(
        <div className="info">
            <div className="locate-container">
                <h1>Locate a Bed and Breakfast near your desired travel destination.</h1>
                <form onSubmit={handleSubmit} id="searchForm">
                    <label htmlFor="zip">Enter a Zip Code: </label>
                    <input type="text" onChange={({target}) => setSearchValue(target.value)} />
                    <button onClick={handleSubmit}>Search</button>
                    <br />
                    <h4 style={valid ? {display: 'none'} : {color: 'red'}}>Invalid: Please enter a valid Zip Code</h4>
                </form>
                <h3 style={!noResults ?  {display:'none'} : {}}>Unfortunately, there are no member inns near that Zip Code.</h3>
                {inns.map((inn) => (
                    <div>
                        <InnCard 
                            db={db}
                            name={inn.name}
                            id={inn.id}
                            street={inn.street}
                            city={inn.city}
                            zip={inn.zip}
                            state={inn.state}
                            contact={inn.contact}
                            roomAmount={inn.roomAmount}
                            amenities={inn.amenities}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    
}

function Events(props) {
    console.log('worked');
    return(
        <div className="events">
            <h1>This is the info on Event {props.eventView}</h1>
        </div>
    );
}

function InfoLogin(props) {
    const db = Axios.create({
        baseURL: `http://localhost:8080/csi3450project/v1`
    });



    const [uName, setUname] = useState("");
    const [pass, setPass] = useState("");
    const [incorrect, setIncorrect] = useState(false);


    const handleChange = async e => {
        e.preventDefault();
        const response = await db.get('user/login?email='+uName+'&password='+pass);
        
        console.log(response);
        if (response.data === '') {
            setIncorrect(!incorrect);
        } else {
            props.setLoggedIn(true);
            localStorage.setItem('userId', response.data.id);
            localStorage.setItem('loggedIn', true);

        }
        
    };

    

    if (props.userLoggedIn) {
        return(
            <div className="info">
                <h3>Congrats, you're logged in.</h3>
            </div>
        );
    }
    return(
        <div className="info">
            <h3 style={(!incorrect ? {display: 'none', color: 'red'} : {color: 'red'})}>Incorrect email or password</h3>
            <div className="login-container">
                
                <form onSubmit={handleChange} id="loginForm">
                    <label htmlFor="email">Email: </label>
                    <input type="text"  value={props.username} onChange={({target}) => setUname(target.value)}/>

                    <label htmlFor="password">Password: </label>
                    <input type="password" value={props.password} onChange={({target}) => setPass(target.value)}/>

                    <button type="submit">Login</button>
                </form>
                <Link to="/register">
                    <div className="registerButton" style={{background: 'grey'}, {width:"5vw"}, {height: "5vh"}}>
                        Register
                    </div>
                    
                </Link>
            </div>
        </div>
    );
}

function Register(props) {
    const db = Axios.create({
        baseURL: `http://localhost:8080/csi3450project/v1`
    });

    
    const [accountType, setAccountType] = useState('BnB');
    const [account, setAccount] = useState({
        email: '',
        password:'',
        type:'',
        name:'',
        state:'MI',
        city:'',
        street:'',
        zip:'',
        contact:'',
        payment:''
    });
    const [accountCreated, setAccountCreated] = useState(false);
    const [accountFailed, setAccountFailed] = useState(false);

    const updateType = (accType) => {
        setAccount((prevState) => ({...prevState, type: accType}));
        console.log(account.type);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setAccount((prevState) => ({...prevState, type: accountType}));
        await db.post('/user', account).then(response => setAccountCreated(!accountCreated));
        var form = document.getElementById('register');
        form.reset();
    }

    return(
        <div className="info">
<           div className="registerForm" >
                <form id="register">
                    <h1>Michigan Bed and Breakfast Guild User Registration</h1>

                    <p>Account type: {account.type}</p>
                    <button onClick={(e) => {e.preventDefault(); setAccount((prevState) => ({...prevState, type: 'bnb'}))}}>BnB</button>
                    <button onClick={(e) => {e.preventDefault(); setAccount((prevState) => ({...prevState, type: 'customer'}))}}>Customer</button>
                    <button onClick={(e) => {e.preventDefault(); setAccount((prevState) => ({...prevState, type: 'event'}))}}>Event</button><br />

                    <label htmlFor="name">Name: </label>
                    <input type="text" onChange={({target}) => setAccount((prevState) => ({...prevState, name: target.value}))}/>
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input type="text" onChange={({target}) => setAccount((prevState) => ({...prevState, email: target.value}))} />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input type="password" onChange={({target}) => setAccount((prevState) => ({...prevState, password: target.value}))} />
                    <br />
                    <label htmlFor="contact">Contact Phone: </label>
                    <input type="text" onChange={({target}) => setAccount((prevState) => ({...prevState, contact: target.value}))} />
                    <br />

                    <p><strong>Address</strong></p>
                    <label htmlFor="street">Street: </label>
                    <input type="text" onChange={({target}) => setAccount((prevState) => ({...prevState, street: target.value}))} />
                    <br />
                    <label htmlFor="city">City: </label>
                    <input type="text" onChange={({target}) => setAccount((prevState) => ({...prevState, city: target.value}))} />
                    <br />
                    <label htmlFor="zip">Zip Code: </label>
                    <input type="text" onChange={({target}) => setAccount((prevState) => ({...prevState, zip: target.value}))} />
                    <br />
                </form>
            </div>
            <Link to='/login'>
                <button onClick={handleSubmit}>Submit</button>
            </Link>
            <br />
            <br />
            <h1 style={!accountCreated ? {display:'none'} : {}}>Congratulations, your account was successfully created!</h1>
            <h3 style={!accountCreated ? {display:'none'} : {}}>Click <Link to="/login">here</Link> to log in.</h3>
        </div>
    )
}

function Account(props) {
    const [user, setUser] = useState({});
    const [upName, setUpName] = useState(false);
    const [bookings, setBookings] = useState([]);

    const [upContact, setUpContact] = useState(false);

    const [upAddress, setUpAddress] = useState(false);
    const [upType, setUpType] = useState(false);

    useEffect(() => {
        props.db.get('/user?userId='+localStorage.getItem('userId')).then(response => setUser(response.data));
        props.db.get('/booking/customer?customerId='+localStorage.getItem('userId')).then(response => setBookings(response.data));
        console.log(bookings[0]);
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        await props.db.put('/user', user).then(response => console.log("updated"));

    }

    const deleteAccount = async e => {
        e.preventDefault();
        await props.db.delete('/user', {data: user.id}).then(response => console.log('deleted'));
        localStorage.clear();
    }

    const handleCancel = async (booking) => {
        await props.db.delete('/booking', {data: booking.bookingId}).then(response => console.log('deleted'));

    }

    return(
        <div className="info">
            <div>
                <form id="accountForm">
                <h3>Account Details</h3>
                <p>Name: {user.name}</p> 
                <button onClick={(e) => {e.preventDefault(); setUpName(!upName)}} style={upName ? {display: 'none'} : {}}>Update</button>
                <input type="text" style={!upName ? {display: 'none'} : {}} onChange={({target}) => setUser((prevState) => ({...prevState, name: target.value}))}/>
                <button style={!upName ? {display:'none'} : {}} onClick={(e) => {e.preventDefault(); setUpName(!upName)}}>Save</button>
                
                <p>Email: {user.email}</p> 
                
                <p>Phone: {user.contact}</p> 
                <button onClick={(e) => {e.preventDefault(); setUpContact(!upContact)}} style={upContact ? {display: 'none'} : {}}>Update</button>
                <input type="text" style={!upContact ? {display: 'none'} : {}} onChange={({target}) => setUser((prevState) => ({...prevState, contact: target.value}))}/>
                <button onClick={(e) => {e.preventDefault(); setUpContact(!upContact)}} style={!upContact ? {display:'none'} : {}}>Save</button>

                <p><strong>Address:</strong></p> 
                <p>Street: {user.street}</p> 
                <p>City: {user.city}, State: {user.state} Zip: {user.zip}</p>
                <button onClick={(e) => {e.preventDefault(); setUpAddress(!upAddress)}} style={upAddress ? {display: 'none'} : {}}>Update</button>
                <input type="text" placeholder="Street Address"
                    onChange={({target}) => setUser((prevState) => ({...prevState, street: target.value}))}
                    style={!upAddress ? {display: 'none'} : {}}
                    />
                <input type="text" placeholder="City"
                    onChange={({target}) => setUser((prevState) => ({...prevState, city: target.value}))}
                    style={!upAddress ? {display: 'none'} : {}}
                    />
                <input type="text" placeholder="State"
                    onChange={({target}) => setUser((prevState) => ({...prevState, state: target.value}))}
                    style={!upAddress ? {display: 'none'} : {}}
                    />
                <input type="text" placeholder="Zip"
                    onChange={({target}) => setUser((prevState) => ({...prevState, zip: target.value}))}
                    style={!upAddress ? {display: 'none'} : {}}
                    />
                <button onClick={(e) => {e.preventDefault(); setUpAddress(!upAddress)}} style={!upAddress ? {display: 'none'} : {}}>Save</button>
                <p>Account type: {user.type}</p>
                </form>
            </div>    
            <div>
                <button onClick={handleSubmit}>Save Account</button>
                <button onClick={deleteAccount}><Link to="/">Delete Account</Link></button>
            </div>
            <div style={(user.type === 'event') ? {} : {display: 'none'}}>
                <p>hello</p>
            </div>
            <div style={(user.type === 'customer') ? {} : {display: 'none'}}>
                <h3>Your reservations:</h3>
                {bookings.map((booking) => (
                    <div>
                        <p>Date: {booking.date}</p>
                        <button onClick={(e) => {e.preventDefault(); handleCancel(booking)}}>Cancel</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Info;