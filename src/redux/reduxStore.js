import {legacy_createStore as createStore, combineReducers} from '@reduxjs/toolkit'
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
})
export const reduxStore = createStore(reducers)
