import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import useReducer  from "./reducers/UserSlice";
import UserSlice from "./reducers/UserSlice";
import { postApi } from "../services/PostService";

export const store = configureStore({
    reducer:{
        UserSlice,
        [postApi.reducerPath] : postApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
})


export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch