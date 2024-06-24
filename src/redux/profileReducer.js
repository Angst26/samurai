const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, content: 'Das ist mein erster Post da', likesCount: 10},
        {id: 2, content: 'Viel Glueck dir dabei!', likesCount: 16},
    ],
    newPostText: '',
    profile: null,
    myId: 31360,
}

export const profileReducer = (state = initialState, action) => {

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
            return{
                ...state,
                profile: action.profile,
            }
        default:
            return state
    }
}

export const changeNewPostText = (text) => {
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

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

