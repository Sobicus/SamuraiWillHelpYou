import {UserType} from "../../redux/users-reducer";
import style from "./Users.module.css";
import userPhotoTemplate from "../../assets/img/avatar.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator";


export const Users = (props: UsersType) => {
    /*let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log('page', pages)*/
    return (
        <div>
            <Paginator pageSize={props.pageSize} totalCount={props.totalCount} currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
            {/*<div>*/}
            {/*    {pages.map(p => {*/}
            {/*        return <span*/}
            {/*            className={props.currentPage === p ? style.selectedPage : ''}*/}
            {/*            onClick={() => {*/}
            {/*                props.onPageChanged(p)*/}
            {/*            }}>{p}</span>*/}
            {/*    })}*/}
            {/*</div>*/}
            {props.users.map(u => {
                return <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img alt='avatar' src={u.photos.small != null ? u.photos.small : userPhotoTemplate}
                                     className={style.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.unFollowTC(u.id)
                                                  }}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.followTC(u.id)
                                        }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            })}
        </div>
    )
}
type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}