
import { Nutrition } from "./Nutrition";
export class Food{

    id:number;
    productName: string;
    productValues:Nutrition;


    constructor(id:number,productName:string,calories :number ,totalFat :number,cholesterol :number ,carbohydrates :number, sodium :number,sugars:number,proteins:number)
    {
         this.id=id;
         this.productName=productName;
         this.productValues=new Nutrition(calories  ,totalFat  ,cholesterol  ,carbohydrates, sodium ,sugars,proteins);

    }

    
    
}