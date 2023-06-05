import mongoose from "mongoose";

class Food {
    id:number =0;
    productName: string = "";
    productValues:Number = 0;
}

const foodSchema = new mongoose.Schema<Food>({
    id:{type: Number,required: true},
    productName: {type: String,required: true},
    productValues:{type: String,required: true},//points to nutrition.S
});

const FoodModel = mongoose.model<Food>("Example", foodSchema);

export { Food, FoodModel };