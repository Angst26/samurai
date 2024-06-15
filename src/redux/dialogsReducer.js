const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'

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

export let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let {messages} = state
            let newMessage = {
                id: messages.length + 1,
                message: state.newMessageText
            }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy;
        }
        case CHANGE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.message
            return stateCopy
        }
        default: {
            return state
        }
    }
}

export const changeNewMessageTextActionCreator = (text) => ({type: CHANGE_NEW_MESSAGE_TEXT, message: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})