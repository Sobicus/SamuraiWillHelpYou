import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/users' activeClassName={style.active}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active}> News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}> Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}> Settings</NavLink>
            </div>
        </nav>)
}