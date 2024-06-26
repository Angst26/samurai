import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;