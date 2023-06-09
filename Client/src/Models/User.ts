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
    gender:number = 0;
    dailyConsumption?:Nutrition | undefined= new Nutrition(0,0,0,0,0,0,0);
    recommendedConsumption?:Nutrition |undefined= new Nutrition(0,0,0,0,0,0,0);
    averageConsumption?:Nutrition |undefined= new Nutrition(0,0,0,0,0,0,0);
    weeklyConsumption:Nutrition[] = [];
    daysUpdated:number = 0;
    lastUpdate?: string;
    

    



}