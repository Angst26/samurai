import React from "react";
import {Box} from "@mui/material";

interface MessageProps {
    content: string
}

const Message: React.FC<MessageProps> = (props) => {
    return (
        <Box>
            {props.content}
        </Box>
    )
}


export default Message;