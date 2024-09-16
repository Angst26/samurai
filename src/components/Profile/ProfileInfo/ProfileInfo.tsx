import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {Avatar, Box, Button, CircularProgress, Input, Typography} from "@mui/material";
import {IProfile} from "../Profile";

interface ProfileInfo {
    profile: IProfile;
    myId: number;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
}

const ProfileInfo = (props: ProfileInfo) => {

    const [editPhotoClicked, setEditPhotoMode] = useState(false);
    const handleSetPhoto = () => {
        setEditPhotoMode(!editPhotoClicked);
    }

    // console.log("props.profile: " ,props.profile)
    return <Box>
        {props.isOwner && <div>im owner</div>}
        {props.profile ? (
            <Box>
                <Avatar
                    src={props.profile.photos.large}
                    alt="Profile photo"
                    sx={{width: 150, height: 150, margin: 'auto'}}
                />
            </Box>
        ) : (
            <Preloader/>
        )}
        {props.profile ? (
            <Box sx={{padding: '10px', fontStyle: 'italic'}}>
                {props.isOwner && (
                    editPhotoClicked ?
                        (<><Input type={'file'}></Input>
                        <button onClick={handleSetPhoto}>cancel</button></>)
                        :
                        <Button
                            sx={{margin: '10px'}}
                            variant={'contained'}
                            onClick={handleSetPhoto}
                        >
                            set photo
                        </Button>
                )}

                <ProfileStatus isOwner={props.isOwner}
                               status={props.status}
                               updateStatus={props.updateStatus}/>

                <Typography variant="body1">
                    Name: {props.profile.fullName}
                </Typography>
                <Typography variant="body1">
                    {props.profile.contacts.vk}
                </Typography>
            </Box>
        ) : (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress/>
                <Typography variant="h6" sx={{marginLeft: 2}}>
                    loading
                </Typography>
            </Box>

        )}
    </Box>
}


export default ProfileInfo;