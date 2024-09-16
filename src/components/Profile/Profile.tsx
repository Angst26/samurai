import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

export interface IProfile {

    photos: {
        large: string | undefined
    };
    userId: number;
    fullName: string;
    contacts: Record<string, string>;

}

interface ProfileProps {
    myId: number; // or PropTypes.string, depending on your data type
    profile: IProfile
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
}


const Profile = (props: ProfileProps) => {
    return <div>
        <ProfileInfo isOwner={props.isOwner} myId={props.myId} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}


export default Profile;