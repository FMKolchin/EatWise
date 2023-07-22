import { ClientError, NotFoundError } from "../Models/Error";
import { Nutrition, NutritionModel } from "../Models/nutrition.model";
import { User } from "../Models/user.model";
import { getDateInString, getLastUpdate, getUserById, increase1DaysUpdate, saveDayNutValuesToWeeklyConsomption, updateLastUpdatedDate } from "./user.service";
//don't delete, needed for DB connection
const connectDB = require('../ConnectDB');
const objectId = require("mongodb").ObjectId;


export const getNutritionById = async (id: string,): Promise<Nutrition | null> => {
    let nutrition:Nutrition|null = await NutritionModel.findById(id);

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

export const addFoodOption = async(nut:Nutrition,userId:string):Promise<User>=>{
    if(await getLastUpdate(userId)!=getDateInString()){
        await increase1DaysUpdate(userId);
        await updateLastUpdatedDate(userId);
        let nutId:string = new objectId();
        nut._id = nutId;
        await createNutrition(nut);
        await saveDayNutValuesToWeeklyConsomption(userId,nutId);   
     }
     else{
        let user:User = (await getUserById(userId))!;
        addNutValues(user.dailyConsumption!,nut);
     }
     return (await getUserById(userId))!;
}



