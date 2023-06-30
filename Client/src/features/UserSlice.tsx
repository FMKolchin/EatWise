import {createSlice} from '@reduxjs/toolkit'
import { User } from '../Models/User'
import { Food } from '../Models/Food';
import { Nutrition } from '../Models/Nutrition';

const initValue = { user:new User()}

const UserSlice = createSlice({ 
    name:"user",
    initialState:initValue,
    reducers :{
        updateUser:(state,actions)=>{
            state.user = actions.payload.user;
            console.log("in updateuser userSlice user: "+JSON.stringify(state.user));
        },
        addProduct:(state,actions)=>{
            console.log("in userSlice food: "+JSON.stringify(state.user.dailyConsumption!));
            // let nutrition:Nutrition |undefined  = state.user.dailyConsumption??undefined;
           let food:Food = actions.payload.food;
        //    if(nutrition){
            state.user.dailyConsumption!.calories +=food.productValues.calories ?? 0;
            state.user.dailyConsumption!.carbohydrates +=food.productValues.carbohydrates ?? 0;
            state.user.dailyConsumption!.cholesterol += food.productValues.cholesterol ?? 0;
            state.user.dailyConsumption!.proteins += food.productValues.proteins ?? 0;
            state.user.dailyConsumption!.sodium += food.productValues.sodium ?? 0;
            state.user.dailyConsumption!.sugars += food.productValues.sugars ?? 0;
            state.user.dailyConsumption!.totalFat += food.productValues.sugars ?? 0;
            console.log("in userSlice food: "+JSON.stringify(state.user.dailyConsumption!));
        //    }
           
        
            }
        }
    }
)

export const {updateUser,addProduct} = UserSlice.actions;
export default UserSlice.reducer;