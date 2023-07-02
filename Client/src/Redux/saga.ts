
import { all, fork } from "redux-saga/effects";
import WatchOnGetUsers from "./userSlice/saga/getUser";
import WatchOnInitUser from "./userSlice/saga/initUser";


export default function* root(){
    yield all(
        [
            ,fork(WatchOnGetUsers),
             fork(WatchOnInitUser),
        ]
    )
}