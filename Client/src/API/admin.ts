
import axios, { AxiosResponse } from 'axios';
import config from '../config';
import { Nutrition } from '../Models/Nutrition';
import Cookies from 'js-cookie';
import { User } from '../Models/User';



export const addArticle=async (title:string,content:string,author:string,image: string):Promise<any>=>{
 alert("in api addArticle");
    let data:AxiosResponse|null = null;
    let res :string|null = null;
   data= await axios.post(`${config.api}/admin/addArticle`, {title:title,content:content,author:author,image: image});
   console.log("after")
   console.log(data)
   res = data?.data;
   return res;
}
export const getAllArticles=async():Promise<any>=>{
const data=await axios.get(`${config.api}/admin/getAllArticles`);
console.log(data?.data)
return data?.data;

}