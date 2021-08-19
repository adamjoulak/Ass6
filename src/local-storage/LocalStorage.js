export const setUser = (userName) => {
    localStorage.setItem('userName', JSON.stringify(userName));
    console.log("userName set to "+userName)
}

export const getUser = () =>{
    let userName = localStorage.getItem('userName');
    if(userName){
        console.log(JSON.parse(userName))
        return JSON.parse(userName)
    }else{
        return false;
    }
}