import mongoose from "mongoose";

class Nutrition {
    _id:string="";
    calories:number =0;
    totalFat:number =0;
    saturatedFat:number =0;
    transFat:number =0;
    cholesterol:number =0;
    sodium:number =0;
    carbohydrates:number =0;
    sugars:number =0;
    proteins:number =0;

}

const nutritionSchema = new mongoose.Schema<Nutrition>({
    _id:{type:String, required:true},
    calories:{type:Number, required:true},
    totalFat:{type:Number, required:true},
    saturatedFat:{type:Number, required:true},
    transFat:{type:Number, required:true},
    cholesterol:{type:Number, required:true},
    sodium:{type:Number, required:true},
    carbohydrates:{type:Number, required:true},
    sugars:{type:Number, required:true},
    proteins:{type:Number, required:true},
});

const NutritionModel = mongoose.model<Nutrition>("Example", nutritionSchema);

export { Nutrition, NutritionModel };