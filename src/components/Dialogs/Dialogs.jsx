import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props/*state*/) => {
//Data



    //Arrays by mapping

    let dialogElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} />)

    let messageElements = props.state.messages.map( m => <Message content={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;