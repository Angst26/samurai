import {createSlice} from "@reduxjs/toolkit";
import {dialogsAPI} from "../api/api";

const ADD_MESSAGE = 'dialogsPage/ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'dialogsPage/CHANGE_NEW_MESSAGE_TEXT'
const SET_DIALOGS = 'dialogsPage/SET_DIALOGS'


let initialState = {
    dialogs: [
        {id: 1, name: 'Сергиус'},
        {id: 2, name: 'Кирич'},
        {id: 3, name: 'Машуля'},
        {id: 4, name: 'Аня'},
        {id: 5, name: 'Юра'}
    ],
    messages: [
        {id: 1, message: "Hallo, wie geht\'s?"},
        {id: 2, message: "Hallo, es geht. Und dir?"},
        {id: 3, message: "Alles im Lot, danke"},
        {id: 4, message: "du bist Arschloch"},
    ],
    newMessageText: String,
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let {messages} = state
            let newMessage = {
                id: messages.length + 1,
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case CHANGE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.message,
            }
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs,
            }
        default:
            return state
    }
}

export const changeNewMessageTextAC = (text) => ({type: CHANGE_NEW_MESSAGE_TEXT, message: text});
export const addMessageAC = () => ({type: ADD_MESSAGE})
const setDialogsAC = (dialogs) => {
    return {type: SET_DIALOGS, dialogs};
}

//thunks

export const setDialogsThunk = () => async (dispatch) => {
    const dialogs = await dialogsAPI.getAllDialogs()
    dispatch(setDialogsAC(dialogs))
}


///////////////////refactoring
// const dialogsSlice = createSlice({
//     name: "dialogs",
//     initialState: initialState,
//     reducers: {
//         addMessage: (state, action) => {
//
//         }
//     }
// })



