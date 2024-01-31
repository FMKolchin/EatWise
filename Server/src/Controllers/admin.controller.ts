import  { Request, Response } from 'express';
import { Nutrition } from '../Models/nutrition.model';
import { addFoodOption, addNutValues, getNutritionById } from '../Services/nutrition.service';
import { addArticle, getArticles } from '../Services/admin.service';
import { Article } from '../Models/article.model';

export const  addArticleCtrl=  async (req: Request, res: Response) => {
 console.log("in addArticleCtrl")

    const {title,content,author, image } = req.body;
    console.log(title,content,author, image);
  await addArticle(title,content,author, image );
 res.send();
  }
  export const  getArticlesCtrl=  async (req: Request, res: Response) => {
    console.log("in getArticlesCtrl")
     const data=await getArticles();
    res.send(data);
     }