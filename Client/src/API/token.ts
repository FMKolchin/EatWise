import axios from 'axios';
import config from '../config';
import { User } from '../Models/User';

export const validateJWT = async(token: string):Promise<boolean> =>{
  return await axios.post(`${config.api}/token/validate-jwt`,{token:token});
  // return valid;
}

export const getUserFromToken = async(token: string): Promise<any> =>{
  let user:any = (await axios.post(`${config.api}/token/user-from-token`,{token:token})).data;
  return user;
}