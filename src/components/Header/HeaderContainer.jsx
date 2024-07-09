import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import { getAuthUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps,
    {getAuthUserData}
)(HeaderContainer);
