import React from "react";
import './App.css'
import NewsContainer from "./components/News/NewsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginForm";
import {Box, CssBaseline} from "@mui/material";
import {Signup} from "./components/Signup/Signup";



function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <HeaderContainer/>
            <Box className="app-wrapper" sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
                <NavbarContainer/>
                <Box className='app-wrapper-content' sx={{ backgroundColor: 'background.paper', padding: 2 }}>
                    <Routes>
                        <Route path='/profile/:userId?'
                               element={<ProfileContainer/>}/>
                        <Route path='/dialogs'
                               element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<NewsContainer/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/signup' element={<Signup/>}/>

                    </Routes>
                </Box>

            </Box>
        </React.Fragment>
    );
}

export default App;
