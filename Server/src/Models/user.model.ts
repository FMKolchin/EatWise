import mongoose from "mongoose";

class User {
    id:number = 0;
    username: string ="";
    password:string = "";
    email:string = "";
    age:number =0;
    height:number =0;
    weight:number =0;
    sportLevel:number =0;
    dailyConsumption?:Number;
    recommendedConsumption?:Number;
    averageConsumption?:Number;
    weeklyConsumption:Number = 0;
    daysUpdated:number = 0;


}

const userSchema = new mongoose.Schema<User>({
  id:{ type: Number, required: true },
  username: { type: String, required: true },
  password:{ type: String, required: true },
  email:{ type: String, required: true },
  age:{ type: Number, required: true },
  height:{ type: Number, required: true },
  weight:{ type: Number, required: true },
  sportLevel:{ type: Number, required: true },
  dailyConsumption:{ type: Number, required: true },//points to nutrition model.
  recommendedConsumption:{ type: Number, required: true },//points to nutrition model.
  averageConsumption:{ type: Number, required: true },//points to nutrition model.
  weeklyConsumption:{ type: Number, required: true }, //points to week model.
  daysUpdated:{ type: Number, required: true },
});

const UserModel = mongoose.model<User>("Example", userSchema);

export { User, UserModel };