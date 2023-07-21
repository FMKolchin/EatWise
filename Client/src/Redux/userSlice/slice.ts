
import { createSelector, createSlice } from "@reduxjs/toolkit"
import { User } from "../../Models/User";

export const USER_SLICE='USER_SLICE';

const initialState:{user:User}={user:new User()};

const slice=createSlice({
    name:USER_SLICE,
    initialState,
    reducers:{
        onGetUserReqest:(state)=>{},
        onGetUserSuccess:(state,action)=>{
            state=action.payload
        },
        onInitUserRequest:(state)=>{
            console.log("in  req init");
        },
        onInitUserSuccess:(state,action)=>{
            console.log("in success init "+action.payload);
             state.user=action.payload;
        },
        onAddToDailyConsomptionRequest:(state,action)=>{

        },
        onAddToDailyConsomptionSuccess:(state,action)=>{
            state.user = action.payload;
        },
        onUpdateDaysReqest:(state,action)=>{

        },
        onUpdateDaysSuccess:(state,action)=>{
            state.user = action.payload;
        },
        onAddToDailyWaterRequest:(state,action)=>{

        },
        onAddToDailyWaterSuccess:(state,action)=>{
            state.user = action.payload;
        },

    }
})

const getState=(state:any)=>{
    return state[USER_SLICE]||initialState;
}

export const selectors={
    getUser:createSelector(getState,(state)=>state.user),
    // initUser:createSelector(getState,(state)=>state)

}

export const actions:any =  {...slice.actions};


export default slice.reducer;