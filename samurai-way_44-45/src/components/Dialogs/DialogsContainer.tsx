import {StateType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialog-reducer';
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

/*export const DialogsContainer = (props: DialogsType) => {
    let state = props.store.getState().dialogsPage
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (newMessageBody: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(newMessageBody))
    }
    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    )
}*/
let mapStateToProps= (state: AppStateType) => {
    return{
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps= (dispatch:Dispatch) => {
    return{
        sendMessageActionCreator:()=>dispatch(sendMessageActionCreator()),
        updateNewMessageBodyActionCreator:(newMessageBody:string)=>dispatch(updateNewMessageBodyActionCreator(newMessageBody))
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
/*type DialogsType = {
    store: StoreType
}*/