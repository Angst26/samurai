import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
    return <div>
        <ProfileInfo myId={props.myId} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;