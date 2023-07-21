import mongoose from "mongoose";

class User {
    _id:string = "";
    username: string ="";
    password:string = "";
    email:string = "";
    age:number =0;
    height:number =0;
    weight:number =0;
    sportLevel:number =0;
    gender:number = 0;
    dailyConsumption?:string="";
    recommendedConsumption?:string="";
    averageConsumption?:string ="";
    weeklyConsumption:Array<string> = ["","","","","","",""];
    daysUpdated:number = 0;
    lastUpdate:string = "";
    administration:boolean = false;
    recommendedWater:number=0;
    dailyWater:number=0;
}

const userSchema = new mongoose.Schema<User>({
  _id:{ type: String, required: true },
  username: { type: String, required: true },
  password:{ type: String, required: true },
  email:{ type: String, required: true },
  age:{ type: Number},
  height:{ type: Number},
  weight:{ type: Number},
  sportLevel:{ type: Number },
  gender:{type:Number},
  dailyConsumption:{ type: String},//points to nutrition model.
  recommendedConsumption:{ type: String},//points to nutrition model.
  averageConsumption:{ type: String },//points to nutrition model.
  weeklyConsumption:{ type: [] }, //points to week model.
  daysUpdated:{ type: Number},
  lastUpdate:{type: String},
  administration:{type:Boolean},
  recommendedWater:{type:Number},
  dailyWater:{type:Number}

});

const UserModel = mongoose.model<User>("Users", userSchema);

export { User, UserModel };