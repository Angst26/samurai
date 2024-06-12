import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        props.dispatch(changeNewPostTextActionCreator(text))
    }

    return (
        <MyPosts changeNewPostText={onPostChange} addPost={addPost} posts={props.state.posts} newPostText={props.state.newPostText}/>
    )
}

export default MyPostsContainer;

