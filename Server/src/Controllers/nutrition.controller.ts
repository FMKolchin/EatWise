import express, { Request, Response } from 'express';
const router2 = express.Router();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();
import { getNutritionById } from '../Services/nutrition.service';
import { Nutrition } from '../Models/nutrition.model';

//Get
router2.get('/:id', async (req: Request, res: Response) => {
    const nutritionId = req.params.id;
    console.log("nut id "+nutritionId);
    let nutrition:Nutrition|null=await getNutritionById(nutritionId);
    console.log("nut "+nutrition);
    res.send(nutrition);
  });


module.exports = router2;
