import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setCurrentId, updateStatus} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props)
        this.props.setCurrentId();
    }

    componentDidMount() {
        let userId = this.props.router.params.userId

        if (userId) {
            this.fetchProfile(userId);
        } else {
            console.error("User ID is not available");
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.myId !== prevProps.myId || this.props.router.params.userId !== prevProps.router.params.userId) {
            this.fetchProfileIfNeeded();
        }
    }

    fetchProfileIfNeeded() {
        let userId = this.props.myId ||this.props.router.params.userId  ;
        if (userId) {
            console.log("Fetching profile for userId:", userId);
            this.fetchProfile(userId);
        } else {
            console.error("User ID is not available");
        }
    }


    fetchProfile(userId) {
        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        } else {
            console.error("fetchProfile called without userId");
        }

    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}



function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.profilePage.myId,
})


export default compose(
    connect(mapStateToProps, {getUserProfile, setCurrentId, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
