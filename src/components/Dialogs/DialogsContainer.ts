import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Action, compose} from "redux";
import {AppState} from "../types";
import {ThunkDispatch} from "redux-thunk";


let mapStateToProps = (state: AppState) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, Action>) => {
    return {
        changeNewMessageText: (text: string) => {
            dispatch(changeNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)