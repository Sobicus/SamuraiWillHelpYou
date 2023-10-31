import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={style.content}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    <Post message={'Hi, how are you?'} likeCounter={15}/>
                    <Post message={'It is my first post'} likeCounter={20}/>
                </div>
            </div>
        </div>
    )
}

