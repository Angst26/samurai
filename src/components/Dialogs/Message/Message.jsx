import s from "./../Dialogs.module.css";



const Message = (props) => {
    return <div className={s.message}>{props.content}</div>
    }


export default Message;