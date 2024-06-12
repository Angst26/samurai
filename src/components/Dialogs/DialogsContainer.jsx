import React from "react";
import {addMessageActionCreator, createNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let sendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let changeMessage = (text) => {
        props.dispatch(createNewMessageTextActionCreator(text))
    }
    debugger
    return (
        <Dialogs sendMessage={sendMessage} changeMessage={changeMessage} dialogs={props.state.dialogs}
                 newMessageText={props.state.newMessageText} messages={props.state.messages}/>
    )
}

export default DialogsContainer;