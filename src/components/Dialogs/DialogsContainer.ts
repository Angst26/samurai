import {addMessageAC, changeNewMessageTextAC, setDialogsThunk as setDialogs} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Action, compose} from "redux";
import {DialogsState} from "./types";
import {ThunkDispatch} from "redux-thunk";
import {dialogsAPI} from '../../api/api'



const mapStateToProps = (state: DialogsState) => {
    return {
        dialogsPage: state.dialogsPage,
        getAllDialogs: dialogsAPI.getAllDialogs,
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<DialogsState, Action, any>) => {
    return {
        changeNewMessageText: (text: string) => {
            dispatch(changeNewMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(addMessageAC())
        },
    }
}



export default compose<any>(
    connect(mapStateToProps, {...mapDispatchToProps, setDialogs}),
    withAuthRedirect
)(Dialogs)