import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../slice";
import { User } from "../../../Models/User";
import { getUserFromToken } from "../../../API/token";

function* onGetUsersFunction(action:any) {
    try{
        let token:string = action.payload.token;
        const data:User=yield call(getUserFromToken,token);
        yield put(actions.onGetUserSuccess(data));
    }
    catch(e){
        console.log(e);
    }
}

export default function* WatchOnGetUsers(){
    yield takeEvery(actions.onGetUserReqest,(action)=>onGetUsersFunction(action));
}