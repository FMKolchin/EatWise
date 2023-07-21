import  { Request, Response } from 'express';
import { Nutrition } from '../Models/nutrition.model';
import { addFoodOption, addNutValues, getNutritionById } from '../Services/nutrition.service';

export const  getNutritionByIdCtrl=  async (req: Request, res: Response) => {
    const nutritionId = req.params.id;
    console.log("nut id "+nutritionId);
    let nutrition:Nutrition|null=await getNutritionById(nutritionId);
    console.log("nut "+nutrition);
    res.send(nutrition);
  }

  export const addNutValuesCtrl = async (req: Request, res: Response) => {
    console.log("in nut ctrl addNutVal "+req.body);
    const nutId = req.body.nutId;
    const nutValues = req.body.nutValues;
    await addNutValues(nutId, nutValues);
    res.send();
  }

  export const addFoodOptionCtrl = async (req: Request, res: Response) => {
    await addFoodOption(req.body.nut,req.body.userId);
    res.send();
  }