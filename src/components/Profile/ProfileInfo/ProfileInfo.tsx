import {useEffect, useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {Avatar, Box, CircularProgress, Typography} from "@mui/material";

interface ProfileInfo {
    profile: {
        photos: {
            large: string | undefined
        };
        userId: number;
        fullName: string;
        contacts: {
            vk: string;
        }
    }
    myId: number;
    status: string;
    updateStatus: (status: string) => void;
}

const ProfileInfo = (props: ProfileInfo) => {
    console.log('render ProfileInfo');
    const [count, setCount] = useState(0);


    // console.log("props.profile: " ,props.profile)
    return <Box>
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
            <Box  sx={{padding: '10px', fontStyle: 'italic'}}>
                <ProfileStatus isOwner={props.myId === props.profile.userId}
                               status={props.status}
                               updateStatus={props.updateStatus}/>

                <Typography variant="body1" >
                    Name: {props.profile.fullName}
                </Typography>
                <Typography variant="body1" >
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