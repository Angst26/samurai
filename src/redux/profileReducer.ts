import {authAPI, profileAPI} from "../api/api";

const ADD_POST = 'samurai-network/profile-reducer/ADD-POST';
const DELETE_POST = 'samurai-network/profile-reducer/DELETE-POST';
const CHANGE_NEW_POST_TEXT = 'samurai-network/profile-reducer/CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'samurai-network/profile-reducer/SET_USER_PROFILE';
const SET_CURRENT_USER_ID = 'samurai-network/profile-reducer/SET_CURRENT_USER_ID';
const SET_STATUS = 'samurai-network/profile-reducer/SET_STATUS';


let initialState = {
    posts: [
        {id: 1, content: '', likesCount: 0},
    ],
    newPostText: '',
    profile: null,
    myId: null,
    status: ''
}

export interface IProfileReducer {
    posts: {
        id: number,
        content: string,
        likesCount: number
    }[];
    newPostText: string;
    profile: any | null;
    myId: number | null;
    status: string;
}

export const profileReducer = (state: IProfileReducer = initialState, action: any) => {

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
        case DELETE_POST: {
            const posts = [...state.posts];
            return {
                ...state,
                posts: posts.filter(post => post.id !== action.id)}
                ;
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
export const deletePostAC = (id: number) => {
    return ({
        type: DELETE_POST,
        id: id,
    })
}


const setUserProfileAC = (profile: any) => {
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
            dispatch(setUserProfileAC(profile))
        })

}

export const setCurrentId = () => (dispatch: (arg0: { id: number, type: string }) => {}) => {
    authAPI.getMyId()
        .then(id => {
            dispatch(setCurrentUserIdAC(id))
        })

}

export const getStatus = (id: number) => (dispatch: (arg0: { type: string, status: string }) => {}) => {
    profileAPI.getStatus(id)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: (statusAC: { type: string; status: string }) => {}) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}

