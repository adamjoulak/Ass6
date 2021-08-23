import { getUserLocalStorage } from '../../local-storage/LocalStorage';
import './Profile.css';
import { useEffect, useState } from 'react';

const Profile = () => {

    const [translation, setTranslations] = useState([])
    const [imgs, setRenderPics] = useState([])

    /**
     * Load translations on pageload
     */
    useEffect(() => {
        const getSearchTranslations = async () => {
            let name = getUserLocalStorage();
            try {
                let response = await fetch(`https://ass6fakeserver-mtl-app.herokuapp.com/profile?name=${name.name}`)
                let userData = await response.json();
                setTranslations(userData[0].translations);

            } catch (error) {
                console.log(error);
            }
        }
        getSearchTranslations();
    }, []);

    /**
     * Sets translations to deleted
     */
    const clearTranslations = async () => {
        let userTranslationSearches;
        let userData;
        try {
            let response = await fetch(`https://ass6fakeserver-mtl-app.herokuapp.com/profile?name=${getUserLocalStorage().name}`)
            userData = await response.json();
            userTranslationSearches = userData[0].translations;
        } catch (error) {
            console.log(error);
        }

        for (let i = 0; i < userTranslationSearches.length; i++) {
            userTranslationSearches[i] = "Deleted"
        }
        let putRequest = {
            "name": userData[0].name,
            "translations": userTranslationSearches
        }

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

    for (let i = 0; i < translation.length; i++) {
        for (let j = 0; j < i.length; j++) {
            setRenderPics(j+".png")            
        }        
    }
    console.log(imgs)

    const renderSearches =
        translation.map((i, key) => {
            if (i < 10 || i !== "Deleted")
                return <li key={key}>{i}</li>
        });


    return (
        <div>
            <p>Translations</p>
            {renderSearches}
            <button onClick={clearTranslations}>Clear</button>
        </div>

    );
}

export default Profile;