import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.profilePage.posts} addPost={props.addPost} changeNewPostText={props.changeNewPostText} newText={props.state.profilePage.newPostText}/>
    </div>
}

export default Profile;