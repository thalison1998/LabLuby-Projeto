import { ApiLogin } from "../../service/api"



export const setUserStorage = (value) => {
    localStorage.setItem('user',JSON.stringify(value))
}

export const getUserStorage = () => {
    const json = localStorage.getItem('user');

    if(!json) {
        return null
    }

    const user = JSON.parse(json);
    
    return user ?? null;
}

export const loginRequest = async (email, password) => {
    
    try{
        const request = await ApiLogin.post('login', {email, password});
        return request.data
    }catch(error){
        return null
    }

}