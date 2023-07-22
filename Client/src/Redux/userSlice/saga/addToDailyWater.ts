import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../slice";
import { User } from "../../../Models/User";
import { Nutrition } from "../../../Models/Nutrition";
import { addNutValues } from "../../../API/nutrition";
import { addWater } from "../../../API/user";

function* onAddToDailyWater(action:any) {
    try{
        alert("in dispatch")
        let user:User = action.payload.user;
        let water:number = action.payload.water;
        alert(water);
        const data:User=yield call(addWater,user,water);
        yield put(actions.onAddToDailyWaterSuccess(data));
    }
    catch(e){
        console.log(e);
    }
}

export default function* WatchOnAddToDailyWater(){
    yield takeEvery(actions.onAddToDailyWaterRequest,(action)=>onAddToDailyWater(action));
}