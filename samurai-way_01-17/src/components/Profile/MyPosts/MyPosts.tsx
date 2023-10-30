import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={style.content}>
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={style.posts}>
                   <Post message={'Hi, how are you?'} likeCounter={15}/>
                   <Post message={'It is my first post'} likeCounter={20}/>
                </div>
            </div>
        </div>
    )
}

