import { useState } from "react";
import {useHistory} from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import LogoHello from '../../assets/LostInTranslation_Resources/Logo-Hello.png';
import './Login.css';
import {setUser} from '../../local-storage/LocalStorage';

const Login = () => {   
    const history = useHistory()

    const [name, setName] = useState({
        name: null
    })

    const onNameChanged = (event) =>{ //set input username to name state
        setName({
            ...name,
            [event.target.id]: event.target.value
        })
    }



    const onSubmitClicked = (event) => { //set name to props
        event.preventDefault() //no reload
        
        fetch('http://localhost:3004/profile', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(name)
        })
        .then(async (response) => {
            if(!response.ok){
                const { error = "An unknown error occurred"} = await response.json();
                throw new Error(error);
            }
            console.log(JSON.stringify(name) + " added to db!")
        })
        setUser(name)
        history.replace("/translation")
    };

    return (
        <Container className="body-startup">
            <img src={LogoHello} alt="Logo-Hello" />
        
            <Form onSubmit={onSubmitClicked}>
                <Row>
                    <Col md={{ span: 3, offset: 3 }}>
                        <Form.Control placeholder="Name" type="text" id="name" onChange={onNameChanged} />
                    </Col>
                    <Col>
                        <Button type="Submit" className="mb-2">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
        
    )
}

export default Login;