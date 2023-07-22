import express, { Request, Response } from 'express';
import { addWater, changeDetails, login, savePersonalDetails, signup, updateDays } from '../Services/user.service';
import { promises } from 'dns';

export const loginCtrl = async (req: Request, res: Response)  => {
    const { username, password } = req.body;
    let result:string;
    try {
         result = await login(username, password);
         res.send(result);
    } catch (error:any) {
      return res.status(400).send({message: error.message});
    }
  
    
  }

export const signupCtrl = async (req: Request, res: Response) => {
    
      const { username,email, password } = req.body;
      let result:string;
      try {
         result = await signup(username,email, password);
      } catch (error) {
        throw error;
      }
      
      
      
      res.send(result);
  
  }

export const savePersonalDetailsCtrl = async (req: Request, res:Response)=>{
    try {
      let age:number = parseInt(req.body.age);
      let weight:number = parseInt(req.body.weight);
      let height:number = parseInt(req.body.height);
      let sportLevel:number = parseInt(req.body.sportLevel);
      let gender:number = parseInt(req.body.gender);
      let water:number = parseInt(req.body.water);
      let recommendedConsumption = req.body.recommendedConsumption;
      let token:string = req.body.token;
     await savePersonalDetails(water,age,weight,height,sportLevel,gender,recommendedConsumption,token);
      res.send("successful saving");
    } catch (error:any) {
      res.send(error.message+ " error in controller saving personal Data")
    }
}

export const updateDaysCtrl = async (req:Request, res:Response):Promise<void> =>{
  res.send(await updateDays(req.body.user));
}
export const changeDetailsCtrl=async(req:Request,res:Response):Promise<void>=>{
try {
  let username:string = req.body.username;
  let email:string = req.body.email;
  let password:string = req.body.password;
  let token:string = req.body.token;
 await changeDetails(username,email,password,token);
  res.send("successful saving");
} catch (error:any) {
  res.send(error.message+ " error in controller saving personal Data")
}

}

export const addWaterCtrl = async (req: Request, res: Response) => {
  const water = req.body.dailyWater;
  const userId = req.body.userId;
  await addWater( userId,water);
  res.send();
}
