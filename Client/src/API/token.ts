import axios from 'axios';
import config from '../config';
import { User } from '../Models/User';

export const validateJWT = async(token: string):Promise<boolean> =>{
    console.log("in token api client")
  return await axios.post(`${config.api}/token/validate-jwt`,{token:token});
  // console.log("in token api client after get valid: " + valid);
  // return valid;
}

export const getUserFromToken = async(token: string): Promise<any> =>{
  console.log("in token api client get user from token");
  let user:any = (await axios.post(`${config.api}/token/user-from-token`,{token:token})).data;
  // console.log("user after fetch: " + JSON.stringify(user));
  return user;
}