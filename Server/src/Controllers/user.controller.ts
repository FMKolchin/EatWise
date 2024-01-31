import express, { Request, Response } from 'express';
import { ContactUs, addWater, changeDetails, forgetPassword, login, savePersonalDetails, signup, updateDays } from '../Services/user.service';
import { promises } from 'dns';
const mailer=require('../Services/nodeMailer');

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
  export const forgetPasswordCtrl=async (req: Request, res: Response) => {  
    const { username } = req.body;
    console.log(username);
    console.log("in forgetCtrl")
   await forgetPassword(username);
    // }
    // catch (error:any){
    //     res.status(500).send('Failed to send email');
    // }
  
  }

export const signupCtrl = async (req: Request, res: Response) => {    
      const { username,email, password } = req.body;
      let result:string;
      try {
        console.log("in try signup")
         result = await signup(username,email, password);
           //קריאה לפונקציית שליחת המייל
            //הודעת ברוכים הבאים לאתר
      } catch (error) {
        console.log("in catch controller")
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
  console.log("in addWaterCtrl")
  const water = req.body.dailyWater;
  const userId = req.body.userId;
  console.log("userId "+userId);
  console.log("water  "+water);
  await addWater( userId,water);
  res.send();
}
export const ContactUsCtrl=async (req: Request, res: Response) => {  
  const { username,email,subject,content } = req.body;
  console.log(username);
  console.log("in ContactUsCtrl")
 await ContactUs(username,email,subject,content);
 res.send();
  // }
  // catch (error:any){
  //     res.status(500).send('Failed to send email');
  // }

}
const mail=()=>{
//   console.log("pass "+password)
//   const to=password;
// const subject="Hi "+username+', Welcome to our site';
// const body='Thank you for registering';
// mailer.sendEmail(to, subject, body)
// .then((info: { response: any; }) => {
// console.log('Email sent: ', info.response);
// res.send('Registration successful');
// })
// .catch((error: any) => {
// console.log('Error sending email: ', error);
// res.status(500).send('Failed to send email');
// });
}