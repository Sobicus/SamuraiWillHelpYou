import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialog-reducer';
import {Dialogs} from "./Dialogs";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        //isAuth:state.auth.isAuth
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

// export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, {
//     sendMessageAC: sendMessageAC,
//     updateNewMessageBodyAC: updateNewMessageBodyAC
// })(Dialogs))

export const DialogsContainer= compose<React.ComponentType>(
    connect(mapStateToProps, {
        sendMessageAC: sendMessageAC,
        updateNewMessageBodyAC: updateNewMessageBodyAC
    }),
    withAuthRedirect
)(Dialogs)