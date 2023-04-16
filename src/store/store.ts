import { combineReducers, configureStore } from "@reduxjs/toolkit";
import useReducer  from "./reducers/UserSlice";
import UserSlice from "./reducers/UserSlice";

export const store = configureStore({
    reducer:{
        UserSlice
    }
})


export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch