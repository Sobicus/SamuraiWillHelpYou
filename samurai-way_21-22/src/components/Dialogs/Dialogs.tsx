import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog} >
                    <NavLink to='/dialogs/1' activeClassName={style.active}>
                        Vika
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={style.active}>
                        Mark
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={style.active}>
                        Alina
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={style.active}>
                        Maks
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/5' activeClassName={style.active}>
                        Lubov
                    </NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How is your going?</div>
                <div className={style.message}>Good, and you?</div>
            </div>
        </div>
    )
}