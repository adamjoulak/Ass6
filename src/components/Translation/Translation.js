import './Translation.css';
import { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import {getUser} from '../../local-storage/LocalStorage';

const Translation = () => {
    
    const isLoggedIn = getUser();
    console.log(isLoggedIn)

    const [sentence, setSentence] = useState([])

    const [imgs, setRenderPics] = useState([])


    const handleTranslation = (event) => { //set input 
        setSentence(event.target.value)
    }


    const onSubmit = (event) => {
        event.preventDefault() //no reload        

        let str = sentence.split('');
        
        for (let i = 0; i < str.length; i++) {
            if(str[i] !== " "){
                console.log(str[i])
                str[i] = str[i].toLowerCase() + ".png";
            }else {
                delete str[i];
            }
            
        }
        setRenderPics(str)
        saveToDatabase(str, /*id*/)
        
    }

    const saveToDatabase = (str) =>{
        fetch('http://localhost:3004/translations', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(str)
        })
        .then(async (response) => {
            if(!response.ok){
                const { error = "An unknown error occurred"} = await response.json();
                throw new Error(error);
            }
            console.log(JSON.stringify(str) + " added to db!")
        })
    }


    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col md={{ span: 3, offset: 3 }}>
                        <Form.Control placeholder="Enter text" type="search" id="sentence" onChange={handleTranslation} />
                    </Col>
                    <Col>
                        <Button type="Submit" className="mb-2">
                            Submit
                        </Button>
                    </Col>
                </Row>
                <Row>                     
                {imgs && imgs.map((i) => {                    
                   return <figure>
                       <img  src={`./individial_signs/${i}`} alt="img" />  
                       <figcaption><center>{i.charAt(0)}</center></figcaption>
                       </figure>                  
                })}

                </Row>
            </Form>
            <div>
            </div>

        </div>
    );
}

export default Translation;