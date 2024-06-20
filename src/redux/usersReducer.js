const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
    usersList: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
            debugger
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
        default:
            return state;
    }
}

export let followAC = (userID) => {
    return {type: FOLLOW, userID}
}
export let unfollowAC = (userID) => {
    return {type: UNFOLLOW, userID}
}

export let setUsersAC = (users) => {
    return {type: SET_USERS, users}
}

export let setCurrentPageAC = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export let setTotalUsersCountAC = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount}
}