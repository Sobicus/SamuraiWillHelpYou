import {sendMessageAC} from '../../redux/dialog-reducer';
import {Dialogs} from "./Dialogs";
import {compose} from "redux";
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
export const DialogsContainer= compose<React.ComponentType>(
    connect(mapStateToProps, {
        sendMessageAC: sendMessageAC
    }),
    withAuthRedirect
)(Dialogs)