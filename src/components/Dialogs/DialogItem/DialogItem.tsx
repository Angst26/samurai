import {NavLink} from "react-router-dom";
import {Box} from "@mui/material";
import React from "react";

interface DialogItemProps {
    id: number,
    name: string
}

const DialogItem: React.FC<DialogItemProps> = (props) => {
    return (
        <Box >
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </Box>
    )
}



export default DialogItem;