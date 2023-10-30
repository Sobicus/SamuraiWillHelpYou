import React from "react";
import style from './Post.module.css'

export const Post = (props:PostType) => {
    return (
        <div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkwUuH1nLTA_3tYTUKCYbJIjYDbm_FltuSA&usqp=CAU"
                alt=""/>
            {props.message}
            <div>
                <span>like </span>{props.likeCounter}
            </div>
        </div>
    )
}
type PostType={
    message:string
    likeCounter:number
}