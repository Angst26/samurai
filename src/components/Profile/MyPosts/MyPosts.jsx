import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, content: 'Das ist mein erster Post da', likesCount:10},
        {id: 1, content: 'Viel Glueck dir dabei!', likesCount:16},
    ]
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
                <Post message={postsData[0].content} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].content} likesCount={postsData[1].likesCount}/>

            </div>
        </div>
    )
}

export default MyPosts;