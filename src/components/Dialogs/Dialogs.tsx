import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {RefObject} from "react";
import {Box} from "@mui/material";
import {DialogsPage} from "../types";


interface DialogsProps {
    dialogsPage: DialogsPage;
    sendMessage: () => void;
    changeNewMessageText: (text: string) => void;
}
const Dialogs = (props: DialogsProps) => {
//Data

    //Arrays by mapping
    let {dialogs, messages, newMessageText} = props.dialogsPage;
    let dialogElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messageElements = messages.map(m => <Message content={m.message} />)

    const newMessage: RefObject<HTMLTextAreaElement> = React.createRef()

    function sendMessage() {
        props.sendMessage()
    }

    let handleChangeMessage = () => {
        if(newMessage.current) {
            const text = newMessage.current.value;
            props.changeNewMessageText(text)
        }
    }

    return (
        <Box display={'grid'} gridTemplateColumns={'2fr 10fr'} >
            <Box padding={'10px'}>
                {dialogElements}
            </Box>
            <Box padding={'10px'}>
                {messageElements}
                <Box>
                    <textarea ref={newMessage}
                              onChange={handleChangeMessage}
                              placeholder={`Enter a message...`}
                              value={newMessageText}
                    />
                    <Box>
                        <button onClick={sendMessage}>Отправить</button>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Dialogs;