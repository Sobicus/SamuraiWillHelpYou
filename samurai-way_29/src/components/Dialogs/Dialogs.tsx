import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../index";

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={style.messages}>
                {props.messagesData.map((message) => <Message message={message.message} id={message.id}/>)}
            </div>
        </div>
    )
}
type DialogsType = {
    dialogsData: DialogsDataType[]
    messagesData:MessagesDataType[]
}