import {authAPI} from "../api/api";
import {FormikHelpers} from "formik";
import {ILoginFormValues} from "../components/Login/LoginForm";
import {ThunkDispatch} from "redux-thunk";

const SET_USER_DATA = 'samurai_network/authReducer/SET_USER_DATA';

interface State {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

export interface Action<T> {
    type: string;
    data? :T;
}

interface authUserData<T> {
    type: string;
    data: T
}



let initialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: State = initialState, action: Action<State>) => {

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



export const setAuthUserDataAC = (userId: number, email: string, login: string, isAuth: boolean) => (
    {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
)

export const getAuthUserData = () => async (dispatch: (arg0: authUserData<State>) => void) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }

}

export const login = (email: string, password: string, rememberMe: boolean, {setErrors}: FormikHelpers<ILoginFormValues>) => async (dispatch: ThunkDispatch<any, any, any>) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        //success
        await dispatch(getAuthUserData())
    } else {
        //went wrong
        const msg = response.data.messages.length > 0 ? response.data.messages[0] : 'something went wrong';
        setErrors({general: msg})
    }
}

export const logout = () => async (dispatch: (arg0: authUserData<State>) => void) => {

    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(0, '', '', false))
    }

}





