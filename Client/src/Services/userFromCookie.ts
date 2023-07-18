import Cookies from 'js-cookie';
import { User } from '../Models/User';
import { getUserFromToken } from '../API/token.ts';
import { nutritionById } from '../API/nutrition.ts';
import { Nutrition } from '../Models/Nutrition.ts';


export const userFromCookie =async () :Promise<User>=>{
    const token:string = Cookies.get()['jwt'];
    console.log("token we got from cookie "+token);
   let tempUser:any =await getUserFromToken(token);
    let user:User = new User();
    user.id = tempUser._id;
    user.username = tempUser.username;
    user.email = tempUser.email;
    user.password = tempUser.password;
    user.age = tempUser.age;
    user.height = tempUser.height;
    user.weight = tempUser.weight;
    user.sportLevel = tempUser.sportLevel;
    user.gender = tempUser.gender;
    try{
    user.averageConsumption = await nutritionById(tempUser.averageConsumption)??new Nutrition("",0,0,0,0,0,0,0);
    user.dailyConsumption =await nutritionById( tempUser.dailyConsumption)??new Nutrition("",0,0,0,0,0,0,0);
    user.recommendedConsumption =await nutritionById( tempUser.recommendedConsumption)??new Nutrition("",0,0,0,0,0,0,0);
    }
    catch{
        console.log("error in updateing user Consumption...");
    }

    user.daysUpdated = tempUser.daysUpdated;
    user.weeklyConsumption = [];
    // await nutritionById( tempUser.weeklyConsumption);
    user.lastUpdate = tempUser.lastUpdate;
    console.log("in userFromCookie::::: "+JSON.stringify(user));
    return user;



}