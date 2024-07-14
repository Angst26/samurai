import {Avatar, Box, Typography} from "@mui/material";

const ShortProfile = () => {

    return (
        <Box display="flex" alignItems="center">
            <Avatar src="" alt="name"/>
            <Typography variant="h5" sx={{marginLeft: 2}}>Юрий Кожин</Typography>
        </Box>
    )
}

export default ShortProfile;


