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
import Login from "./components/Login/Login";


function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:userId?'
                           element={<ProfileContainer/>}/>
                    <Route path='/dialogs'
                           element={<DialogsContainer />}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/news' element={<NewsContainer/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/login' element={<Login/>}/>

                </Routes>
            </div>
        </div>
    );
}

export default App;
