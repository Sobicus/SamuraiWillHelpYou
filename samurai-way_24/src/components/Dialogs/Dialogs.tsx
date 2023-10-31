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
type DialogItemPropsType ={
    name:string
    id:number
}
const Message = (props:MessagePropsType)=>{
    return(
        <div className={style.message}>{props.message}</div>
    )
}
type MessagePropsType={
    message:string
}
export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={'Viktoriia'} id={1}/>
                <DialogItem name={'Mark'} id={2}/>
                <DialogItem name={'Alina'} id={3}/>
                <DialogItem name={'Maks'} id={4}/>
                <DialogItem name={'Lubov'} id={5}/>
                <DialogItem name={'Anatoliy'} id={6}/>
            </div>
            <div className={style.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your going?'}/>
                <Message message={'Good, and you?'}/>
            </div>
        </div>
    )
}