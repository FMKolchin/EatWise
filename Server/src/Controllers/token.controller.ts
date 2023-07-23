import  { Request, Response } from 'express';
import { decodeJWT, validateJwt } from '../Services/token.service';

export const validateJwtCtrl = async (req:Request, res:Response) => {
   res.send( validateJwt(req.body.token) );
}

export const getUserFromToken = async (req:Request, res:Response) => {
    let user:any =await decodeJWT(req.body.token);
    console.log("getUserFromToken  "+JSON.stringify(user)+"#############"+ user.dailyWater)
   res.send(user);
  }