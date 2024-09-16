import React from "react";
import './App.css'
import NewsContainer from "./components/News/NewsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Preloader from "./components/common/Preloader/Preloader";
import {Route, Routes} from "react-router-dom";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";

import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {withRouter} from "./components/Profile/ProfileContainer";
import {withSuspense} from "./hoc/SuspenseWrapper";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Box, CssBaseline} from "@mui/material";

import {connect} from "react-redux";
import {compose} from "redux";
import {AppThunk, initializeApp} from "./redux/appReducer";
import {rootState} from "./redux/reduxStore";
import Signup from "./components/Signup/Signup";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
// const ProfileContainer = React.lazy(() => import('./components/Profile/NewProfileContainer'))
const LoginPage = React.lazy(() => import('./components/Login/LoginForm'))

type AProps = {
    initializeApp: () => AppThunk;
    initialized: boolean;
}


class App extends React.Component<AProps> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (<React.Fragment>
            <CssBaseline/>
            <HeaderContainer/>
            <Box className="app-wrapper" sx={{backgroundColor: 'background.default', minHeight: '100vh'}}>
                <NavbarContainer/>
                <Box className='app-wrapper-content' sx={{backgroundColor: 'background.paper', padding: 2}}>
                    <Routes>
                        <Route path='/profile/:userId?' element={
                            React.createElement(withSuspense(ProfileContainer))

                        }/>
                        <Route path='/dialogs' element={
                            React.createElement(withSuspense(DialogsContainer))
                        }/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<NewsContainer/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={
                            React.createElement(withSuspense(LoginPage))

                        }/>
                        <Route path='/signup' element={<Signup/>}/>
                    </Routes>
                </Box>
            </Box>
        </React.Fragment>)

    }
}

const mapStateToProps = (state: rootState) => ({
    initialized: state.app.initialized,
})

const mapDispatchToProps = {
    initializeApp
}

export default  compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);

