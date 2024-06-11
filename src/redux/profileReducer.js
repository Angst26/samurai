const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let {posts} = state;
        let newPost = {
            id: posts[posts.length - 1].id + 1,
            content: state.newPostText,
            likesCount: 0,
        }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === CHANGE_NEW_POST_TEXT) {
        state.newPostText = action.newPostText
    }

    return state
}