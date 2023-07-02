import  { Request, Response } from 'express';
import { Nutrition } from '../Models/nutrition.model';
import { getNutritionById } from '../Services/nutrition.service';

export const  getNutritionByIdCtrl=  async (req: Request, res: Response) => {
    const nutritionId = req.params.id;
    console.log("nut id "+nutritionId);
    let nutrition:Nutrition|null=await getNutritionById(nutritionId);
    console.log("nut "+nutrition);
    res.send(nutrition);
  }