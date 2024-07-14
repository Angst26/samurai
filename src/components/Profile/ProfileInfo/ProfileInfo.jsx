import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {Avatar, Box, CircularProgress, Typography} from "@mui/material";

const ProfileInfo = (props) => {
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
            <Box className={s.descriptionBlock} sx={{padding: 2}}>
                <ProfileStatus isOwner={props.myId === props.profile.userId}
                               status={props.status}
                               updateStatus={props.updateStatus}/>

                <Typography variant="body1" className={s.contacts}>
                    Name: {props.profile.fullName}
                </Typography>
                <Typography variant="body1" className={s.contacts}>
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