import {NavLink} from "react-router-dom";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";


export interface IHeader {
    login: string;
    isAuth: boolean;
    logout: () => void
}

const Header = (props: IHeader) => {


    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <img src='#' alt='logo'
                         style={{height: '40px'}}/>

                    {props.isAuth? <Button color='inherit' onClick={props.logout}>log out</Button> : null}


                    <div>
                        {props.isAuth ?
                            (<Typography variant="h6">{props.login}</Typography>
                            ): (
                            <Button color="inherit" to={'/login'} component={NavLink}>Login</Button>
                        )}
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;