import express, { Request, Response } from 'express';
import { changeDetails, login, savePersonalDetails, signup, updateDays } from '../Services/user.service';
import { promises } from 'dns';

export const loginCtrl = async (req: Request, res: Response)  => {
    const { username, password } = req.body;
    let result:string;
    try {
        console.log("before login service");
         result = await login(username, password);
         console.log(result);
         res.send(result);
    } catch (error:any) {
      console.log(error.message+"  error message!!");
      return res.status(400).send({message: error.message});
    }
  
    
  }

export const signupCtrl = async (req: Request, res: Response) => {
    console.log("start signup POST");
    
      const { username,email, password } = req.body;
      console.log("before signup service");
      let result:string;
      try {
        console.log("start try user controller");
         result = await signup(username,email, password);
         console.log("token value in controller "+result)
         console.log("finish try user controller")
      } catch (error) {
        console.log("start catch user controller");
        throw error;
      }
      
      console.log("after signup service");
      
      
      res.send(result);
  
  }

export const savePersonalDetailsCtrl = async (req: Request, res:Response)=>{
    try {
      let age:number = parseInt(req.body.age);
      let weight:number = parseInt(req.body.weight);
      let height:number = parseInt(req.body.height);
      let sportLevel:number = parseInt(req.body.sportLevel);
      let gender:number = parseInt(req.body.gender);
      let recommendedConsumption = req.body.recommendedConsumption;
      let token:string = req.body.token;
     await savePersonalDetails(age,weight,height,sportLevel,gender,recommendedConsumption,token);
      console.log("finish controller function");
      res.send("successful saving");
    } catch (error:any) {
      res.send(error.message+ " error in controller saving personal Data")
    }
}

export const updateDaysCtrl = async (req:Request, res:Response):Promise<void> =>{
  console.log(req);
  res.send(await updateDays(req.body.user));
}
export const changeDetailsCtrl=async(req:Request,res:Response):Promise<void>=>{
console.log("in changeDetailsCtrl");
try {
  let username:string = req.body.username;
  let email:string = req.body.email;
  let password:string = req.body.password;
  let token:string = req.body.token;
 await changeDetails(username,email,password,token);
  console.log("finish controller function");
  res.send("successful saving");
} catch (error:any) {
  res.send(error.message+ " error in controller saving personal Data")
}

}