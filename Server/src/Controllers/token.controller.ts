import express, { Request, Response } from 'express';
const router1 = express.Router();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();
import { decodeJWT, validateJwt } from '../Services/token.service';

//Get
router1.get('/', (req: Request, res: Response) => {
    console.log("in get user");
    res.send("get token!!!!");
  });

router1.post('/validate-jwt',jsonParse,async (req:Request, res:Response) => {
    console.log("in token controller");
   res.send( validateJwt(req.body.token) );
});

router1.post('/user-from-token',jsonParse,async (req:Request, res:Response) => {
  console.log("in get user from token controller "+ req.body.token);
  let user:any =await decodeJWT(req.body.token);
  console.log("user from token controller after decode......"+user);
 res.send(user);
});

module.exports = router1;
