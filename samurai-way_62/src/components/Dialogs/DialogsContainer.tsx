import {StateType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialog-reducer';
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessageAC: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBodyAC: (newMessageBody: string) => {
            dispatch(updateNewMessageBodyAC(newMessageBody))
        }
    }
}*/

export const DialogsContainer = connect(mapStateToProps, {
    sendMessageAC: sendMessageAC,
    updateNewMessageBodyAC: updateNewMessageBodyAC
})(Dialogs)
