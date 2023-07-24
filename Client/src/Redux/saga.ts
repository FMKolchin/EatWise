
import { all, fork } from "redux-saga/effects";
import WatchOnGetUsers from "./userSlice/saga/getUser";
import WatchOnInitUser from "./userSlice/saga/initUser";
import WatchOnAddToDailyConsomption from "./userSlice/saga/addToDailyConsomption";
import WatchOnUpdateDays from "./userSlice/saga/updateDays";
import WatchOnAddFoodOption from "./userSlice/saga/addFoodOption";
// import WatchOnAddToDailyWater from "./userSlice/saga/addToDailyWater";


export default function* root() {
    yield all(
        [
            fork(WatchOnGetUsers),
            fork(WatchOnInitUser),
            fork(WatchOnAddToDailyConsomption),
            fork(WatchOnUpdateDays),
            // fork(WatchOnAddToDailyWater),
            fork(WatchOnAddFoodOption),
      
        ]
    )
}