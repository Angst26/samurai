import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://live.staticflickr.com/65535/51177662000_273f764149_b.jpg' />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;