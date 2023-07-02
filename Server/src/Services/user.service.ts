import { ClientError, NotFoundError } from "../Models/Error";
import  { Request, Response } from 'express';
import { Nutrition } from "../Models/nutrition.model";
import { User, UserModel } from "../Models/user.model";
import { createNutrition } from "./nutrition.service";
//don't delete, needed for DB connection
const connectDB = require('../ConnectDB');
const objectId = require("mongodb").ObjectId;
import { codeJWT, decodeJWT } from "./token.service";


 export const login = async (username: string, password: string): Promise<string> => {
  let foundUser: User[] = await UserModel.find({ username: username, password: password });
  if (foundUser.length === 0) {
    throw new NotFoundError();
  }
  let user: User = foundUser[0];
  const token = codeJWT(user.username, user.email, user._id);
  return token;
}
 export const signup = async (username: string, password: string, email: string): Promise<string> => {
  const _id = new objectId();
  const foundUsers: User[] = await UserModel.find({ email: email });
  let createdUser: User;
  if (foundUsers.length == 0) {
    createdUser = await createUser({ _id: _id, username: username, password: password, email: email })
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
  return await UserModel.findById(_id);

}

 const createUser = async (user: any): Promise<User> => {
  return await UserModel.create(user);
}

 const updateUser = async (user: User): Promise<void> => {
  await UserModel.replaceOne({ _id: user._id }, user);
}

const updateUserPersonalDetails = async (userId: string, age: number, weight: number, height: number, sportLevel: number, gender: number, recommendedConsumption: string, dailyConsumption: string) => {
  let fullUser: User | null = await getUserById(userId);
  if (fullUser) {
    fullUser.age = age;
    fullUser.weight = weight;
    fullUser.height = height;
    fullUser.gender = gender;
    fullUser.sportLevel = sportLevel;
    fullUser.recommendedConsumption = recommendedConsumption;
    fullUser.dailyConsumption = dailyConsumption;
    await updateUser(fullUser);
  }

}
 export const savePersonalDetails = async (age: number, weight: number, height: number, sportLevel: number, gender: number, recommendedConsumption: Nutrition, token: string): Promise<void> => {
  //save recommeded Consumption to nutrition table db
  try {
    let dailyConsumption: Nutrition = new Nutrition();
    dailyConsumption._id = new objectId();
    recommendedConsumption._id = new objectId();
    dailyConsumption = await createNutrition(dailyConsumption);
    recommendedConsumption = await createNutrition(recommendedConsumption);
    let userId: string = (await decodeJWT(token))._id;
    await updateUserPersonalDetails(userId, age, weight, height, sportLevel, gender, recommendedConsumption._id, dailyConsumption._id);
  }
  catch (error: any) {
    console.log("error in savePersonal Details " + error.message);
  }
}



