import  { Request, Response } from 'express';
import { decodeJWT, validateJwt } from '../Services/token.service';

export const validateJwtCtrl = async (req:Request, res:Response) => {
    console.log("in token controller");
   res.send( validateJwt(req.body.token) );
}

export const getUserFromToken = async (req:Request, res:Response) => {
    console.log("in get user from token controller "+ req.body.token);
    let user:any =await decodeJWT(req.body.token);
    console.log("user from token controller after decode......"+user);
   res.send(user);
  }