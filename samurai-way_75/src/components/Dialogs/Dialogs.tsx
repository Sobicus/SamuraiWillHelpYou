import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    DialogsPageType
} from "../../redux/store";
import {ChangeEvent} from 'react';
import {Redirect} from "react-router-dom";

export const Dialogs = (props: DialogsType) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messagesData.map((message) => <Message message={message.message}
                                                                        id={message.id}/>)
    let onSendMessageClick = () => {
        props.sendMessageAC()
    }
    let newMessageBody = state.newMessageBody
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageBody = e.target.value
        //props.store.dispatch(updateNewMessageBodyActionCreator(newMessageBody))
        props.updateNewMessageBodyAC(newMessageBody)
    }
    /*
    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }
    */

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your messages'
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
type DialogsType = {
    /*store: StoreType*/
    updateNewMessageBodyAC: (newMessageBody: string) => void
    sendMessageAC: () => void
    dialogsPage: DialogsPageType
    //isAuth: boolean
}