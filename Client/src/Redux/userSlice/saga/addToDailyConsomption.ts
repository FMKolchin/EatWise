import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../slice";
import { User } from "../../../Models/User";
import { Nutrition } from "../../../Models/Nutrition";
import { addNutValues } from "../../../API/nutrition";

function* onAddToDailyConsomption(action:any) {
    try{
        let user:User = action.payload.user;
        let nut:Nutrition = action.payload.nutrition;
        console.log("user: " + JSON.stringify(user)+" nutrientation: " +JSON.stringify(nut))
        const data:User=yield call(addNutValues,user,nut);
        yield put(actions.onAddToDailyConsomptionSuccess(data));
    }
    catch(e){
        console.log(e);
    }
}

export default function* WatchOnAddToDailyConsomption(){
    yield takeEvery(actions.onAddToDailyConsomptionRequest,(action)=>onAddToDailyConsomption(action));
}