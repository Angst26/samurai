import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";



const MyPosts = (props) => {

    let newPostElement = React.createRef();


    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
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
                          value={props.newText}
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