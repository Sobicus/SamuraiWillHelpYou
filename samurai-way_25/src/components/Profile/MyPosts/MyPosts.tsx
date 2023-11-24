import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let messagesData = [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It is my first post', likeCount: 20},
    ]

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
                    {messagesData.map((message) => <Post message={message.message} likeCount={message.likeCount}/>)}
                    {/*<Post message={messagesData[0].message} likeCount={messagesData[0].likeCount}/>*/}
                    {/*<Post message={messagesData[1].message} likeCount={messagesData[1].likeCount}/>*/}
                </div>
            </div>
        </div>
    )
}

