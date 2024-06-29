import {legacy_createStore as createStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit'
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import {thunk as thunkMiddleware} from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
})
export const reduxStore = createStore(reducers, applyMiddleware(thunkMiddleware));
