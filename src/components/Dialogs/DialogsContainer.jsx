import React from "react";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeNewMessageText: (text) => {
            dispatch(changeNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs))

export default DialogsContainer