import { Redirect } from 'react-router-dom';
import { useState, useEffect} from "react";
import { getUser, clearUserStorage } from '../../local-storage/LocalStorage';
import { useHistory, useLocation } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar(){
    const history = useHistory();  
    const location = useLocation();
    const [userLoggedIn, setUserLoggedIn] = useState();


    useEffect(() => {
        setUserLoggedIn(getUser());
    }, [location])

    function clearUserHistory(){ //clear localStore user history and set userLogged in to false
        clearUserStorage(getUser());
        history.replace("/"); //redirect to login page
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Lost In Translation</Navbar.Brand>
                { !userLoggedIn ?  //if user is not logged in, redirect to login page
                    <Redirect to="/" /> : //if user is logged in show navigation
                    <Nav className="navbar-expand justify-content-end">
                        <Nav.Item className="navbar-nav nav-link"><Nav.Link href="/translation">Translate</Nav.Link></Nav.Item>
                        <Nav.Item className="navbar-nav nav-link"><Nav.Link href="/profile">Profile</Nav.Link></Nav.Item>
                        <Nav.Item className="navbar-nav nav-link navbar-brand"><Button variant="outline-light" aria-controls="basic-navbar-nav" onClick= {clearUserHistory}>Log Out</Button></Nav.Item>
                    </Nav>  }
            </Navbar>
        </div>
    );
};

export default NavigationBar;