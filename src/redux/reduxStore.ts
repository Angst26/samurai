import {legacy_createStore as createStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit'
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import {thunk as thunkMiddleware} from "redux-thunk";
import {Reducer} from "@reduxjs/toolkit";
import {IDialogsPage} from "../components/Dialogs/types";
import {IProfileReducer} from "./interfaces";

interface UserState {

    usersList: {
        pageSize: number;
        totalUsersCount: number;
        currentPage: number;
        isFetching: boolean;
        followingInProgress: any[]
    }[]
}

interface SidebarState {
    friendsList:
        {
            img: string;
            id: number;
            name: string;
            postname: string;
        }[]
}

interface AuthState {
    userId: number;
    email: string;
    login: string;
    isAuth: boolean;

}


const rootReducer = combineReducers({
    profilePage: profileReducer as Reducer<IProfileReducer>,
    dialogsPage: dialogsReducer as Reducer<IDialogsPage>,
    usersPage: usersReducer as Reducer<UserState>,
    sidebar: sidebarReducer as Reducer<SidebarState>,
    auth: authReducer as Reducer<AuthState>,
})

export type rootState = ReturnType<typeof rootReducer>;
export const reduxStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));
