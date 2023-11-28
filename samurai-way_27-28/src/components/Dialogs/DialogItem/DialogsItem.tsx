import style from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const DialogItem = (props: DialogItemPropsType) => {
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