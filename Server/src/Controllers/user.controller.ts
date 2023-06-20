import express, { Express, NextFunction, Request, Response } from 'express';
const router = express.Router();

import {login,savePersonalDetails,signup}  from '../Services/user.service';
import { ClientError } from '../Models/Error';

const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();

//Get
router.get('/', (req: Request, res: Response) => {
  console.log("in get user");
  res.send("get user!!!!");
});

//Post
router.post('/login', jsonParse, (req: Request, res: Response,next:NextFunction) => {
  const { username, password } = req.body;
  let result;
  try {
       result = login(username, password);
  } catch (error:any) {
    console.log(error.message+"  error message!!");
    return res.status(400).send({message: error.message});
  }


  res.cookie("jwt",result,{httpOnly: true, sameSite:'lax',maxAge: 30*24*60*60*1000});
});

//Post
router.post('/signup', jsonParse, async (req: Request, res: Response) => {
  console.log("start signup POST");
    const { username,email, password } = req.body;
    console.log("before signup service");
    let result;
    try {
      console.log("start try user controller");
       result = await signup(username,email, password);
       console.log("token value in controller"+result)
       console.log("finish try user controller")
    } catch (error) {
      console.log("start catch user controller");
      throw error;
    }
    
    console.log("after signup service");
    res.cookie('jwt',result,{httpOnly: true,maxAge: 30*24*60*60*1000});
    console.log("finish signup POST");
});

router.post('/savePersonalDetails', jsonParse, async (req: Request, res:Response)=>{
    console.log("begin controller function");
    const {age,weight,height} = req.body;
    console.log(`cookies: ${req.cookies}`)
    let token:string = req.cookies['jwt'];
    console.log(`token from cookie: ${token}`);
    savePersonalDetails(age,weight,height,token);
    console.log("finish controller function");
    
})

module.exports = router;
