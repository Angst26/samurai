import {connect} from "react-redux";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingAdd, toggleFollowingDel,
    followUser, unfollowUser, requestUsers
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSizeSelector,
    getTotalUsersCount,
     getUsersSelector
} from './../../redux/usersSelectors'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.fetchUsers();
        }
    }

    fetchUsers() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}

                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                usersList={this.props.usersList}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                isFollowed={this.props.isFollowed}
            ></Users>
        </>


    }
}

let mapStateToProps = (state) => {
    return {
        usersList: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose(
    connect(mapStateToProps, {
        setUsers, setCurrentPage, setTotalUsersCount,
        toggleFollowingAdd, toggleFollowingDel,
//thunksCreators:
        getUsers: requestUsers, followUser, unfollowUser,
    }),
)(UsersContainer)
