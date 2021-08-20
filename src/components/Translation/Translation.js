import './Translation.css';
import { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import {getUser} from '../../local-storage/LocalStorage';

const Translation = () => {

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
        saveToDatabase(sentence)
        
    }

    const saveToDatabase = async (sentence) =>{
        let name = getUser();
        let userData = null;
        try{
            const response = await fetch(`http://localhost:3004/profile/${name.name}`)
            userData = await response.json();
        }catch(error){
            console.log(error);
        }
        console.log(userData)

        

/*         fetch(`http://localhost:3004/profile/${name.name}`, {
            method: 'PUT',
            headers: {"Content-type": "application/json"},
            body: putRequest
        })
        .then(async (response) => {
            if(!response.ok){
                const { error = "An unknown error occurred"} = await response.json();
                throw new Error(error);
            }
            console.log(putRequest + " added to db!")
        }) */
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
                {imgs && imgs.map((i, key) => {                    
                   return <figure>
                       <img key={key} src={`./individial_signs/${i}`} alt="img" />  
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