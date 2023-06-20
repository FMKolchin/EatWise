import mongoose from "mongoose";

class Food {
    _id: string ="";
    productName: string = "";
    productValues:Number = 0;
}

const foodSchema = new mongoose.Schema<Food>({
    _id:{type: String,required: true},
    productName: {type: String,required: true},
    productValues:{type: String,required: true},//points to nutrition.S
});

const FoodModel = mongoose.model<Food>("Example", foodSchema);

export { Food, FoodModel };