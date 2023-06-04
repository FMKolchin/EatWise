
import { NutritionValues } from "./NutritionValues";
export class Food{

    id:number;
    productName: string;
    productValues:NutritionValues;


    constructor(id:number,productName:string,calories :number ,totalFat :number, saturatedFat:number, transFat :number ,cholesterol :number ,carbohydrates :number, sodium :number,sugars:number,proteins:number)
    {
         this.id=id;
         this.productName=productName;
         this.productValues=new NutritionValues(calories  ,totalFat , saturatedFat, transFat  ,cholesterol  ,carbohydrates, sodium ,sugars,proteins);

    }
    
}