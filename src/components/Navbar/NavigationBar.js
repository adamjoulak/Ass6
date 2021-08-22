import { Redirect, Link } from 'react-router-dom';
import { useState, useEffect} from "react";
import { getUserLocalStorage, clearUserStorage } from '../../local-storage/LocalStorage';
import { useHistory, useLocation } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar(){
    const history = useHistory();  
    const location = useLocation();
    const [userLoggedIn, setUserLoggedIn] = useState();


    useEffect(() => {
        setUserLoggedIn(getUserLocalStorage());
    }, [location])

    const clearUserHistory = () => { //clear localStore user history and set userLogged in to false
        clearUserStorage(getUserLocalStorage());
        history.replace("/"); //redirect to login page
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Lost In Translation</Navbar.Brand>
                { !userLoggedIn ?  //if user is not logged in, redirect to login page
                    <Redirect to="/" /> : //if user is logged in show navigation
                    <Nav className="navbar-expand justify-content-end">
                        <Nav.Item className="navbar-nav nav-link"><Link to="/translation">Translate</Link></Nav.Item>
                        <Nav.Item className="navbar-nav nav-link"><Link to="/profile">Profile</Link></Nav.Item>
                        <Nav.Item className="navbar-nav nav-link navbar-brand"><Button variant="outline-light" aria-controls="basic-navbar-nav" onClick= {clearUserHistory}>Log Out</Button></Nav.Item>
                    </Nav>  }
            </Navbar>
        </div>
    );
};

export default NavigationBar;