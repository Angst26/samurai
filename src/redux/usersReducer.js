const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    usersList: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export const usersReducer = (state = initialState, action) => {
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
            return{
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
        default:
            return state;
    }
}

export let follow = (userID) => {
    return {type: FOLLOW, userID}
}
export let unfollow = (userID) => {
    return {type: UNFOLLOW, userID}
}

export let setUsers = (users) => {
    return {type: SET_USERS, users}
}

export let setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export let setTotalUsersCount = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount}
}
export let toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}