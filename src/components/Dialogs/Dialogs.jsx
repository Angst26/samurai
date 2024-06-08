import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

// const DialogsItem = (props) => {
//     return (
//         <div className={s.dialog + ' ' + s.active}>
//             <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
//         </div>
//     )
// }
//
// const Message = (props) => {
//     return <div className={s.message}>{props.message}</div>
// }

const Dialogs = () => {
//Data
    let dialogs = [
        {id: 1, name: 'Сергиус'},
        {id: 2, name: 'Кирич'},
        {id: 3, name: 'Машуля'},
        {id: 4, name: 'Аня'},
        {id:5, name:'Юра'}
    ]
    let messages = [
        {id: 1, message: "Hallo, wie geht\'s?"},
        {id: 2, message: "Hallo, es geht. Und dir?"},
        {id: 3, message: "Alles im Lot, danke"},
        {id: 4, message: "du bist Arschloch"},
    ]

    //Arrays by mapping

    let dialogElements = dialogs.map( d => <DialogItem id={d.id} name={d.name} />)


    let messageElements = messages.map( m => <Message message={m.message} id={m.id} />)

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