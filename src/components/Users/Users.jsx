import React from 'react';
import User from "./User/User";
import Pagination from "./Pagination/Pagination";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);


    let users = props.usersList.map(user => (
        <User
            followUser={props.followUser}
            unfollowUser={props.unfollowUser}
            img={user.photos.small}
            id={user.id}
            name={user.name}
            status={user.status}
            postName={user.postName}
            land={user.land}
            city={user.city}
            isFollowed={user.followed}
            followingInProgress={props.followingInProgress}
        />
    ));

    return (
        <div>
            <Pagination
                totalPages={pagesCount}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange}
            />

            {users}
        </div>
    )
}

export default Users;