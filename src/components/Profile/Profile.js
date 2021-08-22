import { getUserLocalStorage } from '../../local-storage/LocalStorage';
import './Profile.css';
import { useEffect,  useState  } from 'react';

const Profile = () => {
    /* const pageLoaded = useRef(false); */
    const [translation, setTranslations] = useState([])

    useEffect(() => {
        const getSearchTranslations = async () => {
            let name = getUserLocalStorage();
            try {
                let response = await fetch(`http://localhost:3004/profile?name=${name.name}`)
                let userData = await response.json();
                setTranslations(userData[0].translations);
                
            } catch (error) {
                console.log(error);
            }
        }
        getSearchTranslations();
    }, []);

   /*  const getSearchTranslations = async () => {
        let name = getUserLocalStorage();
       
        try {
            let response = await fetch(`http://localhost:3004/profile?name=${name.name}`)
            let userData = await response.json();
            return userData[0].translations;
        } catch (error) {
            console.log(error);
        }
    } */

    /* const loadTranslations = async () => {
        let userTranslations = await getSearchTranslations();
        console.log(userTranslations)
        setTranslations(userTranslations);
    } */

 
    
    const text = 
        translation.map((i, key) => {
            return <p key={key}>{i}</p>
        })
     


    return (
        <div>
            <p>Translations</p>
            {text}
        </div>

    );
}

export default Profile;