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
    console.log("user email exist throw error here! ");
    throw new ClientError("you are already connected with this email account");
  }
}

 export const getUserById = async (_id: string): Promise<User | null> => {
  console.log("id "+_id);
  return await UserModel.findById(_id);

}

 const createUser = async (user: any): Promise<User> => {
  return await UserModel.create(user);
}

 const updateUser = async (user: User): Promise<void> => {
  console.log("in updateUser")
  console.log("((((((((((((((((((((((((((((((((((((((((((((((");
  await UserModel.replaceOne({ _id: user._id }, user);
  // console.log(`Updated `+user );
}

const updateUserPersonalDetails = async (userId: string, water:number,age: number, weight: number, height: number, sportLevel: number, gender: number, recommendedConsumption: string, dailyConsumption: string) => {
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
    await updateUser(fullUser);
  }

}

 export const savePersonalDetails = async (water:number,age: number, weight: number, height: number, sportLevel: number, gender: number, recommendedConsumption: Nutrition, token: string): Promise<void> => {
  //save recommeded Consumption to nutrition table db
  try {
    let dailyConsumption: Nutrition = new Nutrition();
    dailyConsumption._id = new objectId();
    recommendedConsumption._id = new objectId();
    dailyConsumption = await createNutrition(dailyConsumption);
    recommendedConsumption = await createNutrition(recommendedConsumption);
    let userId: string = (await decodeJWT(token))._id;
    await updateUserPersonalDetails(userId,water, age, weight, height, sportLevel, gender, recommendedConsumption._id, dailyConsumption._id);
  }
  catch (error: any) {
    console.log("error in savePersonal Details " + error.message);
  }
}

export const updateDays = async (userID:string):Promise<User|null> => {
  let fullDate:Date = new Date();
  let date:Date = new Date(fullDate.getFullYear(), fullDate.getMonth(), fullDate.getDate());
  // console.log(date);
  let user:User|null = await getUserById(userID);
  if(user){
    if(date.toString()!=user.lastUpdate){
    user.lastUpdate = date.toString();
    // console.log(user);
    if(!user.daysUpdated){
      user.daysUpdated = 1;
    }
    else{
      user.daysUpdated++;
    }
    await updateUser(user);
    // console.log("user "+user);
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
    await updateUser(fullUser);
  }

}
const updateWater = async (userId: string,water:number) => {
  console.log("before update in user.service addWater")
  let fullUser: User | null = await getUserById(userId);
  console.log(userId)
  if (fullUser) {
    console.log("in if updateWater")
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
    fullUser.dailyWater=water+120;
    console.log("after update in user.service addWater")
    await updateUser(fullUser);
  }

}
export const changeDetails = async (username: string, password: string, email: string, token: string) => {
  console.log("in user.service changeDetails")
  let userId: string = (await decodeJWT(token))._id;
  await ChangeDetails(userId, username,password,email);
}
export const addWater = async (water:number, userId:string) => {
  console.log("in user.service addWater")
   await updateWater(userId,water);
   console.log("in user.service after addWater")
}



export const increase1DaysUpdate = async (userId:string)=>{
  let user:User|null = await getUserById(userId);
  user!.daysUpdated++;
  await updateUser(user!);
}

export const updateLastUpdatedDate = async (userId:string)=>{
  let user:User|null = await getUserById(userId);
  user!.lastUpdate = Date.now().toString();
}

export const getLastUpdate = async (userId:string)=>{
  let user:User|null = await getUserById(userId);
  return user!.lastUpdate;
}

export const saveDayNutValuesToWeeklyConsomption = async (userId:string,nutId:string) =>{
     let user:User = (await getUserById(userId))!;
     user.weeklyConsumption[getDayOfWeek()] = nutId;
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




