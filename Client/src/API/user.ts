import axios, { AxiosResponse } from 'axios';
import config from '../config';
import { Nutrition } from '../Models/Nutrition';
import Cookies from 'js-cookie';


export const loginUser = async (username : string, password : string):Promise<string|null> =>{
    let data:AxiosResponse|null = null;
    let res :string|null = null;
   
        data= await axios.post(`${config.api}/user/login`, {username: username, password: password});
        // if(data?.data == "userNotFound"){
        //     alert('לא מצאנו את הפרטים שלך, בטוח שנרשמת?');
        //     throw new Error("user not found");
        // }
        // else{
        Cookies.set('jwt',data?.data,{expires:30})
        console.log("token in client"+data?.data);
        res = data?.data;
// }
        return res;
   
}

export const signUpUser = async (username : string,email: string, password : string):Promise<string|null> =>{
    console.log("start userApi")
    // debugger;
    let data:AxiosResponse|null = null;
    let res :string|null = null;
    try {
        console.log("in try api")
        data =await axios.post(`${config.api}/user/signup`, {username: username,email: email, password: password});
        if(data?.status &&(data?.status >299 || data?.status < 200)){
            console.log("not valid status, return error "+data?.status);
            throw new Error("error inserting");
        }
        Cookies.set('jwt',data?.data,{expires:30});
       console.log("token in client"+data?.data);
        console.log("finish try user api")

    } catch (error:any) {
        console.log("in catch user api "+error.message);
        if(error.response && error.response.status === 400){
            console.log("ERROR: my error user api "+error);
        }
        else{
            console.log("ERROR:not my error user api "+error);
             //alert("ERROR: " + error.response.message);
        }
        throw error;
    }
        console.log("result of userApi: "+res)
        return res;
   
}

export const SavePersonalDetails = async (age:number,weight:number,height:number,sportLevel:number,gender:number,recommendedConsomption:Nutrition) =>{
    console.log("begin api function save personal details age:"+age+" weight "+weight+" height "+height," token "+Cookies.get().jwt);
    await axios.post(`${config.api}/user/savePersonalDetails`,{age:age,weight:weight,height:height,sportLevel:sportLevel,gender:gender,recommendedConsomption:recommendedConsomption,token:Cookies.get().jwt});
    console.log("finish api function save personal details");
}

