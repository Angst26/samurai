import {addMessageAC, changeNewMessageTextAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {DialogsState} from "./types";
import {ThunkDispatch} from "redux-thunk";


const mapStateToProps = (state: DialogsState) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: ThunkDispatch<DialogsState, void, any>) => {
    return {
        changeNewMessageText: (text: string) => {
            dispatch(changeNewMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(addMessageAC())
        }
    }
}



export default compose<any>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)