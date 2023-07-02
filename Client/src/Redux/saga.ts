
import { all, fork } from "redux-saga/effects";
import WatchOnGetUsers from "./userSlice/saga/getUser";
import WatchOnInitUser from "./userSlice/saga/initUser";
import WatchOnAddToDailyConsomption from "./userSlice/saga/addToDailyConsomption";


export default function* root(){
    yield all(
        [
            ,fork(WatchOnGetUsers),
             fork(WatchOnInitUser),
             fork(WatchOnAddToDailyConsomption),
        ]
    )
}