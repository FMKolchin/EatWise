class User{
    id:number = 0;
    username: string ="";
    password:string = "";
    email:string = "";
    age:number =0;
    height:number =0;
    weight:number =0;
    sportLevel:number =0;
    dailyConsumption?:NutritionValues;
    recommendedConsumption?:NutritionValues;
    averageConsumption?:NutritionValues;
    weeklyConsumption:NutritionValues[] = [];
    daysUpdated:number = 0;



}