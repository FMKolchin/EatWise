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




