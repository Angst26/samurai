import React from 'react';
import User from "./User/User";
import Pagination from "./Pagination/Pagination";
import {Box, Stack} from "@mui/material";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);


    let users = props.usersList.map(user => (
        <User
            key={user.id}
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
        <Box>
            <Stack spacing={2} alignItems="center">
                <Pagination
                    color={"primary"}
                    totalPages={pagesCount}
                    currentPage={props.currentPage}
                    onPageChange={props.onPageChange}
                />
            </Stack>
            <Box>
                {users}
            </Box>

        </Box>
    )
}

export default Users;