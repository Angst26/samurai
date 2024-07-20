import {authAPI, profileAPI} from "../api/api";
import {IProfileReducer} from "./interfaces";
import React from "react";
import {ActionCreator} from "redux";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID';
const SET_STATUS = 'SET_STATUS';

let initialState  = {
    posts: [
        {id: 1, content: '', likesCount: 0},
    ],
    newPostText: '',
    profile: null,
    myId: null,
    status: ''
}

export const profileReducer = (state : IProfileReducer = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST: {
            let {posts} = state;
            let newPost = {
                id: posts[posts.length - 1].id + 1,
                content: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            }
        }
        case CHANGE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_CURRENT_USER_ID:
            return {
                ...state,
                myId: action.id,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}

export const changeNewPostText = (text: string) => {
    return (
        {
            type: CHANGE_NEW_POST_TEXT,
            newPostText: text,
        }
    )
}
export const addPost = () => {
    return ({
        type: ADD_POST,
    })
}


const setUserProfileSuccessAC = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile //TODO profile type to define!!!
    }
}

const setCurrentUserIdAC = (id: number) => {
    return {
        type: SET_CURRENT_USER_ID,
        id
    }
}

const setStatusAC = (status: string) => {
    return {
        type: SET_STATUS,
        status
    }
}

//thunks: needed to create action from function object


export const getUserProfile = (userId: number) => (dispatch: (arg0: { profile: any; type: string }) => {}) => {

    profileAPI.getProfile(userId)
        .then(profile => {
            dispatch(setUserProfileSuccessAC(profile))
        })

}

export const setCurrentId = () => (dispatch: (arg0: {id: number, type: string} ) => {}) => {
    authAPI.getMyId()
        .then(id => {
            dispatch(setCurrentUserIdAC(id))
        })

}

export const getStatus = (id: number) => (dispatch: (arg0: {type:string, status: string})=> {}) => {
    profileAPI.getStatus(id)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: (statusAC: { type: string; status: string })=>{}) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}

