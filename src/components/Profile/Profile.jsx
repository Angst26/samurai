import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.profilePage.posts} dispatch={props.dispatch} newPostText={props.state.profilePage.newPostText}/>
    </div>
}

export default Profile;