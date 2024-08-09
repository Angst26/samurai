import {usersAPI} from "../api/api";
import {IUser} from "../components/Users/usersTypes";
import {updateObjInArray} from "../utils/objectHelpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS_ADD = 'TOGGLE_FOLLOWING_IN_PROGRESS_ADD'
const TOGGLE_FOLLOWING_IN_PROGRESS_DEL = 'TOGGLE_FOLLOWING_IN_PROGRESS_DEL'

const initialState = {
    usersList: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


export interface IUsersReducer {
    usersList: {
        id: number;
        pageSize: number;
        totalUsersCount: number;
        currentPage: number;
        isFetching: boolean;
        followingInProgress: any[]
    }[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: { id: number }[]
}

export const usersReducer = (state: IUsersReducer = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: updateObjInArray(state.usersList, action.userId, "id", {followed: true})
                // state.usersList.map(user => {
                //     if (user.id === action.userID)
                //         return {...user, followed: true}
                //     return user;
                // })
                    //

            }
        case UNFOLLOW:
            return {
                ...state,
                usersList: updateObjInArray(state.usersList, action.userId, "id", {followed: false})
                    // updateObjInArray(state.usersList, action.userId, "id", {followed: false})


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
export let followSuccess = (userId: number) => {
    return {type: FOLLOW, userId}
}
export let unfollowSuccess = (userId: number) => {
    return {type: UNFOLLOW, userId}
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
export let toggleFollowingProgress = (userId: number, flag: boolean) => {
    if (flag === true) {
        return {type: TOGGLE_FOLLOWING_IN_PROGRESS_ADD, userId}
    } else if (flag === false) {
        return {
            type: TOGGLE_FOLLOWING_IN_PROGRESS_DEL,
            array: initialState.followingInProgress.filter(id => id !== userId)
        }
    }
}


//thunk


export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))

    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))

}

const followingFlow = async (dispatch: any, id: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(id, true))
    const resultCode: number = await apiMethod(id)
    if (resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(id, false))
}


export const followUser = (id: number) => (dispatch: any) => {
    const apiMethod = usersAPI.followUser.bind(usersAPI)
    const actionCreator = followSuccess;


    followingFlow(dispatch, id, apiMethod, actionCreator)
}
export const unfollowUser = (id: number) => (dispatch: any) => {
    const apiMethod = usersAPI.unfollowUser.bind(usersAPI)
    const actionCreator = unfollowSuccess;

    followingFlow(dispatch, id, apiMethod, actionCreator)
}