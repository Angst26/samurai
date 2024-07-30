import {configureStore, Reducer} from "@reduxjs/toolkit";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {IDialogsPage} from "../components/Dialogs/types";
import {usersReducer} from "./usersReducer";
import {sidebarReducer} from "./sidebarReducer";
import {authReducer} from "./authReducer";
import {AuthState, ProfileState, SidebarState, UserState} from "./reduxStore";

export const store = configureStore({
    reducer: {
        profilePage: profileReducer as Reducer<ProfileState>,
        dialogsPage: dialogsReducer as Reducer<IDialogsPage>,
        usersPage: usersReducer as Reducer<UserState>,
        sidebar: sidebarReducer as Reducer<SidebarState>,
        auth: authReducer as Reducer<AuthState>,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch