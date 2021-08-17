import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {

    const [name, setName] = useState("");
    

    function validateForm() { //validate user input
        return name.length > 0;
    };

    const onSubmitClicked = async (e) =>{ //set name to props
        console.log(e.target.value)
        console.log("hej")
         try {
            const response = await fetch('http://localhost:3004/profile', {
            metod: 'POST',
            body: JSON.stringify({
                name: e.target.value
            })
        })
        const content = await response.json();
        } catch (error) {
            console.log('Error: ', error)
        } 

    };

    function onNameChanged(e){ //set input username to name state
        setName(e.target.value.trim());
        
    }

    return (
        <Form>
             <Form.Group>
                <Form.Label>Username</Form.Label>
            </Form.Group>
            
            <Form.Group>
                <Form.Control className="mb-3" autoFocus type="username" placeholder="what yo name?"  value={name} onChange={ onNameChanged }/>
            </Form.Group>
            <Button className="btn btn-primary btn-lg" variant="info" type="submit" disabled={ !validateForm() } onClick={ onSubmitClicked }>Submit</Button>
        </Form>
    )
}

export default Login;