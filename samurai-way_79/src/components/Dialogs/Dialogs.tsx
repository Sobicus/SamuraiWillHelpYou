import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    DialogsPageType
} from "../../redux/store";
import {ChangeEvent} from 'react';
import {Field, Formik} from "formik";

export const Dialogs = (props: DialogsType) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messagesData.map((message) => <Message message={message.message}
                                                                        id={message.id}/>)
    /*let onSendMessageClick = () => {
        props.sendMessageAC()
    }*/
    /*let newMessageBody = state.newMessageBody*/
    /*let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageBody = e.target.value
        props.updateNewMessageBodyAC(newMessageBody)
    }*/
    let addNewMessage = (newMessageBody: string) => {
        props.sendMessageAC(newMessageBody)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    {/*<div>*/}
                    {/*    <textarea placeholder='Enter your messages'*/}
                    {/*              value={newMessageBody}*/}
                    {/*              onChange={onNewMessageChange}*/}
                    {/*    ></textarea>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <button onClick={onSendMessageClick}>Send</button>*/}
                    {/*</div>*/}
                    <AddMessageForm addNewMessage={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}


const AddMessageForm = (props: AddMessageFormType) => {
    return (
        <div>
            <Formik
                initialValues={{
                    newText: '',
                }}
                /*
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        props.addNewMessage(values.newText)
                        setSubmitting(false);
                    }, 400);
                }}
                */
                onSubmit={(values, {setSubmitting}) => {

                    props.addNewMessage(values.newText)
                    //values.newText = ''
                    setSubmitting(false)

                }}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            as={'textarea'}
                            type="newText"
                            name="newText"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.newText}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
type DialogsType = {
    /*updateNewMessageBodyAC: (newMessageBody: string) => void*/
    sendMessageAC: (newMessageBody: string) => void
    dialogsPage: DialogsPageType
}
type AddMessageFormType = {
    addNewMessage: (value: string) => void
}