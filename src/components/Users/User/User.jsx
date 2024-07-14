import {NavLink} from "react-router-dom";
import {Avatar, Box, Button, Typography} from "@mui/material";

const User = (props) => {
    let onFollow = () => {
        props.followUser(props.id)
    }

    let onUnfollow = () => {
        props.unfollowUser(props.id)
    }


    return (
        <Box display="flex" align alignItems="center" p={2} borderBottom={"1px solid #ccc"}>
            <NavLink to={`/profile/${props.id}`}>
                <Avatar src={props.img } alt={props.name}
                        sx={{width: 56, height: 56, marginRight: 2}}/>
            </NavLink>
            <Box flexGrow={1}>
                <Typography variant="h6">
                    {props.name} {props.postName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {props.status}
                </Typography>
            </Box>
            <Button
                variant={"contained"}
                color={props.isFollowed ? "secondary" : "primary"}
                disabled={props.followingInProgress.some(id => id === props.id)}
                onClick={props.isFollowed ? onUnfollow : onFollow}
            >
                {props.isFollowed ? 'unfollow' : 'follow'}
            </Button>

        </Box>
    )
}

export default User;
