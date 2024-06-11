import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreater, createNewMessageTextActionCreater} from "../../redux/state";


const Dialogs = (props) => {
//Data

    //Arrays by mapping

    let dialogElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messageElements = props.state.messages.map(m => <Message content={m.message} id={m.id}/>)

    let newMessage = React.createRef()

    function sendMessage() {
        props.dispatch(addMessageActionCreater())
    }

    let onChangeMessage = () => {
        let text = newMessage.current.value;
        props.dispatch(createNewMessageTextActionCreater(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.sendform}>
                    <textarea ref={newMessage}
                              onChange={onChangeMessage}
                              placeholder={`Enter a message...`}
                              value={props.newMessageText}/>
                    <div>
                        <button onClick={sendMessage}>Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;