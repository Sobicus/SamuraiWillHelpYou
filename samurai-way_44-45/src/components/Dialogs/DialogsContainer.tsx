import {StoreType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialog-reducer';
import {Dialogs} from "./Dialogs";

export const DialogsContainer = (props: DialogsType) => {
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
}
type DialogsType = {
    store: StoreType
}