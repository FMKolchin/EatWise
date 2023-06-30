import { ClientError, NotFoundError } from "../Models/Error";
import { Nutrition, NutritionModel } from "../Models/nutrition.model";
import { User, UserModel } from "../Models/user.model";
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
  console.log("start signup service");
  const _id = new objectId();
  console.log("before userModel find");
  const foundUsers: User[] = await UserModel.find({ email: email });
  console.log("after userModel find " + foundUsers);
  let createdUser: User;
  if (foundUsers.length == 0) {
    console.log("in if no users with same email");
    createdUser = await UserModel.create({ _id: _id, username: username, password: password, email: email })
    console.log("usere createrd " + createdUser);
  }
  else {
    console.log("user email exist throw error here! ");
    throw new ClientError("you are already connected with this email account");
  }

  //create & return token
  console.log("create and return token");
  let user: User = createdUser;
  const token = codeJWT(user.username, user.email, user._id);
  return token;
}

export const getUser = async (_id: string): Promise<User> => {
  let user = await UserModel.find({ _id: _id });
  return user[0];
}
export const savePersonalDetails = async (age: number, weight: number, height: number,sportLevel:number,gender:number, recommendedConsomption: Nutrition, token: string): Promise<void> => {
  //save recommeded consomption to nutrition table db
  console.log("in savePersonalDetails service function just started!!!");

  try {
    recommendedConsomption._id = new objectId();
    recommendedConsomption = await NutritionModel.create(recommendedConsomption);
    console.log("begin service function save personal details");
    let user: User = await decodeJWT(token);
    console.log(`user from token: ${JSON.stringify(user)}`);
    let fullUser: User | null = await UserModel.findById(user._id);
    console.log(`user from DB: ${JSON.stringify(fullUser)}`);
    if (fullUser) {
      fullUser.age = age;
      fullUser.weight = weight;
      fullUser.height = height;
      fullUser.gender = gender;
      fullUser.sportLevel = sportLevel;
      fullUser.recommendedConsumption = recommendedConsomption._id;
      console.log("just before update user details... ###########");
      console.log(JSON.stringify(fullUser));
      await UserModel.replaceOne({ _id: fullUser._id }, fullUser);
    }
  } catch (error: any) {
    console.log(error.message+" @@@@@@@@@@@@@@@@@@@@@@@@@@");
  }



  console.log("finish service function save personal details");
}



