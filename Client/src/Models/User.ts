import { Nutrition } from "./Nutrition";

export class User{
    id:number = 0;
    username: string ="";
    password:string = "";
    email:string = "";
    age:number =0;
    height:number =0;
    weight:number =0;
    sportLevel:number =0;
    dailyConsumption?:Nutrition;
    recommendedConsumption?:Nutrition;
    averageConsumption?:Nutrition;
    weeklyConsumption:Nutrition[] = [];
    daysUpdated:number = 0;
    lastUpdate?: Date;

    



}