import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../slice";
import { User } from "../../../Models/User";
import { userFromCookie } from "../../../Services/userFromCookie";

function* onInitUserFunction() {
    try{
        
        const data:User=yield call(userFromCookie);
        // console.log("in init data "+data);
        yield put(actions.onInitUserSuccess(data));
    }
    catch(e){
        console.log(e);
    }
}

export default function* WatchOnInitUser(){
    yield takeEvery(actions.onInitUserRequest.type,onInitUserFunction);
}