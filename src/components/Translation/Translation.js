import './Translation.css';
import { useState } from 'react';

const Translation = () => {

    const [sentence, setSentence] = useState({
        sentence: ""
    })

    const handleTranslation = (event) => { //set input username to name state
        setSentence({
            ...sentence,
            [event.target.id]: event.target.value
        })
    }
    const renderPic = () => {
        let str = sentence.sentence.split('');
        let img = str.map((name, index) => {
            console.log(name)
            return <img key={index} className="img-responsive" src={require(`../../assets/LostInTranslation_Resources/individial_signs/${name}.png`)} alt="img" />
        });
    }

    return (
        <div>
            <div>
                <input type="text" id="sentence" placeholder="Enter text" onChange={handleTranslation} />
                <button onClick={renderPic}>RENDER</button>
            </div>
            <div>
               {img}
            </div>

        </div>
    );
}

export default Translation;