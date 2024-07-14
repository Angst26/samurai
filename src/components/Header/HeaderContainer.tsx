import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import { getAuthUserData} from "../../redux/authReducer";
import {rootState} from "../../redux/reduxStore";


interface hCState {}

interface mstp {
    isAuth: boolean;
    login: string;
}

interface mdtp{
    getAuthUserData: () => void
}

type hCProps = mstp & mdtp;


class HeaderContainer extends React.Component<hCProps, hCState> {

    componentDidMount() {
        this.fetchHeaderData()
    }

    fetchHeaderData() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

export const mapStateToProps = (state: rootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default  connect(mapStateToProps,
    {getAuthUserData}
)(HeaderContainer);
