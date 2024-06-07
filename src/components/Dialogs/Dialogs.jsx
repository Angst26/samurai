import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Сергиус'},
        {id: 2, name: 'Кирич'},
        {id: 3, name: 'Машуля'},
        {id: 4, name: 'Аня'},
    ]
    let messagesData = [
        {id: 1, message: "Hallo, wie geht\'s?"},
        {id: 2, message: "Hallo, es geht. Und dir?"},
        {id: 3, message: "Alles im Lot, danke"},
        {id: 4, message: "du bist Arschloch"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    )
}

export default Dialogs;