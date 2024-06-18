const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
     usersList: []
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
                usersList: [...action.users],
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

export let setUsersAC = (users) => { return {type: SET_USERS, users}}