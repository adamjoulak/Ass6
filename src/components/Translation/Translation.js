import './Translation.css';
import { useState } from 'react';

const Translation = () => {

    const [sentence, setSentence] = useState({
        sentence: null
    })

    
    const handleTranslation = (event) => { //set input 
        setSentence({
            ...sentence,
            [event.target.id]: event.target.value
        })
    }
    const renderPic = () => {
        let str = sentence.sentence.split('');
        const img = str.map((key, i) => {
            return <img key={key} src={`./individial_signs/${i}.png`} alt="img" />            
        });
    }


    return (
        /////////////// IMPLEMENT FORM ////////////////////
        <div>
            <div>
                <input type="text" id="sentence" placeholder="Enter text" onChange={handleTranslation} />
                <button onClick={renderPic}>RENDER</button>
            </div>
            <div>
                {sentence.sentence && sentence.sentence.split('').map((i, key) => {
                    return <img key={key} src={`./individial_signs/${i}.png`} alt="img" />
                })}                 
            </div>

        </div>
    );
}

export default Translation;