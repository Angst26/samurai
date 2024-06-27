import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow, toggleFollowingAdd, toggleFollowingDel
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        this.fetchUsers(this.props.currentPage);
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.props.toggleIsFetching(true)
            this.fetchUsers(this.props.currentPage);
        }
    }

    fetchUsers(page) {
        getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
    }

    render() {
        return <>
            {this.props.isFetching? <Preloader/> : null }
            <Users
                isFetching={this.props.isFetching}
                followingInProgress = {this.props.followingInProgress}
                toggleFollowingAdd={this.props.toggleFollowingAdd}
                toggleFollowingDel={this.props.toggleFollowingDel}

                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                usersList={this.props.usersList}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                isFollowed={this.props.isFollowed}
            ></Users>
        </>


    }
}

let mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingAdd,
    toggleFollowingDel,
})(UsersContainer)

