import axios from "axios";
import config from "../config";
import { Nutrition } from "../Models/Nutrition";
import { User } from "../Models/User";
import { anyToUser } from "../Services/userFromCookie";


export const nutritionById =async (id:string):Promise<Nutrition | null> =>{
   console.log("nutID "+id);
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
   console.log("start addFoodOption: "+JSON.stringify(_user)+"\n"+JSON.stringify(nut));
   let userT:any =(await axios.put(`${config.api}/nutrition/addFoodOption`,{userId:_user.id,nut:nut})).data;
   console.log("result back from put addFoodOption: "+JSON.stringify(userT));
   let user:User = await anyToUser(userT);
   console.log("result back from anyToUser: "+JSON.stringify(user));
   return user;

}