import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer state={props.state} dispatch={props.dispatch}/>
    </div>
}

export default Profile;