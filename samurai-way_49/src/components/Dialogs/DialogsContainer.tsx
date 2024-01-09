import {StateType, StoreType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialog-reducer';
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps= (state: AppStateType) => {
    return{
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps= (dispatch:Dispatch) => {
    return{
        sendMessageActionCreator:()=>{dispatch(sendMessageActionCreator())},
        updateNewMessageBodyActionCreator:(newMessageBody:string)=>{dispatch(updateNewMessageBodyActionCreator(newMessageBody))}
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
