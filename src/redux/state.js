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
        if (action.type === ADD_POST) {
            let {posts} = this._state.profilePage;
            let newPost = {
                id: posts[posts.length - 1].id + 1,
                content: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._renderEntireTree(this._state)
            this._state.profilePage.newPostText = ''
        } else if (action.type === CHANGE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._renderEntireTree(this._state)
        } else if(action.type === ADD_MESSAGE){
            let {messages} = this._state.messagesPage
            let newMessage = {
                id: messages.length + 1,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messages.push(newMessage)
            this._renderEntireTree(this._state)
            this._state.messagesPage.newMessageText = ''
        } else if(action.type === CHANGE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.message
            this._renderEntireTree(this._state)
        }

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

export const addPostActionCreator = () => {
    return ({
        type: 'ADD-POST',
    })
}

export const createNewMessageTextActionCreater = (text) => ({type: CHANGE_NEW_MESSAGE_TEXT, message: text});

export const addMessageActionCreator = () => ({type:ADD_MESSAGE})

window.store = store

export default store;