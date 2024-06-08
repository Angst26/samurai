import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, content: 'Das ist mein erster Post da', likesCount:10},
        {id: 1, content: 'Viel Glueck dir dabei!', likesCount:16},
    ]

    let postElements = posts.map(post => <Post id={post.id} likesCount={post.likesCount} content={post.content}/>)
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea/>
            </div>
            <div>
                <button>Добавить</button>
            </div>
            <div className={s.posts}>
                {postElements}

            </div>
        </div>
    )
}

export default MyPosts;