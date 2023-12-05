import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={style.messages}>
                {props.state.messagesData.map((message) => <Message message={message.message} id={message.id}/>)}
            </div>
        </div>
    )
}
type DialogsType = {
    state: DialogsPageType
}