import {Response,Request, NextFunction } from "express";
import { CustomError } from "../Models/Error";


export const errorHandler =((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("in errorHandler middleware");
    if (err instanceof CustomError) {
      console.log("in if errorHandler middleware");
      res.status(err.statusCode).json({ error: err.message });
    } else {
      console.log("in else errorHandler middleware");
      // Handle other types of errors or unknown errors
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  