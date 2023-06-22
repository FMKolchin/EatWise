
import Cookies from 'js-cookie';
import { validateJWT } from '../API/token';


export  const ExistCookie = () =>{
    console.log('in check exist cookie in service')
   let jwt:string|undefined = Cookies.get('jwt');
   console.log('after ger cookies in exist cookie service: '+jwt);
   if(jwt === undefined
    //  || ! validateJWT(jwt)
      ){
    console.log("cookie doesnt exist or not valid")
    return false;
   }
   else{
    console.log("cookie exists")
    return true;
   }
  

}