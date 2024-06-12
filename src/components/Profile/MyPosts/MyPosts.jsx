import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";



const MyPosts = (props) => {

    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.changeNewPostText(text)
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
                <button onClick={onAddPost}>Добавить</button>
            </div>
            <div className={s.posts}>
                {postElements}

            </div>
        </div>
    )
}

export default MyPosts;