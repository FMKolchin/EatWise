import express, { Request, Response } from 'express';
const router = express.Router();
import {login,savePersonalDetails,signup}  from '../Services/user.service';

const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();

//Get
router.get('/', (req: Request, res: Response) => {
  console.log("in get user");
  res.send("get user!!!!");
});

//Post
router.post('/login', jsonParse,async (req: Request, res: Response)  => {
  const { username, password } = req.body;
  let result:string;
  try {
       result = await login(username, password);
  } catch (error:any) {
    console.log(error.message+"  error message!!");
    return res.status(400).send({message: error.message});
  }

  
});

//Post
router.post('/signup', jsonParse, async (req: Request, res: Response) => {
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

});

router.post('/savePersonalDetails', jsonParse, async (req: Request, res:Response)=>{
    try {
      console.log("begin controller function");
      // console.log(+" :req.body");
      let age:number = parseInt(req.body.age);
      let weight:number = parseInt(req.body.weight);
      let height:number = parseInt(req.body.height);
      let sportLevel:number = parseInt(req.body.sportLevel);
      let gender:number = parseInt(req.body.gender);
      let recommendedConsomption = req.body.recommendedConsomption;
      let token:string = req.body.token;

      // const {age,weight,height,recommendedConsomption,token} = req.body;
      console.log(recommendedConsomption._id+"  =recommendedConsomption.id");
      console.log(`cookies: ${req.cookies}`);
      console.log("token "+token)
      // let token:string = req.cookies['jwt'];
      // console.log(`token from cookie: ${token}`);
     await savePersonalDetails(age,weight,height,sportLevel,gender,recommendedConsomption,token);
      console.log("finish controller function");
      res.send("successful saving");
    } catch (error:any) {
      res.send(error.message+ " error in controller saving personal Data")
    }
   

})

module.exports = router;
