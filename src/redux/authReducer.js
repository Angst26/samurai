import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserDataSuccess = (userId, email, login) => (
    {type: SET_USER_DATA, data: {userId, email, login}}
)

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDataSuccess(id, email, login))
            }
        })
}

export const tryLogin = (email, password) => {
    // const TESTDATA = {
    //     email: 'ukozin36@gmail.com',
    //     password: 'j[$P-%2C[Fm<oX]D'
    // }

    authAPI.login(email, password)
}





