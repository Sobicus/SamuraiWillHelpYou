import {UserType} from "../../redux/users-reducer";
import style from "./Users.module.css";
import userPhotoTemplate from "../../assets/img/avatar.jpg";
import React from "react";
import {NavLink} from "react-router-dom";

export const User = (props: UserComponentType) => {
    return (<div key={props.user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + props.user.id}>
                                <img alt='avatar'
                                     src={props.user.photos.small != null ? props.user.photos.small : userPhotoTemplate}
                                     className={style.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {props.user.followed ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                                  onClick={() => {
                                                      props.unFollowTC(props.user.id)
                                                  }}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                        onClick={() => {
                                            props.followTC(props.user.id)
                                        }}>Follow</button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{props.user.name}</div>
                            <div>{props.user.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
        </div>
    )
}
type UserComponentType = {
    user: UserType
    followingInProgress: number[]
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}