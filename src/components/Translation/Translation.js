import './Translation.css';
import { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";

const Translation = () => {
    

    const [sentence, setSentence] = useState([])

     const [imgs, setRenderPics] = useState([]) 


    const handleTranslation = (event) => { //set input 
        setSentence(event.target.value)
    }


    const onSubmit = (event) => {
        event.preventDefault() //no reload        

        let str = sentence.split('');
        console.log(str) 
        /* str.forEach(x => {
            if(x !== " "){
                x += x.toLowerCase() + ".png"
            }else{
                str.pop(x)
            }
                
        }); */
        for (let i = 0; i < str.length; i++) {
            if(str[i] !== " "){
                console.log(str[i])
                str[i] = str[i].toLowerCase() + ".png";
            }else {
                delete str[i];
            }
            
        }
        console.log(str)
        setRenderPics(str)
        
    }


    return (
        /////////////// IMPLEMENT FORM ////////////////////
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
                       <img key={key}src={`./individial_signs/${i}`} alt="img" />  
                       <figcaption><center>{i.charAt(0)}</center></figcaption>
                       </figure>                  
                })}

                </Row>
            </Form>

        </div>
    );
}

export default Translation;