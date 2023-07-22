import axios, { AxiosResponse } from 'axios';
import config from '../config';
import { Nutrition } from '../Models/Nutrition';
import Cookies from 'js-cookie';
import { User } from '../Models/User';


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
        res = data?.data;
// }
        return res;
   
}

export const signUpUser = async (username : string,email: string, password : string):Promise<string|null> =>{
    // debugger;
    let data:AxiosResponse|null = null;
    let res :string|null = null;
    try {
        data =await axios.post(`${config.api}/user/signup`, {username: username,email: email, password: password});
        if(data?.status &&(data?.status >299 || data?.status < 200)){
            throw new Error("error inserting");
        }
        Cookies.set('jwt',data?.data,{expires:30});

    } catch (error:any) {
        if(error.response && error.response.status === 400){
            console.log("ERROR: my error user api "+error);
        }
        else{
            console.log("ERROR:not my error user api "+error);
        }
        throw error;
    }
        return res;
   
}

export const SavePersonalDetails = async (water:number,age:number,weight:number,height:number,sportLevel:number,gender:number,recommendedConsumption:Nutrition) =>{

    await axios.post(`${config.api}/user/savePersonalDetails`,{water:water,age:age,weight:weight,height:height,sportLevel:sportLevel,gender:gender,recommendedConsumption:recommendedConsumption,token:Cookies.get().jwt});
}

export const updateDays=async (user:string):Promise<User>=>{

   return await axios.post(`${config.api}/user/updateDays`,{user:user});
}
export const changeDetails=async(username : string,email: string, password : string)=>{
    let data:AxiosResponse|null = null;
    let res :string|null = null;
    try {
        data =await axios.post(`${config.api}/user/changeDetails`, {username: username,email: email, password: password,token:Cookies.get().jwt});
        if(data?.status &&(data?.status >299 || data?.status < 200)){
            throw new Error("error inserting");
        }
   
    

    } catch (error:any) {
        if(error.response && error.response.status === 400){
            console.log("ERROR: my error user api "+error);
        }
        else{
            console.log("ERROR:not my error user api "+error);
             //alert("ERROR: " + error.response.message);
        }
        throw error;
    }
        return res;
}

export const addWater = async (user:User,dailyWater:number)=>{
alert("in addWater")
  await axios.post(`${config.api}/user/addWater`,{userId:user.id,dailyWater:dailyWater});

}