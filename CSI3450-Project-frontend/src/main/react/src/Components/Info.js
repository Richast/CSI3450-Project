import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import './Info.css';

import Room from './Room.js';
import InnCard from './InnCard.js';

function Info(props) {
    const [searchValue, setSearch] = useState(() => {
        return 0;
    });
    
    const [innId, setInnId] = useState('');
    const [pageName, setPageName] = useState(props.pageName);

    const axiosGet = async e => {
        props.api.get(e).then(response => {
            console.log(response.data)
            props.setNearbyInn(response.data);
            console.log(props.nearbyInn);
        });
    }

    const handleChange = async e => {
        e.preventDefault();
        console.log(searchValue);
        axiosGet('/businesses/zip?zip=' + searchValue);
        console.log(props.nearbyInn);
    }

    if(pageName === "LoginPage") {
        return(
            <InfoLogin 
                userLoggedIn={props.userLoggedIn} 
                userId={props.userId}
                setUserId={props.setUserId}
                handleSubmit={props.handleSubmit} 
                setUsername={props.setUsername}
                setPassword={props.setPassword}
                usernameCallback={props.usernameCallback}
                passwordCallback={props.passwordCallback}
                axiosGet={props.axiosGet}
            />
        );
    } else if (pageName === "LocatePage") {
        return(
            <Locate 
                axiosGet={axiosGet}
                handleChange={handleChange}
                setSearch={setSearch}
                setInnId={setInnId}
            />
        );
    } else if (pageName === "EventsPage") {
        return <Events eventView={props.eventView} />
    } else if (pageName === "BookingPage") {
        return <Booking 
                innId={innId}
                setInnId={setInnId}
                handleSubmit={props.handleSubmit}
                />
    } else if (pageName === "RegisterPage") {
        return <Register />
    } else if (pageName === "AccountPage") {
        return <Account />
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
    const [searchValue, setSearchValue] = useState('');
    const [noResults, setNoResults] = useState(false); //still not working right

    const handleSubmit = async e => {
        e.preventDefault();
        db.get('businesses/zip?zip='+searchValue).then(response => setInns(response.data));
        if (setInns.length === 0) {
            setNoResults(!noResults);
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
                </form>
                <h3 style={noResults ?  {display:'none'} : {}}>Unfortunately, there are no member inns near that Zip Code.</h3>
                {inns.map((inn) => (
                    <Link to={'/business/id-'+inn.id} onClick={props.setInnId(inn.id)}>
                        <InnCard 
                            name={inn.name}
                            id={inn.id}

                        />
                    </Link>    
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
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = async e => {
        e.preventDefault();
        const response = await db.get('user/login?email='+uName+'&password='+pass);
        localStorage.setItem('userId', response.data.id);
        console.log(response);
        if (response.data === '') {
            setIncorrect(!incorrect);
        } else {
            setLoggedIn(!loggedIn);
        }
        
    };

    

    if (loggedIn) {
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

function Booking(props) {
    const db = Axios.create({
        baseURL: `http://localhost:8080/csi3450project/v1`
    });

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.get('/room/business?businessId=1'/*+props.innId*/).then(response => setRooms(response.data));
        
    }, []);
    

    const handleSubmit = async e => {
        e.preventDefault();
    }
    
    return(
        <div className="info">
            <h1>Info</h1>
            <form onSubmit={props.handleSubmit} id="bookingForm">
                {rooms.map((room) => (
                    <Room style={room.vacant ? {display: 'none'} : {}}
                        number={room.number}
                        price={room.price}
                        vacant={room.vacant}
                    />   
                ))}
            </form>
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

    const handleSubmit = async e => {
        e.preventDefault();
        setAccount((prevState) => ({...prevState, type: accountType}));
        await db.post('/user', account).then(response => setAccountCreated(!accountCreated));
        var form = document.getElementById('register');
        form.reset();
    }

    return(
        <div className="info">
            <h1>Michigan Bed and Breakfast Guild User Registration</h1>
            <input type="radio" id="bnb" name="account" value="bnb" 
                defaultChecked={true}
                onChange={() => setAccountType('BnB')}
            />
            <label for="bnb">Member Bed and Breakfast</label><br />
            <input type="radio" id="customer" name="account" value="customer" 
                defaultChecked={false}
                onChange={() => setAccountType('Customer')}
            />
            <label for="customer">Customer</label><br />
            <input type="radio" id="event" name="account" value="event" 
                defaultChecked={false}
                onChange={() => setAccountType('Event')}
            />
            <label for="event">Event Organizer</label><br />

            <div className="registerForm" >
                <form id="register">
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
    return(
        <div className="info">

        </div>
    );
}

export default Info;