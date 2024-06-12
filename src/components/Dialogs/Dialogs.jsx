import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {
//Data

    //Arrays by mapping

    let dialogElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messageElements = props.messages.map(m => <Message content={m.message} id={m.id}/>)

    let newMessage = React.createRef()

    function sendMessage() {
        props.sendMessage()
    }

    let onChangeMessage = () => {
        let text = newMessage.current.value;
        props.changeMessage(text)
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