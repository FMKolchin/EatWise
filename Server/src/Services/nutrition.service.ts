import { ClientError, NotFoundError } from "../Models/Error";
import { Nutrition, NutritionModel } from "../Models/nutrition.model";
//don't delete, needed for DB connection
const connectDB = require('../ConnectDB');
const objectId = require("mongodb").ObjectId;



export const getNutritionById = async (id: string,): Promise<Nutrition | null> => {
    let nutrition:Nutrition|null = await NutritionModel.findById(id);
    console.log(nutrition);
    return nutrition;
}

export const createNutrition = async (nutrition:Nutrition): Promise<Nutrition> => {
    return await NutritionModel.create(nutrition);
}

export const updateNutrition = async (nut:Nutrition): Promise<void>=>{
    await NutritionModel.replaceOne({_id:nut._id},nut);
}

export const addNutValues = async (nutId:string,nutValues:Nutrition):Promise<void>=>{
    let nut:Nutrition|null = await getNutritionById(nutId);
    if(nut){
      nut.calories +=nutValues.calories; 
      nut.carbohydrates +=nutValues.carbohydrates;
      nut.cholesterol +=nutValues.cholesterol;
      nut.proteins +=nutValues.proteins;
      nut.sodium+=nutValues.sodium;
      nut.sugars +=nutValues.sugars;
      nut.totalFat+=nutValues.totalFat; 
      await updateNutrition(nut);
    }
    

}




