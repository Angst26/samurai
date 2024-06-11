import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, content: 'Das ist mein erster Post da', likesCount: 10},
                {id: 2, content: 'Viel Glueck dir dabei!', likesCount: 16},
            ],
            newPostText: String,
        },

        messagesPage: {
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
        },

        sidebar: {
            friendsList: [

                {
                    img: "https://sun9-62.userapi.com/impg/GXKF7qvn3U_lHvLJaHkajrym3OE6N1BnumvOjA/nXJsbA-Ccm4.jpg?size=810x1080&quality=95&sign=f0f9084e9214289ef1e326e28dac546d&type=album",
                    id: 1,
                    name: 'Кирилл',
                    postname: 'Библив'
                },
                {
                    img: "https://sun9-80.userapi.com/impg/To85ionWWoeYtswukH1XNj7H_2sg3s9_h7eaYQ/Rh2ttouOTU4.jpg?size=997x1280&quality=95&sign=685a54c998469a46fa85ac87df1b8f6d&type=album",
                    id: 2,
                    name: 'Соловьёв',
                    postname: 'Сергей'
                }
            ]

        }
    },
    _renderEntireTree: () => {
    },


    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._renderEntireTree(this._state)

    },

    subscribe(observer) {
        this._renderEntireTree = observer
    }
}

export const changeNewPostTextActionCreator = (text) => {
    return (
        {
            type: 'CHANGE-NEW-POST-TEXT',
            newPostText: text,
        }
    )
}

export const addPostActionCreater = () => {
    return ({
        type: 'ADD-POST',
    })
}

export const createNewMessageTextActionCreater = (text) => ({type: CHANGE_NEW_MESSAGE_TEXT, message: text});

export const addMessageActionCreater = () => ({type: ADD_MESSAGE})

window.store = store

export default store;