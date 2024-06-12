const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, content: 'Das ist mein erster Post da', likesCount: 10},
        {id: 2, content: 'Viel Glueck dir dabei!', likesCount: 16},
    ],
    newPostText: String,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let {posts} = state;
            let newPost = {
                id: posts[posts.length - 1].id + 1,
                content: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state;
        default:
            return state
    }
}

export const changeNewPostTextActionCreator = (text) => {
    return (
        {
            type: 'CHANGE-NEW-POST-TEXT',
            newPostText: text,
        }
    )
}
export const addPostActionCreator = () => {
    return ({
        type: 'ADD-POST',
    })
}