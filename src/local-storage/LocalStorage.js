export const setUserLocalStorage = (userName) => {
    localStorage.setItem('userName', JSON.stringify(userName));
}

export const getUserLocalStorage = () =>{
    let userName = localStorage.getItem('userName');
    if(userName){
        return JSON.parse(userName)
    }else{
        return false;
    }
}

export const clearUserStorage = ( ) => {
    localStorage.clear();
}
    
