import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: DialogItemPropsType) => {
    /*let path = `/dialogs/${props.id}`}*/
    return (
        <div className={style.dialog}>

            <NavLink to={`/dialogs/${props.id}`} /*{'/dialogs/ + props.id'}*/ activeClassName={style.active}>
                {props.name}
            </NavLink>
        </div>
    )
}
type DialogItemPropsType = {
    id: number
    name: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}
type MessagePropsType = {
    id: number
    message: string
}
export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Viktoriia'},
        {id: 2, name: 'Mark'},
        {id: 3, name: 'Alina'},
        {id: 4, name: 'Maks'},
        {id: 5, name: 'Lubov'},
        {id: 6, name: 'Anatoliy'},
    ]
    let messagesData=[
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your going?'},
        {id: 3, message: 'Good, and you?'},
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    )
}