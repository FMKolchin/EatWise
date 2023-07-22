import axios from "axios";
import config from "../config";
import { Nutrition } from "../Models/Nutrition";
import { User } from "../Models/User";
import { anyToUser } from "../Services/userFromCookie";


export const nutritionById =async (id:string):Promise<Nutrition | null> =>{
   let nut:Nutrition|null = (await axios.get(`${config.api}/nutrition/${id}`)).data;
   return nut;
}

export const addNutValues = async (user:User,nut:Nutrition):Promise<User>=>{ 
   try {
      await axios.put(`${config.api}/nutrition/addNutValues`,{nutId:user.dailyConsumption?._id,nutValues:nut});
      user.dailyConsumption = await nutritionById(user.dailyConsumption!._id)??undefined;
      
   } catch (error:any) {
      console.log("error in addNutValues"+error.message);
   }
   return user;
   
}

export const addFoodOption = async(_user:User,nut:Nutrition) =>{
   let userT:any =await axios.put(`${config.api}/nutrition/addFoodOption`,{userId:_user.id,nutValues:nut});
   let user:User = await anyToUser(userT);
   return user;

}