const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'

export let dialogsReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let {messages} = state
        let newMessage = {
            id: messages.length + 1,
            message: state.newMessageText
        }
        messages.push(newMessage)
        state.newMessageText = ''
    } else if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.message
    }

    return state

}