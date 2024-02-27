import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props: HeaderType) => {
    return (
        <header className={style.header}>
            <img src='https://download.blender.org/branding/community/blender_community_badge_white.png'/>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>
                        Login
                    </NavLink>}
            </div>
        </header>
    )
}
type HeaderType = {
    isAuth: boolean
    login: string
    logout: () => void
}