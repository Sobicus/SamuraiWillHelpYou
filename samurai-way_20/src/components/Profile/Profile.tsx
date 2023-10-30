import React from "react";
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
export const Profile = () => {
    return (
        <div >
            <div>
                <div className={style.backgroundImg}>
                    <img src="https://images3.alphacoders.com/132/1328863.png" alt="conten picture"/>
                </div>
                <div className={style.profileDescription}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkwUuH1nLTA_3tYTUKCYbJIjYDbm_FltuSA&usqp=CAU"
                        alt=""/>
                    ava + description
                </div>
                <MyPosts/>
            </div>
        </div>
    )
}

