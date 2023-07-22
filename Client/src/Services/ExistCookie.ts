
import Cookies from 'js-cookie';
import { validateJWT } from '../API/token';


export  const ExistCookie = () =>{
   let jwt:string|undefined = Cookies.get('jwt');
   if(jwt === undefined
    //  || ! validateJWT(jwt)
      ){
    return false;
   }
   else{
    return true;
   }
  

}

export const  deleteCookie=()=>{
  if(ExistCookie()){
    Cookies.remove('jwt');
  }
      
}