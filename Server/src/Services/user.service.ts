import { json } from "body-parser";
import { ClientError, NotFoundError } from "../Models/Error";
import { Nutrition } from "../Models/nutrition.model";
import { User, UserModel } from "../Models/user.model";
import { createNutrition } from "./nutrition.service";
//don't delete, needed for DB connection
const connectDB = require('../ConnectDB');
const objectId = require("mongodb").ObjectId;
import { codeJWT, decodeJWT } from "./token.service";
import { Console } from "console";


 export const login = async (username: string, password: string): Promise<string> => {
  let foundUser: User[] = await UserModel.find({ username: username, password: password });
  if (foundUser.length === 0) {
    throw new NotFoundError();
  }
  let user: User = foundUser[0];
  const token = codeJWT(user.username, user.email, user._id,);
  return token;
}
 export const signup = async (username: string, password: string, email: string): Promise<string> => {
  const _id = new objectId();
  const foundUsers: User[] = await UserModel.find({ email: email });
  let createdUser: User;
  if (foundUsers.length == 0) {
    createdUser = await createUser({ _id: _id, username: username, password: password, email: email,weeklyConsumpstion:["","","","","","",""], })
    //create & return token
    const token = codeJWT(createdUser.username, createdUser.email, createdUser._id);
    return token;
  }
  else {
        throw new ClientError("you are already connected with this email account");
  }
}

 export const getUserById = async (_id: string): Promise<User | null> => {
  console.log("in getUserById")
  return await UserModel.findById(_id);

}

 const createUser = async (user: any): Promise<User> => {
  return await UserModel.create(user);
}

 const updateUser = async (user: User): Promise<void> => {
  console.log("in updateUser")
  await UserModel.replaceOne({ _id: user._id }, user);
}

const updateUserPersonalDetails = async (userId: string, water:number,age: number, weight: number, height: number, sportLevel: number, gender: number, recommendedConsumption: string, dailyConsumption: string,weeklyConsumption:string[],daysUpdated:number,lastUpdate:string) => {
  let fullUser: User | null = await getUserById(userId);
  if (fullUser) {
    fullUser.age = age;
    fullUser.weight = weight;
    fullUser.height = height;
    fullUser.gender = gender;
    fullUser.sportLevel = sportLevel;
    fullUser.recommendedConsumption = recommendedConsumption;
    fullUser.dailyConsumption = dailyConsumption;
    fullUser.recommendedWater=water;
    fullUser.dailyWater=0;
    fullUser.weeklyConsumption = weeklyConsumption;
    fullUser.daysUpdated = daysUpdated;
    fullUser.lastUpdate = lastUpdate;
    await updateUser(fullUser);
  }

}

 export const savePersonalDetails = async (recommendedWater:number,age: number, weight: number, height: number, sportLevel: number, gender: number, recommendedConsumption: Nutrition, token: string): Promise<void> => {
  //save recommeded Consumption to nutrition table db
  try {
    let weeklyConsumption = ["","","","","","",""];
    let day:number = getDayOfWeek();
    let dailyConsumption: Nutrition = new Nutrition();
    dailyConsumption._id = new objectId();
    weeklyConsumption[day]  = dailyConsumption._id.toString();
    console.log(weeklyConsumption[day]);
    recommendedConsumption._id = new objectId();
    dailyConsumption = await createNutrition(dailyConsumption);
    recommendedConsumption = await createNutrition(recommendedConsumption);
    let userId: string = (await decodeJWT(token))._id;
    await updateUserPersonalDetails(userId,recommendedWater, age, weight, height, sportLevel, gender, recommendedConsumption._id, dailyConsumption._id,weeklyConsumption,0,"");
  }
  catch (error: any) {
  }
}

export const updateDays = async (userID:string):Promise<User|null> => {
  let fullDate:Date = new Date();
  let date:Date = new Date(fullDate.getFullYear(), fullDate.getMonth(), fullDate.getDate());
  let user:User|null = await getUserById(userID);
  if(user){
    if(date.toString()!=user.lastUpdate){
    user.lastUpdate = date.toString();
    if(!user.daysUpdated){
      user.daysUpdated = 1;
    }
    else{
      user.daysUpdated++;
    }
    await updateUser(user);
    return user;
  }
  }
  
  return null;
  

}
const ChangeDetails = async (userId: string,username:string,password:string,email:string) => {
  let fullUser: User | null = await getUserById(userId);
  if (fullUser) {
    if(username==="")
    {   
      fullUser.username = fullUser.username;
    }
    else
    {
      fullUser.username=username;
    }
    if(fullUser.email==="")
    {
    fullUser.email = fullUser.email;
    }
    if(email!=""){
      fullUser.email=email;
    }
    fullUser.password = password;
    fullUser.age = fullUser.age;
    fullUser.weight =fullUser.weight;
    fullUser.height = fullUser.height;
    fullUser.gender = fullUser.gender;
    fullUser.sportLevel = fullUser.sportLevel;
    fullUser.recommendedConsumption = fullUser.recommendedConsumption;
    fullUser.dailyConsumption = fullUser.dailyConsumption;
    fullUser.dailyWater=fullUser.dailyWater;
    await updateUser(fullUser);
  }

}

const updateWater = async (userId: string,water:number) => {
  // water=120;
  let fullUser: User | null = await getUserById(userId);
  if (fullUser) {
    console.log(JSON.stringify(fullUser));
    fullUser.username=fullUser.username
    fullUser.email=fullUser.email
    fullUser.password = fullUser.password;
    fullUser.age = fullUser.age;
    fullUser.weight =fullUser.weight;
    fullUser.height = fullUser.height;
    fullUser.gender = fullUser.gender;
    fullUser.sportLevel = fullUser.sportLevel;
    fullUser.recommendedConsumption = fullUser.recommendedConsumption;
    fullUser.dailyConsumption = fullUser.dailyConsumption;
    fullUser.dailyWater+=water;

    await updateUser(fullUser);

  }
  else{
    console.log("in else!@@@@@@@@@@@")
  }

}

export const changeDetails = async (username: string, password: string, email: string, token: string) => {
  let userId: string = (await decodeJWT(token))._id;
  await ChangeDetails(userId, username,password,email);
}

export const addWater = async (userId:string ,water:number) => {
   await updateWater(userId,water);
}

export const increase1DaysUpdate = async (userId:string)=>{
  let user:User|null = await getUserById(userId);
  user!.daysUpdated++;
  await updateUser(user!);
}

export const updateLastUpdatedDate = async (userId:string)=>{
  let user:User|null = await getUserById(userId);
  console.log("in updateLastUpdateDate " +user);
  user!.lastUpdate = getDateInString();
  await updateUser(user!);
}

export const getLastUpdate = async (userId:string)=>{
  console.log("start get lastUpdate " +userId);
  let user:User|null = await getUserById(userId);
  return user!.lastUpdate;
}

export const saveDayNutValuesToWeeklyConsomption = async (userId:string,nutId:string) =>{
     let user:User = (await getUserById(userId))!;
     user.weeklyConsumption[getDayOfWeek()] = nutId.toString();
     user.dailyConsumption = nutId;
     await updateUser(user);
}

const getDayOfWeek =  ():number =>{
  return new Date().getDay();
}

export const getDateInString = ():string =>{
  let fullDate:Date = new Date();
  let date:Date = new Date(fullDate.getFullYear(), fullDate.getMonth(), fullDate.getDate());
  return date.toString();
}




