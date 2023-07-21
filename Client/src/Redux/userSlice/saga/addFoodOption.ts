import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../slice";
import { User } from "../../../Models/User";
import { Nutrition } from "../../../Models/Nutrition";
import { addFoodOption } from "../../../API/nutrition";



function* onAddFoodOption(action:any) {
    try{
        let user:User = action.payload.user;
        let nut:Nutrition = action.payload.nut;
        const data:User=yield call(addFoodOption,user,nut);
        yield put(actions.onAddFoodOptionSuccess(data));
    }
    catch(e){
        console.log(e);
    }
}

export default function* WatchOnAddFoodOption(){
    yield takeEvery(actions.onAddFoodOptionRequest,(action)=>onAddFoodOption(action));
}