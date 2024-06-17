const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    usersList: [
        {
            id: 1,
            followed: false,
            img: 'https://sun9-37.userapi.com/s/v1/ig2/pphscH5pILnOFtyhW5LgN8ebhIb64FxWPJpc9HZUaLx81O6VvNtIoEbzxouaUlS1BfDmUqsF20_uaPmrn23Xvm6G.jpg?quality=96&crop=160,0,960,960&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720&ava=1&u=5ef6OzEt6reAhxZg2JbfiPkWEvRNQQYr6X7cZ1ThBjE&cs=200x200',
            name: 'Yuri',
            postName: 'Kozhin',
            land: 'Russia',
            city: 'Murmansk',
            status: 'Я брат'
        },
        {
            id: 2,
            followed: false,
            img: 'https://sun9-68.userapi.com/s/v1/ig2/_lcygdcuz112_NJSICpoBajj3rHp0bw1n19rZxScW-9yCqYyy9desMd2ZiX1j8Ic3Dj82FCk1Al36Yjwtkm9WFOu.jpg?quality=96&crop=17,0,1932,1932&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440&ava=1&u=oLKdG6EwFzwxMDdP2XKjiNgsRklvWD6YR3wvf-PX-VA&cs=200x200',
            name: 'Anna',
            postName: 'Kozhina',
            land: 'Russia',
            city: 'Murmansk',
            status: 'Я сестра'
        },
        {
            id: 3,
            followed: false,
            img: 'https://sun9-57.userapi.com/s/v1/ig2/FPHcxDWSeIw6B138S-ViluslK-wthOsG2KIApz4oLRxfVe7DfmBT_Ae57xcuNw9_NAOIf7mJnS2P3o84Js0fDlIV.jpg?size=100x100&quality=95&crop=585,846,1122,1122&ava=1',
            name: 'Ksenia',
            postName: 'Missa',
            land: 'Russia',
            city: 'Murmansk',
            status: 'Я сестра сестры'
        },
        {
            id: 4,
            followed: false,
            img: 'https://sun9-80.userapi.com/impg/To85ionWWoeYtswukH1XNj7H_2sg3s9_h7eaYQ/Rh2ttouOTU4.jpg?size=997x1280&quality=95&sign=685a54c998469a46fa85ac87df1b8f6d&type=album',
            name: 'Sergey',
            postName: 'Soloviev',
            land: 'Russia',
            city: 'Kursk',
            status: 'Я преподаватель немецкого'
        },


    ]

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
                users: [...state.users, ...action.users],
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