import {usersAPI} from "../api/api";
import {IUsersReducer} from "./interfaces";
import {IUser} from "../components/Users/usersTypes";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS_ADD = 'TOGGLE_FOLLOWING_IN_PROGRESS_ADD'
const TOGGLE_FOLLOWING_IN_PROGRESS_DEL = 'TOGGLE_FOLLOWING_IN_PROGRESS_DEL'

let initialState = {
    usersList: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: IUsersReducer = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: [...state.usersList.map(user => {
                    if (user.id === action.userID)
                        return {...user, followed: true}
                    return user;
                })]
            }
        case UNFOLLOW:
            return {
                ...state,
                usersList: [...state.usersList.map(user => {
                    if (user.id === action.userID)
                        return {...user, followed: false}
                    return user;
                })]
            }
        case SET_USERS:
            return {
                ...state,
                usersList: action.users,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS_ADD:
            return {
                ...state,
                followingInProgress: [...state.followingInProgress, action.userId]
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS_DEL:
            return {
                ...state,
                followingInProgress: action.array,
            }
        default:
            return state;
    }
}

//action creators:
export let followSuccess = (userID: number) => {
    return {type: FOLLOW, userID}
}
export let unfollowSuccess = (userID: number) => {
    return {type: UNFOLLOW, userID}
}

export let setUsers = (users: IUser[]) => {
    return {type: SET_USERS, users}
}

export let setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export let setTotalUsersCount = (totalCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount}
}
export let toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export let toggleFollowingAdd = (userId: number) => {
    return {type: TOGGLE_FOLLOWING_IN_PROGRESS_ADD, userId}
}
export let toggleFollowingDel = (userId: number) => {
    return {type: TOGGLE_FOLLOWING_IN_PROGRESS_DEL, array: initialState.followingInProgress.filter(id => id !== userId)}
}


//thunk
export const getUsers = (page: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(page, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}

export const followUser = (id: number) => (dispatch: any) => {
    dispatch(toggleFollowingAdd(id))
    usersAPI.followUser(id)
        .then((resultCode) => {
            if (resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toggleFollowingDel(id))
        })
        .catch(()=> {
            dispatch(toggleFollowingDel(id))
        })

}
export const unfollowUser = (id: number) => (dispatch: any) => {

    dispatch(toggleFollowingAdd(id))
    usersAPI.unfollowUser(id)
        .then((resultCode) => {
            if (resultCode === 0) {
                dispatch(unfollowSuccess(id))
            }
            dispatch(toggleFollowingDel(id))
        })
        .catch(()=> {
            dispatch(toggleFollowingDel(id))
        })

}