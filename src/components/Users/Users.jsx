import React from 'react';
import User from "./User/User";
import styles from "./Users.module.css";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let users = props.usersList.map(user => (
        <User
            follow={props.follow}
            unfollow={props.unfollow}
            img={user.photos.small}
            id={user.id}
            name={user.name}
            status={user.status}
            postName={user.postName}
            land={user.land}
            city={user.city}
            isFollowed={user.followed}
            followingInProgress={props.followingInProgress}

            toggleFollowingAdd = {props.toggleFollowingAdd}
            toggleFollowingDel = {props.toggleFollowingDel}
        />
    ));

    return (
        <div>
            <div>
                {pages.map(p => (
                    <span
                        key={p}
                        className={p === props.currentPage ? styles.selectedPage : ''}
                        onClick={() => props.onPageChange(p)}>
                           {`${p}`}
                        </span>
                ))}
            </div>
            {users}
        </div>
    )
}

export default Users;