import {rootState} from "./reduxStore";
import {createSelector} from "reselect";
////////////////////////
const getUsers = (state: rootState) => {
    return state.usersPage.usersList
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter((user) => true)
})

////////////////////////

const getPageSize = (state: rootState) => {
    return state.usersPage.pageSize
}

export const getPageSizeSelector = createSelector(
    getPageSize, (pageSize) => {
        return pageSize
    }
)

////////////////////////
export const getTotalUsersCount = (state: rootState) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: rootState) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: rootState) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress =  (state: rootState) => {
    return state.usersPage.followingInProgress
}
