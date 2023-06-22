import express, { Request, Response } from 'express';
const router1 = express.Router();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();
import { validateJwt } from '../Services/token.service';

//Get
router1.get('/', (req: Request, res: Response) => {
    console.log("in get user");
    res.send("get token!!!!");
  });
router1.get('/hello',(req:Request, res:Response) => {res.send("hello world")});
router1.post('/validate-jwt',jsonParse,async (req:Request, res:Response) => {
    console.log("in token controller");
   res.send( validateJwt(req.body.token) );
});

module.exports = router1;
