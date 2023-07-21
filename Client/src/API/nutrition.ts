import axios from "axios";
import config from "../config";
import { Nutrition } from "../Models/Nutrition";
import { User } from "../Models/User";
import { anyToUser } from "../Services/userFromCookie";


export const nutritionById =async (id:string):Promise<Nutrition | null> =>{
   console.log("id "+id);
   let nut:Nutrition|null = (await axios.get(`${config.api}/nutrition/${id}`)).data;
   console.log("nut "+nut);
   return nut;
}

export const addNutValues = async (user:User,nut:Nutrition):Promise<User>=>{
   console.log("take care of click");
   try {
      await axios.put(`${config.api}/nutrition/addNutValues`,{nutId:user.dailyConsumption?._id,nutValues:nut});
   console.log("after put nut addVal");
      user.dailyConsumption = await nutritionById(user.dailyConsumption!._id)??undefined;
      
   } catch (error:any) {
      console.log(error.message+"hi")
   }
   return user;
   
}

export const addFoodOption = async(_user:User,nut:Nutrition) =>{
   let userT:any =await axios.put(`${config.api}/nutrition/addFoodOption`,{userId:_user.id,nutValues:nut});
   let user:User = await anyToUser(userT);
   return user;

}