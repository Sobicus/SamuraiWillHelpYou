import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Viktoriia'},
        {id: 2, name: 'Mark'},
        {id: 3, name: 'Alina'},
        {id: 4, name: 'Maks'},
        {id: 5, name: 'Lubov'},
        {id: 6, name: 'Anatoliy'},
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your going?'},
        {id: 3, message: 'Good, and you?'},
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={style.messages}>
                {messagesData.map((message) => <Message message={message.message} id={message.id}/>)}
            </div>
        </div>
    )
}