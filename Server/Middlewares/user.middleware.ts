import express,{Request,Response ,Express} from 'express';
export const usernameValidation =  (req:Request, res:Response,next :Function) => {
    try{
        if(!req.body.username || req.body.username.length() < 2){
            throw new Error();
        }
        next();
    }
    catch{
        res.status(401).json({message:"validation failed"})
    }
    }

export const passwordValidation =  (req:Request, res:Response,next :Function) => {
    try{
        if(!req.body.username || req.body.username.length() < 8){
            throw new Error();
        }
        next();
    }
    catch{
        res.status(401).json({message:"validation failed"})
    }
}




    
    