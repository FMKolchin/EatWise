import axios from 'axios';
import config from '../config';

export const validateJWT = async(token: string):Promise<boolean> =>{
    console.log("in token api client")
  return await axios.post(`${config.api}/token/validate-jwt`,{token:token});
  // console.log("in token api client after get valid: " + valid);
  // return valid;
}