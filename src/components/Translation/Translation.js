import './Translation.css';
import { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import { getUserLocalStorage } from '../../local-storage/LocalStorage';

const Translation = () => {
    const [sentence, setSentence] = useState([])
    const [imgs, setRenderPics] = useState([])

    /**
     * Sets the input i useState, sentence.
     */
    const handleTranslation = (event) => { //set input 
        setSentence(event.target.value)
    }

    /**
     * Method that listends o the sumbit button. Loops through the word and adds it to imgs with the right ending (.png)
     * and saves the word to database.
     */
    const onSubmit = (event) => {
        event.preventDefault() //no reload 
        let str = sentence.split('');

        for (let i = 0; i < str.length; i++) {
            if (str[i] !== " ") {
                console.log(str[i])
                str[i] = str[i].toLowerCase() + ".png";
            } else {
                delete str[i];
            }

        }
        setRenderPics(str)
        saveToDatabase(sentence)
    }

    /**
     * Method that saves the searched word to the database.
     */
    const saveToDatabase = async (sentence) => {
        let name = getUserLocalStorage();
        let userData;
        let putRequest;

        /**
         * Get user from database.
         */
        try {
            const response = await fetch(`https://ass6fakeserver-mtl-app.herokuapp.com/profile?name=${name.name}`)
            userData = await response.json();
        } catch (error) {
            console.log(error);
        }

        /**
         * Update the translations array in the object and sets the putRequest.
         */
        let userTranslations = userData[0].translations;
        userTranslations.push(sentence)
        putRequest = {
            "name": name.name,
            "translations": userTranslations
        }

        /**
         * Update the user with the new translated word.
         */
        await fetch(`https://ass6fakeserver-mtl-app.herokuapp.com/profile/${userData[0].id}`, {
            method: 'PUT',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(putRequest)
        })
            .then(async (response) => {
                if (!response.ok) {
                    const { error = "An unknown error occurred" } = await response.json();
                    throw new Error(error);
                }
                console.log(putRequest + " added to database.")
            })
    }


    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col md={{ span: 3, offset: 3 }}>
                        <Form.Control placeholder="Enter text" type="search" id="sentence" maxLength="40" onChange={handleTranslation} />
                    </Col>
                    <Col>
                        <Button type="Submit" className="mb-2">
                            Translate
                        </Button>
                    </Col>
                </Row>
                <Row>
                    {imgs && imgs.map((i, key) => {
                        return <figure key={key}>
                            <img src={`./individial_signs/${i}`} alt="img" />
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