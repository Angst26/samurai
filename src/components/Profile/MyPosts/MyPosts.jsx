import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {addPostActionCreater, changeNewPostTextActionCreator} from "../../../redux/state";



const MyPosts = (props) => {

    let newPostElement = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreater());
    }
    let onPostChange = () => {

        let text = newPostElement.current.value;

        props.dispatch(changeNewPostTextActionCreator(text))
    }

    let postElements = props.posts.map(post => <Post id={post.id} likesCount={post.likesCount} content={post.content}/>)
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}
                />
            </div>
            <div>
                <button onClick={addPost}>Добавить</button>
            </div>
            <div className={s.posts}>
                {postElements}

            </div>
        </div>
    )
}

export default MyPosts;