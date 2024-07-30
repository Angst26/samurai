import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friend from './Friend/Friend'
import ShortProfile from "./ShortProfile/ShortProfile";
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsIcon from '@mui/icons-material/Settings';


const Navbar = (props) => {

    // let friends = props.friendsList.map((friend, index) => (
    //     <ListItem key={index}>
    //         <Friend img={friend.img} name={friend.name} postname={friend.postname}/>
    //     </ListItem>
    // ));
    return <Box component="nav" sx={{width: 250}}>
        <List>
            <ListItem>
                <NavLink to='/profile' className={s.pathToOwnerProfile}>
                    <ShortProfile/>
                </NavLink>
            </ListItem>
            <ListItemButton component={NavLink} to='/profile'>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Profile"/>
            </ListItemButton>
            <ListItemButton component={NavLink} to='/dialogs'>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Dialogs"/>
            </ListItemButton>
            <ListItemButton component={NavLink} to='/users'>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users"/>
            </ListItemButton>
            <ListItemButton component={NavLink} to='/news'>
                <ListItemIcon>
                    <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="News"/>
            </ListItemButton>
            <ListItemButton component={NavLink} to='/music'>
                <ListItemIcon>
                    <MusicNoteIcon />
                </ListItemIcon>
                <ListItemText primary="Music"/>
            </ListItemButton>
            <ListItemButton component={NavLink} to='/settings'>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings"/>
            </ListItemButton>
            <ListItemButton component={NavLink} to='/signup'>
                <ListItemText primary="Sign up"/>
            </ListItemButton>
        </List>
    </Box>
}

export default Navbar;