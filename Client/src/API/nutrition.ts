import axios from "axios";
import config from "../config";
import { Nutrition } from "../Models/Nutrition";


export const nutritionById =async (id:string):Promise<Nutrition | null> =>{
   let nut:Nutrition|null = (await axios.get(`${config.api}/nutrition/${id}`)).data;
   console.log("nut "+nut);
   return nut;
}