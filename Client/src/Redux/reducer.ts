import { combineReducers } from "redux";
import userReducer from './userSlice/slice'
import { USER_SLICE } from "./userSlice/slice";
const createdAppReducer = combineReducers({
    [USER_SLICE]: userReducer,
});

const reducer = (state: any, action: any) => {
    return createdAppReducer(state, action);
};

export default reducer;