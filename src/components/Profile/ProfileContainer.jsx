import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if(!userId){
            userId = this.props.myId
        }
        this.fetchProfile(userId);

    }


    fetchProfile(userId) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
            {withCredentials: true})
            .then(response => {
                this.props.setUserProfile(response.data);
                window.profilestate = this.props.router.params.userId
            })
    }


    render() {
        return(
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    myId: state.profilePage.myId,
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps,
    {setUserProfile})(withRouter(ProfileContainer));