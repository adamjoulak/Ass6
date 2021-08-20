export const setUser = (userName) => {
    localStorage.setItem('userName', JSON.stringify(userName));
}

export const getUser = () =>{
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
    
