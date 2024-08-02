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

            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
)

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email, password, rememberMe, setErrors) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                //success
                dispatch(getAuthUserData())
            } else  {
                //went wrong
                let msg = response.data.messages.length > 0? response.data.messages[0] : 'something went wrong';
                setErrors({general: msg})
            }
        })
        .catch(
            error => {
                setErrors({general: 'an error occurred', error})
            }
        )
}

export const logout = () => (dispatch) => {

    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}





