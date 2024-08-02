import {Action} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {getAuthUserData} from "./authReducer";
import {rootState} from "./reduxStore";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, rootState, void, Action>


let initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,

            }
        default:
            return state
    }
}

export const initializedSuccess = (): Action => (
    {type: INITIALIZED_SUCCESS}
)

export const initializeApp = (): AppThunk => (dispatch: ThunkDispatch<rootState, void, Action>) => {
    let promise: Promise<any> = dispatch(getAuthUserData())


    // waiting for other dispatch...
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })

}
