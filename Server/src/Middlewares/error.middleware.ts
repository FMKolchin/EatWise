import {Response,Request, NextFunction } from "express";
import { CustomError } from "../Models/Error";


export const errorHandler =((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
      res.status(err.statusCode).json({ error: err.message });
    } else {
      // Handle other types of errors or unknown errors
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  