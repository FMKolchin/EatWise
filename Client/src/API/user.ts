import axios, { AxiosResponse } from 'axios';
import config from '../config';


export const loginUser = async (username : string, password : string):Promise<string|null> =>{
    let data:AxiosResponse|null = null;
    let res :string|null = null;
   
    try {
        data= await axios.post(`${config.api}/user/login`, {username: username, password: password});
        res = data?.data.username+' '+data?.data.password;

    } catch (error:any) {
        alert("error "+data+error.message);
    }
        return res;
   
}

export const signUpUser = async (username : string,email: string, password : string):Promise<string|null> =>{
    alert("start userApi")
    // debugger;
    let data:AxiosResponse|null = null;
    let res :string|null = null;
   
    try {
        data= await axios.post(`${config.api}/user/signup`, {username: username,email: email, password: password});
        res = data?.data.username+' '+data?.data.password+' '+data?.data.email;
    //    debugger;
       console.log(res);
        alert("fine "+res);

    } catch (error:any) {
        alert("error "+data+error.message);
    }

        alert(res);
        return res;
   
}

