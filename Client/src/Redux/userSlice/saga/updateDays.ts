import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../slice";
import { User } from "../../../Models/User";
import { updateDays } from "../../../API/user";


function* onUpdateDaysFunction(action:any) {
    try{
        let user:string = action.payload.user;
        console.log("user in saga" + user);
        const data:User=yield call(updateDays,user);
        yield put(actions.onUpdateDaysSuccess(data));
    }
    catch(e){
        console.log(e);
    }
}

export default function* WatchOnUpdateDays(){
    yield takeEvery(actions.onUpdateDaysReqest,(action)=>onUpdateDaysFunction(action));
}