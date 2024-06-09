import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {
//Data



    //Arrays by mapping

    let dialogElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} />)

    let messageElements = props.state.messages.map( m => <Message content={m.message} id={m.id} />)

    let newMessage = React.createRef()
    function sendMessage() {
        console.log('сообщение отправлено:' + ` "${newMessage.current.value}"`)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.sendform}>
                    <textarea ref={newMessage}/>
                    <div><button onClick={sendMessage}>Отправить</button></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;