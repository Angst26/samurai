import {NavLink} from "react-router-dom";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {IHeader} from "./types";

const Header = (props: IHeader) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt='logo'
                         style={{height: '40px'}}/>

                    <div>
                        {props.isAuth ?
                            (<Typography variant="h6">{props.login}</Typography>
                            ): (
                            <Button color="inherit" component={NavLink} to="/login">Login</Button>
                        )}
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;