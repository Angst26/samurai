import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React, {RefObject} from "react";
import { Button, Input} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";


export interface IDialogsPage {
    dialogs: {
        id: number;
        name: string;
    }[];
    messages: {
        id: number;
        message: string;
    }[];
    newMessageText: string;
}

interface DialogsProps {
    dialogsPage: IDialogsPage;
}

const Dialogs = (props: DialogsProps) => {
//Data
    const validationSchema = Yup.object(
        {
            newMessageText: Yup.string().min(3, 'message text cannot be empty').max(10, 'message text cannot be more than 255 characters')
        }
    )

    //Arrays by mapping
    let {dialogs, messages, newMessageText} = props.dialogsPage;
    let dialogElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messageElements = messages.map(m => <Message content={m.message}/>)

    const newMessage: RefObject<HTMLTextAreaElement> = React.createRef()

    const formik = useFormik({
        initialValues: {
            messageText: '',
        },
        validationSchema: Yup.object({
            messageText: Yup.string()
                .max(255, 'message text cannot be more than 255 characters')
        }),
        onSubmit: (values) =>
            alert(JSON.stringify(values, null, 2)),

    })


    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                   id="messageText"
                   name="messageText"
                   type="text"
                   style={{backgroundColor: 'white'}}
                   placeholder="Type message"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.messageText}
            />
            {formik.touched.messageText && formik.errors.messageText ? (
                <div>{formik.errors.messageText}</div>
            ): null}
            <div>
                <Button
                    type='submit'
                    disabled={formik.isSubmitting}
                >Send</Button>
            </div>
        </form>
    )
}

export default Dialogs;